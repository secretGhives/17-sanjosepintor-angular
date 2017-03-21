import componentTpl from './testimonials.component.html';

let testimonialsComponent = {
	templateUrl: componentTpl,
	controller: TestimonialsController,
	controllerAs: 'quote',
	bindings: {}
};

function TestimonialsController($scope, $log) {
	'ngInject';
	//$log.debug('Hello from' + 'Testimonials' + 'Controller (component)!');

	//DATA
	var quotes = [
		{
			line: "The best company ever, super fast, super cheap and super reliable!!!",
			character: "Jen J. Escazu"
		},
		{
			line: "This company has prepared the unit to rent in less time than indicated. Will be used again.",
			character: "Roberto S. Rohrmoser"
		}
	];

	//$log.debug(quotes);

	//INIT
	this.info = quotes[Math.floor(Math.random()*quotes.length)];
	this.pick = function(){
		this.info = quotes[Math.floor(Math.random()*quotes.length)];
	};

	//$log.debug(this.info);

}

export default testimonialsComponent;
