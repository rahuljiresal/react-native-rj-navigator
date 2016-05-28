# react-native-rj-navigator

[![npm version](https://badge.fury.io/js/react-native-rj-navigator.svg)](https://badge.fury.io/js/react-native-rj-navigator) [![MIT](https://img.shields.io/dub/l/vibe-d.svg)]()

## Overview

RJNavigator is a wrapper written on top of React Native's [Navigator](https://facebook.github.io/react-native/docs/navigator.html). RJNavigator passes the instance of itself to all the components being pushed on to it. This means, you have `this.props.navigator` in all the components to use.

You'll also need a navigation bar. I highly recommend using [react-native-navbar](https://github.com/react-native-fellowship/react-native-navbar) with RJNavigator.

## Usage

#### Requiring

First of all, you need to require the following components.

``` javascript
var Navigator = require('react-native-rj-navigator').Navigator;
	// if you're using the navbar, you might need the following ones too
	NavBarButton = require('react-native-rj-navigator').NavBarButton,
    NavBarTitle = require('react-native-rj-navigator').NavBarTitle;
```

#### Creating the Navigator

This is how you would create a `Navigator`.

``` javascript
var RJNavigatorExample = React.createClass({
    render: function() {
        return (
            <Navigator 
                backgroundColor={Colors.defaultIOSToolBarColor}
                tintColor={Colors.defaultIOSTintColor}
                initialRoute={{ component: RootView }} 
            />
        );
    }
});

```

#### Pushing views on the navigation stack

You can push new components on the Navigator Stack using one of the following

``` javascript
this.props.navigator.push({ 
                    component: ViewOne, 
                    props: {
                        text: 'This is the first view',
                        number: 100
                    }
                });

/// OR

this.props.navigator.push( { component: <ViewTwo text={'This is the second view.'} /> });
```

These basics should get your started. Hopefully way faster than using React Native's Navigator.

If you need to look at a working example, check out the example in `RJNavigatorExample` directory.

## Screenshots (of the example app)

![rj-navigator](https://cloud.githubusercontent.com/assets/216346/11151788/cd035922-89e3-11e5-905a-f2e19db1e90c.gif)



## Running the Example App

1. Go to the example directory and run `nam install`. 
2. Open the `RJNavigatorExample/ios/RJNavigatorExample.xcodeproj` file to run it in Xcode.
3. Run the file, the React Native Packager should run and the project should run in the iOS simulator.

## Questions

If you have difficulties using this package, feel free to create an issue or letting me know via email or any other medium you can reach me with.

Feel absolutely free to improve this package by requesting new features, creating issues. Pull requests are the most welcome.