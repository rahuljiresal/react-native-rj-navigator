/**
 * Created by Rahul Jiresal on 11/12/15.
 */

var ReactNative = require('react-native');
var React = require('react');

var {
    StyleSheet,
    Navigator,
    Text,
    TouchableOpacity,
    View,
    Image
    } = ReactNative;

class RJNavigator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var initialRoute = {
            component: this.props.initialRoute.component,
            isRoot: true,
            props: this.props.initialRoute.props
        };
        return (
            <Navigator
                style={{flex: 1, backgroundColor: 'white'}}
                initialRoute={initialRoute}
                renderScene={this._renderScene.bind(this)}
                configureScene={ (route) => ({
                    ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight,
                    gestures: route.gestures || (route.sceneConfig && route.sceneConfig.gestures) || Navigator.SceneConfigs.FloatFromRight.gestures
                })}
            />
        );
    }

    _renderScene(route, navigator) {
        var newComponent;
        if (typeof route.component === 'object') {
            newComponent = React.cloneElement(route.component, {
                navigator: navigator
            });
        }
        else if (typeof route.component === 'function') {
            newComponent = <route.component navigator={navigator} navComponent={this} {...route.props}/>
        }
        return newComponent;
    }
}

module.exports = RJNavigator;