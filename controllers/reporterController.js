newspaper.controller('ReporterCtrl', function ReporterCtrl($scope, $stateParams, beatsFactory, UtilitiesFactory){
  $scope.webLinks = UtilitiesFactory.findById(beatsFactory.beats, $stateParams.beatsId)
  $scope.$parentScope = $scope;

  $scope.addComments = function() {
    $scope.webLinks.comments.push({name: $scope.commentName, post: $scope.commentPost});
    $scope.webLinks.numberOfComments += 1;
    $scope.commentName = null;
    $scope.post = null;
  };

  $scope.commentName = null;
});
