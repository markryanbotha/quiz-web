angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapimb-env.eba-ps36npjg.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);