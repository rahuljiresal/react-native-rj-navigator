# react-native-rj-navigator

[![npm version](https://badge.fury.io/js/react-native-rj-navigator.svg)](https://badge.fury.io/js/react-native-rj-navigator) [![MIT](https://img.shields.io/dub/l/vibe-d.svg)]()

## Overview

If you've done any Native iOS Development, you know that iOS allows you to access items on the NavigationBar from within the ViewController. You can add `selectors` to listen to the events on these items too.

Navigator on React Native is not the greatest. If you try to use it out of box, you have to create an object of the `routeMapper` and pass it to the `Navigator.NavigationBar`. This has to be done in the Component that creates the Navigator, and not in the individual sub-components that are being pushed on to the Navigator. This gets annoying quite fast!

I've written a wrapper over React Native's Navigator to fix this issue. You can now specify the NavigationBar items from within the respective Views that it belongs to. Check out the following code for usage.

## Usage

#### Requiring

First of all, you need to require the following components.

``` javascript
var Navigator = require('react-native-rj-navigator').Navigator;
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

#### Set Navigation Items

Now, in the `componentWillMount` method of the `RootView`, call `this.props.navComponent.setNavItems` and send the following object as a parameter.

``` javascript
this.props.navComponent.setNavItems({
	title: {
    	component: (
          <NavBarTitle text={'Root View'} />
	    ),
    	event: function() {
  			AlertIOS.alert('Title', 'This is a callback on the title');
		}.bind(this)
	},
	leftItem: {
      	component: (), 
      	event: function() {}
	},
	rightItem: {
      component: (),
      event: function() {}
	}
})
```

#### Push New Views

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



## Running the Example App

1. Go to the example directory and run `nam install`. 
2. Open the `RJNavigatorExample/ios/RJNavigatorExample.xcodeproj` file to run it in Xcode.
3. Run the file, the React Native Packager should run and the project should run in the iOS simulator.

## Questions

If you have difficulties using this package, feel free to create an issue or letting me know via email or any other medium you can reach me with.

Feel absolutely free to improve this package by requesting new features, creating issues. Pull requests are the most welcome.