import React from 'react';
import {Text, View,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from "../styles";

const Header = (props) => {
    const { title, icon1, icon2, date, goBack } = props;
    const iconColor = '#3d83f4';
    const back = () => goBack();
    return (
        <View style={styles.header}>
            {goBack ? (<TouchableOpacity onPress={back}>
                <View style={styles.iconsBlock}>
                    <Icon name='arrow-left' size={26} color={iconColor} />
                </View>
            </TouchableOpacity>) : null
            }
            <View>
                <Text style={styles.h2}> { title } </Text>
                {date && <Text>{date}</Text> }
            </View>
            <View style={styles.iconsBlock}>
                <View style={styles.icon}>
                    <Icon name={icon1} size={26} color={iconColor} />
                </View>
                <View style={styles.icon}>
                    <Icon name={icon2} size={26} color={iconColor} />
                </View>
            </View>
        </View>
    );
};

export default Header;

// sliders search pencil ellipsis-h user