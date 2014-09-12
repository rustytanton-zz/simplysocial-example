angular.module("simplysocial", ["ngRoute"])

	.directive("ssDeviceProfile", function($window) {
		return {
			restrict : 'A',
			link : function(scope, ele) {
				scope.$watch(function() {
					return $window.innerWidth;
				}, function(width) {
					var device;
					if (width < 640) {
						device = "mobile";
					} else if (width < 1024) {
						device = "tablet";
					} else {
						device = "desktop";
					}
					ele.removeClass("mobile tablet desktop").addClass(device);
				});
				angular.element($window).bind('resize', function() {
					scope.$apply();
				});
			}
		};
	})

	.controller("ssHeaderController", function($scope, $window, $timeout) {
		var userIntentTimeout;
		$scope.doSearch = function(keyEvent) {
			if (keyEvent.which === 13) {
				$window.alert('Would do a search here...');
			}
		};
		$scope.showUserMenu = function() {
			$timeout.cancel(userIntentTimeout);
			$scope.userMenuVisible = true;
		};
		$scope.hideUserMenu = function() {
			userIntentTimeout = $timeout(function() {
				$scope.userMenuVisible = false;
			}, 250);
		};
		$scope.newMessageModal = function() {
			$scope.showCreateModal = true;
		};
		$scope.closeNewMessageModal = function() {
			$scope.showCreateModal = false;
		};
		$scope.postMessage = function() {
			this.closeNewMessageModal();
		};
	})

	.controller("ssFollowersController", function() {})
	.controller("ssFollowingController", function() {})

	.controller("ssMessagesController", function($scope) {
		$scope.messages = [
			{
				avatar : "/images/user-picture-example.jpg",
				name : "Sam Soffes",
				content : "How to Get Inspired: the Right Way - Designmodo bit.ly/1lE4uJc Good stuff from @designmodo!",
				type : "text",
				comments : [
					{
						avatar : "/images/user-picture-example.jpg",
						name : "Jed Bridges",
						content : "Great way to start the week. Thanks for sharing!"
					},
					{
						avatar : "/images/user-picture-example.jpg",
						name : "Ren Walker",
						content : "Feeling inspired npw... thanks for great article @designmodo"
					}
				]
			},
			{
				avatar : "/images/user-picture-example.jpg",
				name : "Sam Soffes",
				content : "How to Get Inspired: the Right Way - Designmodo bit.ly/1lE4uJc Good stuff from @designmodo!",
				type : "text",
				comments : [
					{
						avatar : "/images/user-picture-example.jpg",
						name : "Jed Bridges",
						content : "Great way to start the week. Thanks for sharing!"
					},
					{
						avatar : "/images/user-picture-example.jpg",
						name : "Ren Walker",
						content : "Feeling inspired npw... thanks for great article @designmodo"
					}
				]
			},
			{
				avatar : "/images/user-picture-example.jpg",
				name : "Sam Soffes",
				content : "How to Get Inspired: the Right Way - Designmodo bit.ly/1lE4uJc Good stuff from @designmodo!",
				type : "text",
				comments : [
					{
						avatar : "/images/user-picture-example.jpg",
						name : "Jed Bridges",
						content : "Great way to start the week. Thanks for sharing!"
					},
					{
						avatar : "/images/user-picture-example.jpg",
						name : "Ren Walker",
						content : "Feeling inspired npw... thanks for great article @designmodo"
					}
				]
			},
			{
				avatar : "/images/user-picture-example.jpg",
				name : "Sam Soffes",
				content : "How to Get Inspired: the Right Way - Designmodo bit.ly/1lE4uJc Good stuff from @designmodo!",
				type : "text",
				comments : [
					{
						avatar : "/images/user-picture-example.jpg",
						name : "Jed Bridges",
						content : "Great way to start the week. Thanks for sharing!"
					},
					{
						avatar : "/images/user-picture-example.jpg",
						name : "Ren Walker",
						content : "Feeling inspired npw... thanks for great article @designmodo"
					}
				]
			},
			{
				avatar : "/images/user-picture-example.jpg",
				name : "Sam Soffes",
				content : "How to Get Inspired: the Right Way - Designmodo bit.ly/1lE4uJc Good stuff from @designmodo!",
				type : "text",
				comments : [
					{
						avatar : "/images/user-picture-example.jpg",
						name : "Jed Bridges",
						content : "Great way to start the week. Thanks for sharing!"
					},
					{
						avatar : "/images/user-picture-example.jpg",
						name : "Ren Walker",
						content : "Feeling inspired npw... thanks for great article @designmodo"
					}
				]
			}
		];
	})
	
	.controller("ssProfileController", function() {})
	.controller("ssSettingsController", function() {})

	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when("/followers", {
				templateUrl: '/partials/followers.html',
				controller: 'ssFollowersController',
			})
			.when("/following", {
				templateUrl: '/partials/following.html',
				controller: 'ssFollowingController',
			})
			.when("/profile", {
				templateUrl: '/partials/profile.html',
				controller: 'ssProfileController',
			})
			.when("/settings", {
				templateUrl: '/partials/settings.html',
				controller: 'ssSettingsController',
			})
			.when("/", {
				templateUrl: '/partials/messages.html',
				controller: 'ssMessagesController',
			})
			.otherwise({
				templateUrl: '/partials/404.html'
			});

		$locationProvider.html5Mode(true);
	});