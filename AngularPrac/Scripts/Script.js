/// <reference path = "angular.min.js" />

var myApp = angular
    .module("myModule", [])
    .controller("mycontroller", function ($scope) {
        var employee = {
            firstname: "David",
            lastname: "Charan",
            gender: "Male"
        };
        $scope.message = "Angular Tutorial";
        $scope.employee = employee;
    });

var mysec = angular
    .module("mymoduletwo", [])
    .controller("mycontrollertwo", function ($scope) {
        var country = {
            name: "USA",
            capital: "Washington DC",
            flag: "/Images/usa-flag.png"
        };
        $scope.country = country;

    });
var mythird = angular
    .module("modulethree", [])
    .controller("myControllerthree", function ($scope) {
        var employees = {
            firstn: "Ben",
            lastn: "charan",
            gender: "male"
        };
        $scope.employee = employees;
    });


var myfour = angular
    .module("moduleFour", [])
    .controller("myControllerfour", function ($scope) {
        var emp = [
           { firstname: "hari", lastname: "charan", gender: "male", salary: 55500 },
           { firstname: "harry", lastname: "potter", gender: "male", salary: 555400 },
           { firstname: "Jay", lastname: "krish", gender: "male", salary: 55300 },
           { firstname: "Fjohn", lastname: "te", gender: "female", salary: 25500 }
        ];
        $scope.employees = emp;
    });

var myfive = angular
    .module("moduleFive", ["moduleFour"])
    .controller("myControllerfive", function ($scope) {
        var countries = [
           {
               name: "UK",
               cities: [
                   { name: "London" },
                   { name: "Birmingham" },
                   { name: "Manchester" }

               ]
           },
           {
               name: "USA",
               cities: [
                    { name: "Los Angeles" },
                    { name: "Chicago" },
                    { name: "Houston" }

               ]
           },
           {
               name: "India",
               cities: [
                      { name: "Hyderabad" },
                      { name: "Chennai" },
                      { name: "Mumbai" }

               ]
           }
        ];
        $scope.countries = countries;

    });
angular.module("test", ["moduleFour", "moduleFive"])


var tech = angular
    .module("myTech", [])
    .controller("mytechcontroller", function ($scope) {
        var technologies = [
            { name: "C#", likes: 0, dislikes: 0 },
            { name: "Java", likes: 0, dislikes: 0 },
            { name: "Python", likes: 0, dislikes: 0 },
            { name: "Angular", likes: 0, dislikes: 0 },

        ];

        $scope.tech = technologies;
        $scope.incrementLikes = function (technoloy) {
            technoloy.likes++;
        }
        $scope.decrementLikes = function (technoloy) {
            technoloy.dislikes++;
        }
    });

var fil = angular
    .module("sixthmodule", [])
    .controller("sixCon", function ($scope) {
        var employee = [
            { name: "Ben", dataofBirth: new Date("November 23 1980"), gender: "Male", salary: 550002.87 },
            { name: "Sara", dataofBirth: new Date("May 05 1991"), gender: "Female", salary: 550002.87 },
            { name: "Mark", dataofBirth: new Date("August 15 1974"), gender: "Male", salary: 550002.87 },
            { name: "Pam", dataofBirth: new Date("December 30 1990"), gender: "Female", salary: 550002.87 }
        ];
        $scope.emp = employee;
        $scope.rowlimit = 3;
    });

