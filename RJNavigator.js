/**
 * Created by Rahul Jiresal on 11/12/15.
 */

'use strict';

var React = require('react-native'),
    Navigator = require('./Navigator'),
    NavBarTitle = require('./NavBarTitle'),
    NavBarButton = require('./NavBarButton');

var RJNavigator = {
    Navigator: Navigator,
    NavBarButton: NavBarButton,
    NavBarTitle: NavBarTitle
};

module.exports = RJNavigator;