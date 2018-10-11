function AccountsCtrl ($scope, $rootScope, $state, $stateParams, gltbMainService) {
  let acounts = this;

  gltbMainService.getAccounts({}, (resp)=>{
    console.log(resp, 'test')
  }, console.error())
  return acounts;
};

AccountsCtrl.$inject = ['$scope', '$rootScope', '$state', '$stateParams', 'gltbMainService'];

export default (ngModule) => {
  ngModule.controller('AccountsCtrl', AccountsCtrl);
}
