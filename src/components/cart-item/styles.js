import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        height: 100,
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

    headerContainer:{
        fontSize: 16,
        fontFamily: 'Regular',
        color: 'black',
        marginBottom: 5,
    },
    bodyContainer:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content:{
        flex: 1,
    },
    quantity:{
        fontSize: 14,
        fontFamily: 'Regular',
        color: 'black',
        marginBottom: 5
    },
    price:{
        fontSize: 15,
        fontFamily: 'Bold',
        color: 'black',
        marginBottom: 5
    }

})