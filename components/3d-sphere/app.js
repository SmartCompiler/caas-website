import { 
  DirectionalLight, 
  AmbientLight, 
  IcosahedronGeometry, 
  MeshStandardMaterial,
  Mesh,
  LinearFilter,
  WebGLRenderTarget
} from 'three'
import { getCamera, getRenderSize, getScene, getTick } from './render/init.js'
// import postprocessing passes
import { SavePass } from 'three/examples/jsm/postprocessing/SavePass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { BlendShader } from 'three/examples/jsm/shaders/BlendShader.js'
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js'

import vertexParse from './shaders/vertex-pars.glsl'
import vertexMain from './shaders/vertex-main.glsl'
import fragmentPars from './shaders/fragment_pars.glsl'
import fragmentMain from './shaders/fragment_main.glsl'

const startApp = () => {
  const scene = getScene()
  const { width, height } = getRenderSize()

  // settings
  const MOTION_BLUR_AMOUNT = 0.725

  // lighting
  const dirLight = new DirectionalLight('#36938a', 1.5)
  dirLight.position.set(10, 10, 2)

  const ambientLight = new AmbientLight('#3aa294', 0.9)
  scene.add(dirLight, ambientLight)

  // meshes
  const geometry = new IcosahedronGeometry(1, 300)
  const material = new MeshStandardMaterial({
    onBeforeCompile(shader) {
      // Storing a reference to the shader object
      material.userData.shader = shader 

      // uniforms
      shader.uniforms.uTime = { value: 0 }

      const parsVertextString = /* glsl*/ `#include <displacementmap_pars_vertex>`
      shader.vertexShader = shader.vertexShader.replace(
        parsVertextString,
        parsVertextString + vertexParse
      )
      
      const mainVertexString = /* glsl */ `#include <displacementmap_vertex>`
      shader.vertexShader = shader.vertexShader.replace(
        mainVertexString,
        mainVertexString + vertexMain
      )

      const mainFragmentString = /* glsl */ `#include <normal_fragment_maps>`
      const parsFragmentString = /* glsl */ `#include <bumpmap_pars_fragment>`
         shader.fragmentShader = shader.fragmentShader.replace(
        parsFragmentString,
        parsFragmentString + fragmentPars
      )
      shader.fragmentShader = shader.fragmentShader.replace(
        mainFragmentString,
        mainFragmentString + fragmentMain
      )
    }
  })

  const ico = new Mesh(geometry, material)
  scene.add(ico)

  // postprocessing
  const renderTargetParameters = {
    minFilter: LinearFilter,
    magFilter: LinearFilter,
    stencilBuffer: false,
  }

  // save pass
  const savePass = new SavePass(new WebGLRenderTarget(width, height, renderTargetParameters))

  // blend pass
  const blendPass = new ShaderPass(BlendShader, 'tDiffuse1')
  blendPass.uniforms['tDiffuse2'].value = savePass.renderTarget.texture
  blendPass.uniforms['mixRatio'].value = MOTION_BLUR_AMOUNT

  // output pass
  const outputPass = new ShaderPass(CopyShader)
  outputPass.renderToScreen = true

  getTick(({ timestamp, timeDiff }) => {
    const time = timestamp / 10000;
    if (material?.userData?.shader?.uniforms?.uTime)
    material.userData.shader.uniforms.uTime.value = time
  })
}

export default startApp
