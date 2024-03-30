
precision mediump float;


varying vec3 vPosition;
varying vec2 vUv;
varying vec3 vNormal;
varying float vDisplacement;

void main() {

	gl_FragColor = vec4(vec3(vDisplacement), 1); 
}