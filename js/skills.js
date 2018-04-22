$(document).ready(function () {
    var data = [
        "Javascript", 1, 1,
        "HTML", 1, 2,
        "CSS", 1, 3,
        "three.js", 1, 5,
        "SCSS", 1, 6,

        "Java", 2, 1,

        "C", 3, 1,
        "C++", 3, 2,

        "Python", 4, 1,

        "PHP", 5, 1,
        "SQL", 5, 2,

        "Regular Expressions", 6, 1,

        "OpenGL", 7, 1,
        "OpenCV", 7, 2,
    ];

    var camera, scene, renderer;
    var controls;

    var GAP = 107;
    var MAX_COL = 9;

    var objects = [];
    var grid = [];

    var showed = false;

    init();

    function skillShowOnce() {
        if (!showed) {
            if ($(window).scrollTop() + 300 >= $('section.skills').offset().top) {
                transform(grid, 1000);
                animate();
                showed = true;
            }
        }
    }


    function init() {
        camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 2000;

        scene = new THREE.Scene();
        window.scene = scene;

        for (var i = 0; i < data.length; i += 3) {

            var element = document.createElement('div');
            element.className = 'box';
            element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';

            var skill = document.createElement('div');
            skill.className = 'skill';
            skill.textContent = data[i];
            element.appendChild(skill);

            var object = new THREE.CSS3DObject(element);
            object.position.x = Math.random() * 4000 - 2000;
            object.position.y = Math.random() * 4000 - 2000;
            object.position.z = Math.random() * 4000 - 2000;
            scene.add(object);

            objects.push(object);
        }

        resetGrid();

        renderer = new THREE.CSS3DRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        var rendererDom = renderer.domElement;
        rendererDom.className = 'skill-renderer'
        $('section.skills').append(rendererDom);

        skillShowOnce();

        window.addEventListener('resize', onWindowResize, false);
        window.addEventListener('scroll', skillShowOnce);

    }

    function transform(targets, duration) {

        TWEEN.removeAll();

        for (var i = 0; i < objects.length; i++) {

            var object = objects[i];
            var target = targets[i];

            new TWEEN.Tween(object.position)
                .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
                .easing(TWEEN.Easing.Exponential.InOut)
                .start();

            new TWEEN.Tween(object.rotation)
                .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
                .easing(TWEEN.Easing.Exponential.InOut)
                .start();

        }

        new TWEEN.Tween(this)
            .to({}, duration * 2)
            .onUpdate(render)
            .start();

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

        resetGrid();
        transform(grid, 1000);

        render();

    }

    function resetGrid() {
        grid = [];
        var col = Math.floor(window.innerWidth / GAP);
        if (col > 4) col--;
        col = (col > MAX_COL) ? MAX_COL : col;
        var offset_x = - (col / 2 - 0.5) * 400;
        var offset_y = 800;

        for (var i = 0; i < objects.length; i++) {
            var object = new THREE.Object3D();
            object.position.x = ((i % col) * 400) + offset_x;
            object.position.y = - (Math.floor(i / col)) * 400 + offset_y;
            object.position.z = -2000;
            grid.push(object);
        }
    }

    function animate() {

        requestAnimationFrame(animate);

        TWEEN.update();
    }

    function render() {
        renderer.render(scene, camera);
    }

});