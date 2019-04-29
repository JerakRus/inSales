import React from 'react';
import { connect } from 'react-redux';
import { loadOrdersFirstPage, loadOrdersMorePage } from '../actions';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { Header, OrdersListRow } from '../components';
import { styles } from '../styles';


class ScreenOrders extends React.Component {
    state ={
        page: 1,
    }

    componentDidMount() {
        this.loadOrdersFirstPage();
    }

    goToDetail = (order) => () => {
        this.props.navigation.navigate('Detail', order);
    }

    loadOrdersFirstPage = () => {
        this.props.loadOrdersFirstPage(this.props.auth);
        this.setState({page: 1});
    }
    loadOrdersMorePage = (page) => () => {
        const nextPage = page + 1;
        this.props.loadOrdersMorePage(this.props.auth, nextPage);
        this.setState({page: nextPage});
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
                    refreshing={false}
                    onRefresh={this.loadOrdersFirstPage}
                    onEndReached={this.loadOrdersMorePage(this.state.page)}
                    onEndReachedThreshold={0.2}
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
    loadOrdersFirstPage,
    loadOrdersMorePage,
};

export default connect(
    mapStateToProps,
    actions,
)(ScreenOrders);
