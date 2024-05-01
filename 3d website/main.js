import './style.css'

import * as Three from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new Three.Scene()

const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)

const renderer = new Three.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

camera.position.setZ(30)

renderer.render(scene, camera)

const geometry = new Three.TorusGeometry(10, 2, 16, 100)
const material = new Three.MeshStandardMaterial({ color: 0xFF6347 })
const torus = new Three.Mesh(geometry, material)
scene.add(torus);

const pointlight = new Three.PointLight(0xffffff)
pointlight.position.set(5, 5, 5)

const ambientLight = new Three.AmbientLight(0xffffff)

scene.add(pointlight, ambientLight)

const lightHelper1 = new Three.PointLightHelper(pointlight)
const lightHelper2 = new Three.PointLightHelper(ambientLight)
scene.add(lightHelper1, lightHelper2)

const gridHelper = new Three.GridHelper(200, 50)
scene.add(gridHelper)

const controls = new OrbitControls(camera, renderer.domElement)

function addStar() {
  const geometry = new Three.SphereGeometry(0.25, 24, 24)
  const material = new Three.MeshStandardMaterial({ color: 0xffffff })
  const star = new Three.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => Three.MathUtils.randFloatSpread(100))

  star.position.set(x, y, z)
  // star.scale.set(2, 2, 2)
  scene.add(star)
}

Array(400).fill().forEach(addStar)

//moon 

const moonTexture = new Three.TextureLoader().load('moon.jpg')
const moon = new Three.Mesh(
  new Three.SphereGeometry(3, 32, 32),
  new Three.MeshStandardMaterial({
    map: moonTexture,
  })
)
moon.position.z = 30
moon.position.setX(-10)

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05
  moon.rotation.y += 0.075
  moon.rotation.z += 0.05

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.01;
  camera.position.y = t * -0.01;

}

document.body.onscroll = moveCamera


scene.add(moon)

const spaceTexture = new Three.TextureLoader().load('space.jpg')
// scene.background = spaceTexture;

function animate() {
  requestAnimationFrame(animate)
  torus.rotation.x += 0.03
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01

  controls.update()
  renderer.render(scene, camera)
}

animate()