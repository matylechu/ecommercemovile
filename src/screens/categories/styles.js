import {StyleSheet, StatusBar} from 'react-native'

export const  styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight,
    },
    image:{
        width:'100%',
        height:80,
        marginBottom: 10,
    },
    title:{
        fontSize: 20,
        fontFamily: "Regular"
    }
})