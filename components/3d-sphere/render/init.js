import { 
  Scene, 
  PerspectiveCamera, 
  WebGLRenderer, 
  PCFSoftShadowMap, 
  WebGLRenderTarget
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import TickManager from './tick-manager.js'

let scene,
  camera,
  renderer,
  composer,
  controls,
  renderWidth,
  renderHeight,
  renderAspectRatio
const renderTickManager = new TickManager()

export const onResizeCallback = () => {
  camera.aspect = renderAspectRatio
  camera.updateProjectionMatrix()
  composer.setSize(renderWidth, renderHeight)
}
export const initEngine = async (sphereRef) => {
  scene = new Scene()

  renderWidth = 370
  renderHeight = 370

  renderAspectRatio = renderWidth / renderHeight

  camera = new PerspectiveCamera(75, renderAspectRatio, 0.1, 100)
  camera.position.z = 2.2
  
  renderer = new WebGLRenderer({ antialias: true, alpha: true})
  renderer.setSize(renderWidth, renderHeight)

  // shadow
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = PCFSoftShadowMap
  sphereRef.current.appendChild(renderer.domElement)

  const target = new WebGLRenderTarget(renderWidth, renderHeight, {
    samples: 8
  })
  composer = new EffectComposer(renderer, target)

  const renderPass = new RenderPass(scene, camera)
  composer.addPass(renderPass)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = false
  controls.enableZoom = false
  controls.enablePan = false

  
  window.addEventListener(
    'resize',
    onResizeCallback
  )

  renderTickManager.startLoop()
}

export const getRenderer = () => renderer

export const getRenderSize = () => ({ width: renderWidth, height: renderHeight })

export const getScene = () => scene

export const getCamera = () => camera

export const getControls = () => controls

export const getComposer = () => composer


export const addPass = (pass) => {
  composer.addPass(pass)
}

export const getTick = (fn) => {
  if (renderTickManager) {
    const _tick = (e) => {
      fn(e.data)
    }
    renderTickManager.addEventListener('tick', _tick)
  }
}