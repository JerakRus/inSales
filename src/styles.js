import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');
const w = win.width;
const h = win.height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e5e6e8',
    },
    block: {
        width: w-10,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        elevation: 2,
        position: 'relative',
    },
    scrollBlock: {
        width: w,
        marginBottom: 40,
        alignItems: 'center',
    },
    tabBar: {
        backgroundColor: '#000',
        opacity: 0.8,
        height: 40,
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    h3: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
    },
    textStyle: {
        fontSize: 16,
        color: '#000',
    },
    error: {
        fontSize: 16,
        color: 'red',
    },
    statusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: w,
    },
    status: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBlock: {
        width: w - 40,
        marginTop: 10,
        marginBottom: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    input: {
        fontSize: 20,
    },
    button: {
        width: w - 40,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'blue',
    },
    header: {
        width: w,
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        elevation: 2,
        position: 'relative',
    },
    iconsBlock: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 5,
        marginLeft: 5,
    },
    ordersRow: {
        flexDirection: 'row',
        width: w,
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e6e8',
    },
    columnLeft:{
        width: (w-20)/3,
        alignItems: 'flex-start',
    },
    columnRight:{
        width: (w-20)/3,
        alignItems: 'flex-end',
    },
    columnCenter:{
        width: (w-20)/3,
        alignItems: 'center',
    },
    rowInOrder: {
        width: w-10,
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e6e8',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    counter: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#3d83f4',
        color: '#3d83f4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText: {
        fontSize: 16,
        color: '#3d83f4',
    },
    img:{
        width: 50,
        height: 50,
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000',
    },
});