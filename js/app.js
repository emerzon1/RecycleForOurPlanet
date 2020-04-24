var app = angular.module("EcoGame", []);

app.controller("Game", ["$scope", function($scope) {
	$scope.compost = [];
	$scope.garbage = [];
	$scope.recycle = [];

	var compostItems = compost.map(function(item) {
		return {name: item, type: "Compost"}
	});

	var garbageItems = garbage.map(function(item) {
		return {name: item, type: "Garbage"}
	});

	var recycleItems = recycle.map(function(item) {
		return {name: item, type: "Recycle"}
	});

	$scope.compostAnswers = compostItems;
	$scope.garbageAnswers = garbageItems;
	$scope.recycleAnswers = recycleItems;

	$scope.allItems = randomShuffle(compostItems.concat(garbageItems, recycleItems));

	$scope.countOfAllItems = $scope.allItems.length;

	$scope.welcomeMsg = true;
	$scope.loadGame = false;

	$scope.startGame = function() {
		$scope.welcomeMsg = false;
		$scope.loadGame = true;

		$scope.checkWinner = function() {
			if ($scope.allItems.length === 0) {
				var checkCompost = $scope.compost.filter(function(item) {
					return item.type === "Garbage" || item.type === "Recycle";
				});

				var checkGarbage = $scope.garbage.filter(function(item) {
					return item.type === "Compost" || item.type === "Recycle";
				});

				var checkRecycle = $scope.recycle.filter(function(item) {
					return item.type === "Compost" || item.type === "Garbage";
				});

				if ((checkCompost.length === 0) && (checkGarbage.length === 0) && (checkRecycle.length === 0)) {
					$scope.isWinner = true;

				} else {
					var allItems = $scope.countOfAllItems;
					var incorrectItems = checkCompost.length + checkGarbage.length + checkRecycle.length;
					$scope.correctItems = allItems - incorrectItems;
					$scope.notWinner = true;

					$scope.incorrectCompost = checkCompost;
					$scope.incorrectGarbage = checkGarbage;
					$scope.incorrectRecycle = checkRecycle;
				}
			}
		}
	};

	$scope.isWinner = false;
	$scope.notWinner = false;

	$scope.restartGame = function() {
		location.reload();
	}

	$scope.addCompost = function(compostId) {
		var compost = $scope.allItems.splice(compostId, 1)[0];
		$scope.compost.push(compost);

		$scope.checkWinner();
	};

	$scope.addGarbage = function(garbageId) {
		var garbage = $scope.allItems.splice(garbageId, 1)[0];
		$scope.garbage.push(garbage);

		$scope.checkWinner();
	};

	$scope.addRecycle = function(recycleId) {
		var recycle = $scope.allItems.splice(recycleId, 1)[0];
		$scope.recycle.push(recycle);

		$scope.checkWinner();
	};
}]);

function randomShuffle(array) {
	for (var x = array.length - 1; x > 0; x--) {
		var y = Math.floor(Math.random() * (x * 1));
		var temp = array[x];
		array[x] = array[y];
		array[y] = temp;
	}
	return array;
}