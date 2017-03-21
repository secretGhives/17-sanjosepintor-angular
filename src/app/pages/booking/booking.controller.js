function BookingController($scope, $log, $http, store) {
	'ngInject';

	var vm = this;

	vm.phone = store.phone;
	vm.email = store.email;

	// DATA for COMPONENTS
	vm.surfaces = [
		'Interior wall(s)',
		'Trim',
		'Ceiling(s)',
		'Door(s)',
		'Fence',
		'Cabinetry / woodwork',
		'Furniture',
		'Exterior',
		'other'
	];

	// vm.availability = [
	// 	{ id: 'flexible', name: 'I\'m flexible' },
	// 	{ id: 'fewdays', name: 'In the next few days' },
	// 	{ id: 'asap', name: 'As soon as possible' },
	// 	{ id: 'ondate', name: 'On one particular date' },
	// 	{ id: 'other', name: 'Other' }
	// ];

	// FORM TEMPLATE
	vm.forma = {
		"surface_to_paint": {
			"selected": [],
			"other": ""
		},
		"size_of_project": "",
		"approximate_area": "",
		"location_type": {
			"selected": "",
			"other": ""
		},
		"job_timeframe": {
			"selected": "",
			"date": "",
			"other": ""
		},
		"additional_info": "",
		"additional_details": "",
		"job_location": [],
		"contact_by": {
			"selected": "",
			"email": "",
			"phone": ""
		},
		"full_name": ""
	};
	vm.oriForma = angular.copy(vm.forma);


	// DECLARATIONS
	vm.showMarkerLatlng = showMarkerLatlng;
	vm.currentLocation 	= currentLocation;
	vm.toggle           = toggle;
	vm.exists           = exists;
	vm.submitForm       = submitForm;
	vm.cancelForm       = cancelForm;

	// INIT
	$scope.$on('mapInitialized', function(evt, evtMap) {
		vm.map = evtMap;
	});


	// FUNCTIONS
	function showMarkerLatlng(){
		var temp = vm.map.markers[0].getPosition();
		//alert(temp);
		vm.forma.job_location = temp;
		vm.position = temp;
	}

	function currentLocation(){
		//how do i get current location?
		var options = {
			enableHighAccuracy: true
		};

		navigator.geolocation.getCurrentPosition(function(pos) {
			$scope.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
			console.log(JSON.stringify($scope.position));
		}, 
		function(error) {
			alert('Unable to get location: ' + error.message);
		}, options);
	}

	// Toggle checkboxes
	function toggle(item, list) {
		var idx = list.indexOf(item);
		if (idx > -1) {
			list.splice(idx, 1);
		} else {
			list.push(item);
		}
	}

	// Check if checkbox already checked
	function exists(item, list) {
		return list.indexOf(item) > -1;
	}

	// Submit form to php and email meeeeeeee
	function submitForm(quote) {
		$http({
			url: 'http://sanjosepintor.com/assets/na.php',
			method: 'POST',
			data: quote,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		})
		.then(function (response, status) {
			$log.info('status: ' + status);
			if (response) {
				//$log.info('inside success');
				// display success message
				$scope.$parent.message = true;
				vm.forma = angular.copy(vm.oriForma);
				$scope.quoteForm.$setPristine();
			}
		},function (error){
				$log.error('error status: ' + status);
				//$log.debug(response);
		});
	}

	// Cancel form
	function cancelForm() {
		$scope.$parent.message = false;
		vm.forma = angular.copy(vm.oriForma);
		$scope.quoteForm.$setPristine();
	}


	//$log.debug('Hello from BookingController!');

}

export default BookingController;
