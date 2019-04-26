import React from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from "../styles";

class ItemInDetail extends React.Component {
    state = {
        uri: '',
    }

    componentDidMount =  async () => {
        const { item, auth } = this.props;
        const options = {
            url: `${auth.url}/admin/products/${item.product_id}/images.json`,
            method: 'GET',
            headers: {
                Authorization: `Basic ${auth.base64}`
            }
        };
        const uri = await axios(options)
            .then(res => res.data[0].compact_url)
            .catch(e => console.log('Не удалось загрузить картинку', e));
        this.setState({ uri });
    }

    render() {
        const { uri} = this.state;
        const item = this.props.item;
        const id = item.product_id;
        return (
            <View key={id} style={styles.rowInOrder}>
                <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                        {uri ? <Image style={styles.img} source={{uri}}/> : null}
                    <View>
                        <Text style={styles.textStyle}> {item.title} </Text>
                        <Text> Артикул: {item.sku} </Text>
                        <Text> Остаток: {item.vat === -1 ? 'очень много' : item.vat} шт</Text>
                    </View>
                </View>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Text style={styles.h3}> {item.sale_price} </Text>
                    <View style={styles.icon}>
                        <Icon name='rub' size={16} color='#000' />
                    </View>
                    <View style={styles.counter}>
                        <Text style={styles.counterText}>x{item.quantity}</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
};

export default connect(
mapStateToProps
)(ItemInDetail);

