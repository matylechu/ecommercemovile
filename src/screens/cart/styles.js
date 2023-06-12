import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer:{
        flex: 1,
        backgroundColor: '#fff'
    },
    footerContainer:{
        backgroundColor:'lightgray',
        borderTopColor: 'red',
        borderTopWidth: 4,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    buttonConfirm:{
        backgroundColor: '#b1a7a6',
        borderRadius: 5,
        paddingHorizontal:20,
        paddingVertical:15,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center', 
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
         },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
         elevation: 3, 
    },
    buttonConfirmText:{
        color: 'black',
        fontFamily: 'Medium',
        fontSize: 14,
    },
    totalContainer:{
        flex: 0.5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    totalText:{
        color: 'black',
        fontFamily: 'Medium',
        fontSize: 14,
    },
    totalPrice:{
        color:'black',
        fontFamily: 'Bold',
        fontSize: 15,
    },
    buttonDisabled: {
        backgroundColor: 'ligthgray',
        borderRadius: 5,
        paddingHorizontal:20,
        paddingVertical:15,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center', 
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
         },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
         elevation: 3, 
    }
})