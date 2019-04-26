import React from 'react';
import {Text, View} from "react-native";

const Status = ({title}) => {
    const style = {
        padding: 5,
        borderRadius: 3,
        backgroundColor: '#c6494f',
        width: 130,
        alignItems: 'center',
    };
    const switchColor = (title) => {
        switch (title) {
            case 'Новый': {
                return {...style, backgroundColor: '#c6494f' };
            }
            case 'В обработке': {
                return {...style, backgroundColor: '#5d95ef' };
            }
            case 'Доставлен': {
                return {...style, backgroundColor: '#15c12f' };
            }
            case 'pending': {
                return {...style, backgroundColor: '#c6494f' };
            }
            default: {
                return style;
            }
        }
    };

    return (
        <View style={switchColor(title)}>
            <Text style={{color: '#fff', fontSize: 18}}>
                {title === 'pending' ? 'Не оплачен' : title}
            </Text>
        </View>
    )
};

export default Status;