function beforeAfterDirective($window) {
  'ngInject';

  function moveOver(handle, container) {

  	var move = {};
  	var containerWidth = container.prop('clientWidth');

		var moveSlide = function(e) {

			var pageX = e.pageX || e.targetTouches[0].pageX;
			var pageY = e.pageY || e.targetTouches[0].pageY;

			//document.getElementById('separador').style.width

			move = {
				left: pageX,
				top: pageY
			};

			var moveWidth = (move.left + 6)*100/containerWidth+'%';

			handle.css({
				width: moveWidth
			});

			//console.log(container.prop('clientWidth') + ' --- ' + moveWidth);

		}

		// Support desktop + touch
		container[0].addEventListener('touchmove', moveSlide, false);
		container[0].addEventListener('mousemove', moveSlide, false);
	}


  return {
    restrict: 'E',
    scope: {
    	beforeImageUrl : '=',
    	afterImageUrl : '=',
    },
    link: linkFn,
    template: `
			<style>
			#contenedor { 
				height: 420px;
				max-height: 420px;
				max-width: 100%;
				overflow: hidden;
			}
			#contenedor figure { 
				background-image: url({{ afterImageUrl }});
				background-size: initial;
				font-size: 0;
				height: 420px; width: 100%; 
				margin: 0; padding: 0;
				position: relative;
			}

			#separador {
				background-image: url({{ beforeImageUrl }});
				background-size: initial;
				border-right: 5px solid rgba(255,255,255,0.7);
				box-shadow: 10px 0 15px -13px #000;
				height: 420px; width: 50%; 
				max-width: 98.6%; min-width: 0.6%;
				overflow: visible;
				position: absolute; bottom: 0;
				animation: figure 2s 1 normal ease-in-out 0.1s; 
			}

			#separador::before {
				background: url(../../../assets/images/flechas.png) no-repeat scroll 0 center transparent;
				background-size:contain;
				content: " ";
				float: right;
				height: 420px; width: 64px;
				margin-right: -34px;
				position: relative; top:0;
			}
					
			@keyframes figure {
			  0% {width: 0%; }
			  50% {width: 80%; }
			  100% {width: 50%; }
			}
			</style>

			<div id="contenedor" class="slide-comb">
			  <figure>
			    <div id="separador" class="separador"></div>
			  </figure>
			</div>
    `
  };

  function linkFn(scope, elem, attrs, fn, $window) {

  	var container = angular.element(elem[0].querySelector('.slide-comb'));
		var divider = angular.element(elem[0].querySelector('.separador'));

		// Bind move event
		moveOver(divider, container);

    //** On resize
    window.onresize = function () {
			moveOver(divider, container);
			console.log('event fired');
      scope.$apply();
    }

  }
}

export default beforeAfterDirective;