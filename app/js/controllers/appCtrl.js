
function AppCtrl($scope, $state) {
  let appCtrl = this;

  appCtrl.option = {
    name: 'App-Bench-Test',
    settings: {
      headerFixed: false,
      container: false
    }
  };
};

AppCtrl.$inject = ['$scope','$state'];

export default (ngModule) => {
  ngModule.controller('AppCtrl', AppCtrl);
}
