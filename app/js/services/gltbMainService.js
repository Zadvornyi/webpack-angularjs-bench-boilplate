function gltbMainService ($resource) {
    const rootUrl =  'http://127.0.0.1:3000';

    return $resource('', {}, {
        getAccounts: {
            url: rootUrl + '/employees',
            isArray: true,
            method: 'GET'
        },
        createAccount: {
            url: rootUrl + '/employees',
            method: 'POST'
        },
    });
};

gltbMainService.$inject = ['$resource'];

export default (ngModule) => {
    ngModule.service('gltbMainService',  gltbMainService);
}
