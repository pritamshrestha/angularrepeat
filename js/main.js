// connecting the angular module with the angular app
var app=angular.module('myApp',[]);
// connecting the controller with the html
app.controller('myCtrl',function($scope){
	var countries=[{name:"uk",
                    cities:[{name:"london"},
                             {name:"manchester"},
                             {name:"wells"}]},

                   {name:"usa",
                    cities:[{name:"sanfrancisco"},
                             {name:"lasAngelus"},
                             {name:"san diego"}]},
                           {name:"nepal",
                    cities:[{name:"kathmandu"},
                             { name:"pokhara"},
                             {name:"damauli"}]}
                        ]
                        // binding with the scope
                        $scope.countries=countries;
})