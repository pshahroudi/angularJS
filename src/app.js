var app = angular.module('gfgAtlas', []);

app.controller('MainCtrl', function ($scope) {
    $scope.xss;
    $scope.xs = [
        { id: 1, value: 'value 1', selected: false },
        { id: 2, value: 'value 2', selected: false },
        { id: 3, value: 'value 3', selected: false }
    ];
});

app.controller('studentController', function ($scope) {
    $scope.students = [
        { name: 'John A' },
        { name: 'John B' },
        { name: 'John C' }
    ];
});
