import React from 'react';
import { connect } from 'react-redux';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScreenAuth } from './screenAuth';
import OrdersStack from './screenOrders';
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
}, {
        tabBarOptions: {
            showLabel: false,
            style: styles.tabBar,
        }
});
const RootNavigator = createAppContainer(TabNavigator);


const MainScreen = (props) => {
    const { isLogin } = props;
    return (
        isLogin === 'success' ? <RootNavigator /> : <ScreenAuth />
    )
};

const mapStateToProps = (state) => {
    return {
        isLogin: state.isLogin,
    }
};

export default connect(
    mapStateToProps,
)(MainScreen);