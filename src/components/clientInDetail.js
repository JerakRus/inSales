import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from "../styles";


const ClientInDetail = ({ name, telephone, delivery, adress}) => {
    return (
        <View style={styles.block}>
            <View style={styles.rowInOrder}>
                <View>
                    <Text>Имя*</Text>
                    <Text style={styles.textStyle}> {name} </Text>
                </View>
            </View>
            <View style={styles.rowInOrder}>
                <View>
                    <Text>Телефон*</Text>
                    <Text style={styles.textStyle}> {telephone} </Text>
                </View>
                <View style={styles.iconsBlock}>
                    <View style={styles.icon}>
                        <Icon name='user' size={30} color='#3d83f4' />
                    </View>
                    <View style={styles.counter}>
                        <Text style={styles.counterText}> 1 </Text>
                    </View>
                </View>
            </View>
            <View style={styles.rowInOrder}>
                <View>
                    <Text>Способ доставки</Text>
                    <Text style={styles.textStyle}> {delivery} </Text>
                </View>
            </View>
            <View style={styles.rowInOrder}>
                <View>
                    <Text>Адрес доставки</Text>
                    <Text style={styles.textStyle}> {adress} </Text>
                </View>
            </View>
        </View>
    );
};

export default ClientInDetail;