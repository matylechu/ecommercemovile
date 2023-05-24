import {StyleSheet} from 'react-native'

export const  styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    name:{
        fontFamily:'Medium',
        fontSize: 16,
        paddingVertical: 20,
    },
    description:{
        fontFamily: 'Regular',
        fontSize: 14,
        paddingVertical: 10,
    },
    price:{
        fontFamily: 'Bold',
        fontSize: 18,
        paddingVertical: 20,
    },
    image:{
        marginTop: 10,
        width: '100%',
        height: 270,
    }
})