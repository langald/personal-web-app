<template>
  <div>
    <div id="waves" style="height: 50vh; width: 100%"></div>

    <div id="vertexshader">

			attribute float scale;

			void main() {

				vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

				gl_PointSize = scale * ( 300.0 / - mvPosition.z );

				gl_Position = projectionMatrix * mvPosition;

			}

		</div>

		<div id="fragmentshader">

			uniform vec3 color;

			void main() {

				if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;

				gl_FragColor = vec4( color, 1.0 );

			}

		</div>
    
  </div>
</template>



<script>
import * as THREE from 'three';
//import WEBGL from 'three/examples/js/WebGL.js'
import Stats from 'three/examples/js/libs/stats.min.js'

//console.log(WEBGL)

export default {
  mounted() {
    

    // if ( WEBGL.isWebGLAvailable() === false ) {
    //   document.body.appendChild( WEBGL.getWebGLErrorMessage() );
    // }
    var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50, MAXSIZE=3, WAVESIZE = 30; 
    var container, stats;
    var camera, scene, renderer;
    var particles, count = 0;
    var mouseX = 0, mouseY = -150;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    init();
    animate();
    function init() {
      container = document.getElementById( 'waves' );
      camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 10000 );
      camera.position.z = 1000;
      scene = new THREE.Scene();
      scene.rotation.x = 0.2;
      //
      var numParticles = AMOUNTX * AMOUNTY;
      var positions = new Float32Array( numParticles * 3 );
      var scales = new Float32Array( numParticles );
      var i = 0, j = 0;
      for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
        for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
          positions[ i ] = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 ); // x
          positions[ i + 1 ] = 0; // y
          positions[ i + 2 ] = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 ); // z
          scales[ j ] = 1;
          i += 3;
          j ++;
        }
      }
      var geometry = new THREE.BufferGeometry();
      geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
      geometry.addAttribute( 'scale', new THREE.BufferAttribute( scales, 1 ) );
      var material = new THREE.ShaderMaterial( {
        uniforms: {
          color: { value: new THREE.Color( 0xffffff ) },
        },
        vertexShader: document.getElementById( 'vertexshader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentshader' ).textContent
      } );
      //
      particles = new THREE.Points( geometry, material );
      scene.add( particles );
      //
      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( container.offsetWidth, container.offsetHeight );
      container.appendChild( renderer.domElement );
      //stats = new Stats();
      //container.appendChild( stats.dom );
      document.addEventListener( 'mousemove', onDocumentMouseMove, false );
      document.addEventListener( 'touchstart', onDocumentTouchStart, false );
      document.addEventListener( 'touchmove', onDocumentTouchMove, false );
      //
      window.addEventListener( 'resize', onWindowResize, false );
    }
    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( container.offsetWidth, container.offsetHeight );
    }
    //
    function onDocumentMouseMove( event ) {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    }
    function onDocumentTouchStart( event ) {
      if ( event.touches.length === 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;
      }
    }
    function onDocumentTouchMove( event ) {
      if ( event.touches.length === 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;
      }
    }
    //
    function animate() {
      requestAnimationFrame( animate );
      render();
      //stats.update();
    }
    function render() {
      camera.position.x += ( mouseX - camera.position.x ) * .05;
      camera.position.y += ( - mouseY - camera.position.y ) * .05;
      camera.lookAt( scene.position );
      var positions = particles.geometry.attributes.position.array;
      var scales = particles.geometry.attributes.scale.array;
      var i = 0, j = 0;
      for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
        for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
          positions[ i + 1 ] = ( Math.sin( ( ix + count ) * 0.3 ) * WAVESIZE ) +
										( Math.sin( ( iy + count ) * 0.5 ) * WAVESIZE );
          scales[ j ] = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * MAXSIZE +
										( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * MAXSIZE;
          i += 3;
          j ++;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;
      particles.geometry.attributes.scale.needsUpdate = true;
      renderer.render( scene, camera );
      count += 0.1;
    }

  }
}

</script>