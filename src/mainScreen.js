import React from 'react';
import { connect } from 'react-redux';
import { createBottomTabNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScreenAuth } from './screenAuth';
import OrdersStack from './screenOrders';
import { Profile } from './screenProfile';
import { styles } from './styles';


const activeIconColor = '#fff';
const deactiveIconColor = '#e5e6e8';

const TabNavigator = createBottomTabNavigator({
    Orders: {
        screen: OrdersStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <Icon size={30} color={focused ? activeIconColor : deactiveIconColor} name='cart-arrow-down' />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <Icon size={30} color={focused ? activeIconColor : deactiveIconColor} name='user' />
            )
        }
    }
}, {
        initialRouteName: 'Orders',
        tabBarOptions: {
            showLabel: false,
            style: styles.tabBar,
        }
});

const createRootNavigator = (isLogin) => createSwitchNavigator({
    Auth: {
        screen: ScreenAuth,
    },
    AuthSuccess: {
        screen: TabNavigator,
    }
},
    {
        initialRouteName: isLogin === 'success' ? 'AuthSuccess' : 'Auth',
    });


const MainScreen = (props) => {
    const { isLogin } = props;
    const Layout = createAppContainer(createRootNavigator(isLogin));
    return <Layout/>
};

const mapStateToProps = (state) => {
    return {
        isLogin: state.isLogin,
    }
};

export default connect(
    mapStateToProps,
)(MainScreen);