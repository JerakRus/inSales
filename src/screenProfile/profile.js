import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { logOut } from '../actions';
import { styles } from '../styles';

const Profile = ( props ) => {
    return <Button
        onPress={() => props.logOut()}
        style={styles.button}
        title="Выйти"
    />
};
const actions = {
    logOut,
};

//onPress={props.logOut}

export default connect(
    null,
    actions,
)(Profile);