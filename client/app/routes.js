'use strict';

angular.module('ideaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('users', {
        url: '/users',
        templateUrl: 'app/users/users.html',
        controller: 'UsersCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('account', {
        url: '/account',
        templateUrl: 'app/account/account.html',
        controller: 'AccountCtrl',
        authenticate: true
      })
      .state('idea', {
        url: '/idea/:id',
        templateUrl: 'app/idea/idea.html',
        controller: 'IdeaCtrl'
      })
      .state('add', {
        url: '/add',
        templateUrl: 'app/add/add.html',
        controller: 'AddCtrl'
      });
  });
