friends_app.factory('FriendFactory', function ($http) {
	var factory = {};
	var friends = [];

	factory.index = function(callback) {
		$http.get('/friends').success(function(output) {
			friends=output;
			callback(friends);
		});
	}

	factory.create = function (info, callback) {
		$http.post('/friends', {friend: info}).success(function(output) {
			console.log(output);
			friends.push({name: info.name, age: info.age});
			callback(friends);
		});
	}

	return factory;
})