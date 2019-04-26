import React from 'react';
import {Text, View} from "react-native";
import ItemInDetail from "./itemInDetail";
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from "../styles";


const ItemsListInDetail = ({ items, items_price, delivery,
                           delivery_price, total_price, payment }) => {
    return (
        <View style={styles.block}>
            <View>
                <Text style={styles.h2}> Состав заказа </Text>
            </View>
            {
                items.map(item => <ItemInDetail key={item.product_id} item={item}/>)
            }
            <View style={styles.rowInOrder}>
                <Text>Сумма до скидки</Text>
                <View style={styles.iconsBlock}>
                    <Text style={styles.h3}> {items_price} </Text>
                    <Icon name='rub' size={16} color='#000' />
                </View>
            </View>
            <View style={styles.rowInOrder}>
                <View >
                    <Text> Доставка </Text>
                    <Text style={styles.textStyle}> {delivery} </Text>
                </View>
                <View style={styles.iconsBlock}>
                    <Text style={styles.h3}> {delivery_price} </Text>
                    <Icon name='rub' size={16} color='#000' />
                </View>
            </View>
            <View style={styles.rowInOrder}>
                <View >
                    <Text style={styles.h3}> Итоговая сумма: </Text>
                    <Text style={styles.textStyle}> {payment}у </Text>
                </View>
                <View style={styles.iconsBlock}>
                    <Text style={styles.h2}> {total_price} </Text>
                    <Icon name='rub' size={20} color='#000' />
                </View>
            </View>
        </View>
    )
};

export default ItemsListInDetail;