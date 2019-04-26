import React from 'react';
import {Text, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Status from './status';
import {styles} from "../styles";

const OrdersListRow = (props) => {
    const { number, name, price, date, status } = props;
    return (
        <View style={styles.ordersRow}>
            <View style={styles.columnLeft}>
                <Text style={styles.h2}> {number} </Text>
                <Text style={styles.textStyle}> {name} </Text>
            </View>
            <View style={styles.columnCenter}>
                <Status title={status}/>
            </View>
            <View style={styles.columnRight}>
                <View style={styles.iconsBlock}>
                    <Text style={styles.h2}>{price}</Text>
                    <View style={styles.icon}>
                        <Icon name='rub' size={20} color='#000'/>
                    </View>
                </View>
                <Text style={styles.textStyle}> {date} </Text>
            </View>
        </View>
    );
};

export default OrdersListRow;