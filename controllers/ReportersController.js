newspaper.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)
  $scope.addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.reporterName, id: $scope.beat.reporters.length +1, });
    $scope.reporterName = null;
  };
  $scope.editReporter = function(id) {

    $scope.reporter = UtilitiesFactory.findById($scope.beat.reporters, id)
    $scope.reporter.tenure = $scope.reporterTenure;
    $scope.reporter.birthday = $scope.reporterBirthday;

    $scope.reporterTenure = null;
    $scope.reporterBirthday = null;
  };
});
