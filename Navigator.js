/**
 * Created by Rahul Jiresal on 11/12/15.
 */

var React = require('react-native');

var {
    StyleSheet,
    Navigator,
    Text,
    TouchableOpacity,
    View,
    Image
    } = React;

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
                configureScene={(route) => {
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
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
        return (
                {newComponent}
        )
    }
}

module.exports = RJNavigator;