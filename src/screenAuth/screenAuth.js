import React from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Text, Button } from 'react-native';
import { inputLogin, inputPassword, inputUrl, logIn } from '../actions';
import { styles } from '../styles';

class ScreenAuth extends React.Component {
    inputLogin = (text) => {
        this.props.inputLogin(text);
    }

    inputPassword = (text) => {
        this.props.inputPassword(text);
    }
    inputUrl = (text) => {
        this.props.inputUrl(text);
    }

    submit = () => {
        const { login, password, url } = this.props.authForm;
        this.props.logIn(login, password, url);
    }

    render() {
        const { login, password, url } = this.props.authForm;
        return (
            <View style={styles.container}>
            <View style={styles.block}>
                <Text style={styles.h2}> Войдите в учетную запись: </Text>
                <View style={styles.inputBlock}>
                    <TextInput
                        style={styles.input}
                        placeholder='Почта'
                        value={login}
                        onChangeText={this.inputLogin}
                    />
                </View>
                <View style={styles.inputBlock}>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        placeholder='Пароль'
                        value={password}
                        onChangeText={this.inputPassword}
                    />
                </View>
                <View style={styles.inputBlock}>
                    <TextInput
                        style={styles.input}
                        placeholder='Адресс вашего магазина'
                        value={url}
                        onChangeText={this.inputUrl}
                    />
                </View>
                {this.props.isLogin === 'failure_url' ?
                    <Text style={styles.error}> Не верный адресс сайта! </Text> : null}
                {this.props.isLogin === 'failure_auth' ?
                    <Text style={styles.error}> Не верные логин или пароль! </Text> : null}
                <View style={styles.button}>
                    <Button onPress={this.submit} title='Войти'/>
                </View>
            </View>
            </View>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        authForm: state.authForm,
        isLogin: state.isLogin,
    }
};

const actions = {
    inputLogin,
    inputPassword,
    inputUrl,
    logIn,
};

export default connect(
    mapStateToProps,
    actions,
)(ScreenAuth);