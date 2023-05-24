import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical:10,
        height: 120,
    },
    containerTouchable:{
        flex: 1,
        backgroundColor: '#e5e5e5',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        justifyContent: 'center',
        alignItems:'center',
        padding: 10,
    },
    name:{
        fontSize: 14,
        fontFamily:'Regular'
    },
    price:{
        fontSize: 15,
        fontFamily: 'Bold'
    },

})