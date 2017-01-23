		// Angular Code
		// Lets create an Angular module
		var customers_app = angular.module('customers_app', ['ngRoute']);

		//Routing

		customers_app.config(function($routeProvider) {
			$routeProvider
			.when('/',{
				templateUrl: '/partials/customers.html'
			})
			.when('/orders',{
				templateUrl: '/partials/orders.html'
			})
			.otherwise({
				redirectTo: '/'
			});
		});

		// CONTROLLERS
		// _____Customers______

		customers_app.controller('customersController', function($scope, CustomerFactory) {
			$scope.customers = CustomerFactory.getCustomers(function(data) {
				$scope.customers = data;
			});
			$scope.addcustomer = function() {
				CustomerFactory.addCustomer($scope.newCustomers, function(data) {
					$scope.customers = data;
					$scope.newCustomers = {};
				});
			}
		});


		// _____Orders______

		customers_app.controller('ordersController', function($scope, OrderFactory, CustomerFactory) {
			$scope.customers = CustomerFactory.getCustomers(function(data) {
				$scope.customers = data;
			});
			$scope.orders = OrderFactory.getOrders(function(data) {
				$scope.orders = data;
			});
			$scope.addorder = function() {
				OrderFactory.addOrder($scope.newOrder, function(data) {
					$scope.orders = data;
					$scope.newOrder = {};
				});
			}
		});

		// FACTORIES
		// _____Customers______

		customers_app.factory('CustomerFactory', function($http) {
			var factory = {};
			var customers = [];
			factory.getCustomers = function(callback) {
				$http.get('/customers').success(function(output) {
					customers = output;
					callback(customers);
				});
			}
			// Note the use of callbacks
			factory.addCustomer = function(info, callback) {
				$http.post('/customers', {customer: info}).success(function(output) {
					console.log(output);
					customers.push({name: info.name, date: output.date, _id: output._id});
					callback(customers);
				});
			}
			return factory;
		});


		// _____Orders______

		customers_app.factory('OrderFactory', function($http) {
			var factory = {};
			var orders = [];
			factory.getOrders = function(callback) {
				$http.get('/orders').success(function(output) {
					orders = output;
					callback(orders);
				});
			}
			// Note the use of callbacks
			factory.addOrder = function(info, callback) {
				console.log(info.name);
				$http.post('/orders', {order: info}).success(function(output) {
					orders.push({name: info.name, product: info.product, quantity: info.quantity, date: output.date});
					callback(orders);
				});
			}
			return factory;
		});