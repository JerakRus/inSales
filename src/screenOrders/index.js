import { createStackNavigator } from 'react-navigation';
import ScreenOrders from './screenOrders';
import OrderDetail from './orderDetail';

const OrdersStack = createStackNavigator({
   Orders: { screen: ScreenOrders },
   Detail: { screen: OrderDetail },
},{
   initialRouteName: 'Orders',
   headerMode: 'none',
});

export default OrdersStack;