friends_app.controller('FriendsController', function ($scope, FriendFactory) {
	var my = this;

	console.log("Here");

	FriendFactory.index(function(data) {
		my.friends = data;
		console.log(data);
	});

	my.addfriend = function() {
		FriendFactory.create(my.new_friend, function(data) {
			my.friends = data;
		})
		my.new_friend = {};
	};

	my.getFriend = function(friend) {
		FriendFactory.
	}
});