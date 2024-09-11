
var app = angular.module('countryApp', []);

app.controller('CountryController', function($scope, $http) {
    $scope.countries = [];
    $scope.selectedCountry = null;

    // Load countries from JSON
    $http.get('data.json').then(function(response) {
        $scope.countries = response.data;
    });

    // Select a country to view details
    $scope.selectCountry = function(country) {
        $scope.selectedCountry = country;
    };

    // Go back to the main list
    $scope.goBack = function() {
        $scope.selectedCountry = null;
    };
});
    