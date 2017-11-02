var app = window.angular.module('app', [])

app.factory('environmentFetcher', environmentFetcher);
app.factory('situationFetcher', situationFetcher);
app.factory('encounterFetcher', encounterFetcher);
app.controller('mainCtrl', mainCtrl)

function environmentFetcher ($http) {

    var API_ROOT = 'environments';
    return {
        get: function () {
            return $http
                .get(API_ROOT)
                .then(function (resp) {
                    return resp.data
                })
        }
    }

}

function situationFetcher ($http) {

    var API_ROOT = 'situations';
    return {
        get: function () {
            return $http
                .get(API_ROOT)
                .then(function (resp) {
                    return resp.data
                })
        }
    }

}

function encounterFetcher ($http) {

    var API_ROOT = 'encounter';
    return {
        get: function(encounterArray) {
            var config = {
                params: {
                    environment: encounterArray['environment'],
                    situation: encounterArray['situation']
                }
            };
            return $http
                .get(API_ROOT, config)
                .then(function(resp) {
                    return resp.data;
                });
        }
    }
}

function mainCtrl ($scope, environmentFetcher, situationFetcher, encounterFetcher) {

    $scope.environments = [];
    $scope.situations = [];

    environmentFetcher.get()
        .then(function (data) {
            $scope.environments = data
        });

    situationFetcher.get()
        .then(function (data) {
            $scope.situations = data
        });

    $scope.generateEncounter = function() {
        encounterFetcher.get($scope.enc)
            .then(function (data) {
                $scope.resultString = data;
            });
    }
}