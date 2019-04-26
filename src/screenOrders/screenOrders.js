import React from 'react';
import { connect } from 'react-redux';
import { loadOrders } from '../actions';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { Header, OrdersListRow } from '../components';
import { styles } from '../styles';


class ScreenOrders extends React.Component {
    componentDidMount() {
        this.loadOrders();
    }

    goToDetail = (order) => () => {
        this.props.navigation.navigate('Detail', order);
    }

    loadOrders = () => {
        this.props.loadOrders(this.props.auth);
    }

    render() {
        const { orders } = this.props;
        return(
            <View style={styles.container}>
                <Header title='Заказы' icon1='sliders' icon2='search'/>
                <FlatList
                    data={orders}
                    renderItem={ ({item}) => {
                        const { key, number, total_price, created_at, client, custom_status } = item;
                        const date = new Date(created_at).toLocaleDateString();
                        return (
                            <TouchableOpacity key={key} onPress={this.goToDetail(item)}>
                                <OrdersListRow
                                    name={client.name}
                                    price={total_price}
                                    date={date}
                                    number={number}
                                    status={custom_status.title}
                                />
                            </TouchableOpacity>
                        )
                    }}
                    onRefresh={this.loadOrders}
                />
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        orders: state.orders,
        auth: state.auth,
    }
};

const actions = {
    loadOrders,
};

export default connect(
    mapStateToProps,
    actions,
)(ScreenOrders);
