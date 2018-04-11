var renderer;
var scene;
var camera;
function init() {
    scene = new THREE.Scene();//场景
            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);//相机
    renderer = new THREE.WebGLRenderer();//渲染
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
    render();
}
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
window.onload = init;
