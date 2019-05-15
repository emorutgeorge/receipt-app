import React from "react"
import{
    View, Text, Image,TouchableOpacity, StyleSheet
}from "react-native"
export default (props)=>(
    <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}
        onPress={props.goBack}
        >
            <Image source={require("../img/back.png")} style={styles.back}/>
        </TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
    </View>
)

const styles = StyleSheet.create({
    header:{
        flex:1,
        flexDirection:"row",
        elevation:3,
        borderBottomWidth:1,
        borderBottomColor:"rgba(0,0,0,0.2)",
        alignItems:"center"
    },
    back:{
        width:25,
        height:25
    }
,
title:{
    color:"grey",
    fontSize:20,
    marginHorizontal:10
},
backBtn:{
    marginLeft:10,
    padding:5
}
})
