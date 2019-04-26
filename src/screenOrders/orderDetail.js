import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../styles';
import { Header, ClientInDetail, ItemsListInDetail, Status } from "../components";


export default class OrderDetail extends React.Component {

    render() {
        const { goBack } = this.props.navigation;
        const order = this.props.navigation.state.params;
        const { number, created_at, client, delivery_title, shipping_address,
            custom_status, financial_status, order_lines, delivery_price,
            delivery_description, items_price, total_price, payment_description} = order;
        const date = new Date(created_at).toLocaleString();
        return(
            <View style={styles.container}>
                <Header
                    title={`Заказ ${number}`}
                    icon1='ellipsis-h'
                    icon2='pencil'
                    date={date}
                    goBack={goBack}
                />
                <ScrollView contentContainerStyle={styles.scrollBlock}>
                    <View style={styles.statusRow}>
                        <Status title={custom_status.title} />
                        <Status title={financial_status === 'pending' ? 'Не оплачен' : 'Оплачен'} />
                    </View>

                    <ClientInDetail
                       name={client.name}
                       telephone={client.phone}
                       delivery={delivery_title}
                       adress={shipping_address.address_for_gis}
                    />

                    <ItemsListInDetail
                        items={order_lines}
                        items_price={items_price}
                        delivery={delivery_description}
                        delivery_price={delivery_price}
                        total_price={total_price}
                        payment={payment_description}
                    />
                </ScrollView>
            </View>
        )
    }
}


