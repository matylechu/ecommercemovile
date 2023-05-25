import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex:1,
        height: 90,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,

        shadowRadius: 2.22,
        elevation: 3,
        marginHorizontal:10,
        marginVertical:6,
        paddingHorizontal:20,
        paddingVertical: 10,
        },
    date:{
        fontSize:16,
        fontFamily: 'Medium',
        color: '#212121'
    },
    bodyContainer:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',       
    },
    total: {
        fontSize: 15,
        fontFamily: 'Bold',
        color: '#212121'
    },

})