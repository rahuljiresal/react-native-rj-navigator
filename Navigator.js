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

var darkBackArrow = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABUtJREFUeJzt3dduXWUUhdG5jwkplHcD0p8m9PTee5MQoqT3Tr/nbYgluIgiHB07GMd7r+38Y0i+/9fFNxU5tk8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArz0z1A2jWTJLzSdYl+bP2KcCQZpJcTvJ3ktkkW2ufAwxlkn/jf/k1m2RL5aOA/s0XvxGABkySXMr88RsBeIstJv65I7C55pnAcpskuZjFxW8E4C2ylPjnjsCm4Z8MLIdJkgtZWvxGAFaw5Yh/7ghsHPb5wFJN8uIn/JYjfiMAK0gf8b/8eh4jAKM1SXIu/cQ/dwQ2DHUQsDhDxG8EYIQmSc5mmPjnjsD6IY4DFlYRvxGAEaiM/+XXN71fCUzpUh//d0ne6ftQ4FVdkjOpjf/7iB8GJ35oVJfkdGrj/yHih8GNJf5VfR8KvKpLciq18f8Y8cPgxA+N6pKcTG38VyJ+GJz4oVFdkhOpjf9qxA+DEz80qktyPLXxX4v4YXBjif/dvg8FXtUlOZba+K9H/DA48UOjuiRHUxv/jYgfBid+aFSX5Ehq478Z8UMJ8UOjquO/lWR171cCU8QPjTqc2vhvR/xQQvzQqEMRPzSpOv47ET+UOJja+O8mWdP7lcAU8UOjDqQ2/nsRP5QQPzRqf8QPTaqO/37EDyX2RfzQpOr4HyRZ2/uVwJS9ET80qTr+hxE/lNgT8UOTquN/FPFDid0RPzRpDPGv6/1KYMqu1Mb/OOKHEuKHRu1MbfxPIn4oIX5o1I7Uxv804ocSY4j/vb6PBKZtT238zyJ+KCF+aNTXET80qTr+nyJ+KPFV6uN/v/crgSnV8f8c8UOJLyN+aFJ1/L9E/FDii4gfmjSG+D/o/Upgyuepjf/XiB9KiB8a9Vlq4/8t4ocS4odGfZra+H9P8mHvVwJTxA+N2hbxQ5O2pTb+PyJ+lmhS/QCAlW5b/CsAmuabgNA4IwCNG8MPAhkBKDSGEfDTgFCo+peBjAAUMwLQuOo/COLXgqFY9Qj4q0BQzB8FhcYZAWhc9QeDGAEoVj0CPiAEilV/OKgRgGLVI+BDQqHY9tSPgI8Jh0JGABq3I7Uj8CxGAEoZAWjcztSOwNMYAShlBKBxu1I/Auv6PhJYmBGAxu1O7Qg8iRGAUtUj8DhGAErtiRGAplWPwKMYASi1N/UjsLb3K4EFGQFo3L4YAWha9Qg8jBGAUtUj8CBGAErtjxGAplWPwP0YASh1IPUjsKb3K4EFGQFo3MEYAWha9QjcixGAUodSOwJ3YwSglBGAxh2OEYCmjWEEVvd+JbCgI6kdgTsxAlDKCEDDutSPwO0YASjTJTkaIwDNGsMI3IoRgDJdkmOpHYGbMQJQZiwj8G7fhwLz65IcjxGAZhkBaFyX5ERqR+BGjACUMQLQuC7JydSOwPUYASgzhhG4FiMAZYwANK5Lcir1I7Cq70OB+RkBaFyX5HRqR+BqjACUMQLQuC7JmdSOwJUYAShjBKBxkyRnUzsC3/Z+JbCgyhH4K8lH/Z8IvE7FCIgfRmSS5FyGif95ko+HOQtYrCFGQPwwYpMk59Nf/J8MdgmwJH2MgPhhBZkkuZDli3/9sM8H3tRyjMDzJBuGfjiwPN5kBJ4n2Tj8k4HlNElyMeKHZv2fEZiN+OGtM0lyKf8d/6aqBwL9et0IzCbZXPc0YAiTJJcjfmjW3BGYTbKl9jnA0Gby4r8It1Y/BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFn+AUwV+BRYw9uRAAAAAElFTkSuQmCC';

class RJNavigator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navigationBarHidden: false,
            topMargin: 64
        };

        this.navRouter = {};
        this.currentRoute = null;
        this.navItems= {};

        this.setupNavRouter();
    }

    setupNavRouter() {
        var self = this;
        this.navRouter = {
            LeftButton(route, navigator, index, navState) {
                if (route.navItems && route.navItems.leftItem) {
                    var onPress = route.navItems.leftItem.event ? {
                        onPress: () => {
                            route.navItems.leftItem.event();
                            self.popThisNavigator(navigator);
                        },
                        color: self.props.tintColor
                    } : { color: self.props.tintColor };
                    return React.cloneElement(route.navItems.leftItem.component, onPress );
                }
                else {
                    return (
                        <TouchableOpacity style={styles.leftBackButton} onPress={function() {
                            self.popThisNavigator(navigator);
                          }.bind(self) }>
                            <Image style={{width: 20, height: 20}} source={{uri: darkBackArrow}}/>
                        </TouchableOpacity>
                    );
                }
            },
            RightButton(route, navigator, index, navState) {
                if (route.navItems && route.navItems.rightItem) {
                    var onPress = route.navItems.rightItem.event ? {
                        onPress: () => { route.navItems.rightItem.event(); },
                        color: self.props.tintColor
                    } : { color: self.props.tintColor };
                    return React.cloneElement(route.navItems.rightItem.component, onPress);
                }
                else return null;
            },
            Title(route, navigator, index, navState) {
                if (route.navItems && route.navItems.title) {
                    var onPress = route.navItems.title.event ? {
                        onPress: () => { route.navItems.title.event(); }
                    } : {};
                    return React.cloneElement(route.navItems.title.component, onPress);
                }
                else return null;
            }
        };
    }

    setNavItems(config) {
        this.currentRoute.navItems = config;
        this.forceUpdate();
    }

    setNavBarHidden(hidden) {
        this.setState({
            navigationBarHidden: hidden,
            topMargin: hidden ? 0 : 64
        });
    }

    popThisNavigator(navigator) {
        this.resetNavItems();
        this.forceUpdate();
        navigator.pop();
    }

    resetNavItems() {
        this.navItems.rightItem = false;
        this.navItems.titleItem = false;
        this.navItems.leftItem = false;
    }

    render() {
        var initialRoute = {
            component: this.props.initialRoute.component,
            isRoot: true,
            props: this.props.initialRoute.props
        };
        var navBarHidden = this.state.navigationBarHidden ? { opacity: 0 } : { backgroundColor: this.props.backgroundColor, borderBottomWidth: 1, borderBottomColor: '#ddd' };
        return (
            <Navigator
                style={{flex: 1, backgroundColor: 'white'}}
                initialRoute={initialRoute}
                renderScene={this._renderScene.bind(this)}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={ this.navRouter }
                        style={navBarHidden} />
                    }
                configureScene={(route) => {
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
            />
        );
    }

    _renderScene(route, navigator) {
        this.currentRoute = route;
        this.resetNavItems();

        var newComponent;
        if (typeof route.component === 'object') {
            newComponent = React.cloneElement(route.component, {
                navigator: navigator,
                navComponent: this
            });
        }
        else if (typeof route.component === 'function') {
            newComponent = <route.component navigator={navigator} navComponent={this} {...route.props}/>
        }
        return (
            <View style={{flex: 1, marginTop: this.state.topMargin}}>
                {newComponent}
            </View>
        )
    }
}

var styles = StyleSheet.create({
    leftBackButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 7
    }
});

module.exports = RJNavigator;