import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Navigator
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

export default class reactNativeTestApp extends Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text>Home Page</Text>
                <Button title="Go to Page 1" onPress={() => navigate('Page1') }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const App = StackNavigator({
    Home: {screen: reactNativeTestApp},
    Page1: {screen: Page1},
    Page2: {screen: Page2},
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
});

AppRegistry.registerComponent('reactNativeTestApp', () => App);
