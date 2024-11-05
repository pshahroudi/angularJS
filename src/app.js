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


app.controller('menuController', function ($scope, $http) {
    $scope.showMenu = function (name) {
        console.log("Showing Menu: " + name);
    };

    var url = "https://api.github.com/users/wesbos"
    $http.get(url).then( function(response) { 
        $scope.data = response.data; 
     }); 
});
