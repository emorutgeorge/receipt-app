import React from "react"
import {
    TouchableOpacity, Text , StyleSheet
} from "react-native"

export default (props)=>(
    <TouchableOpacity style={receiptStyles.main}>
        <Text style={receiptStyles.receiptNo}>Cash Sale {props.receiptNumber}</Text>
        <Text style={receiptStyles.date}>created on {props.receiptDate.toDateString()}</Text>

    </TouchableOpacity>
)

const receiptStyles = StyleSheet.create({

main:{
    paddingHorizontal:20,
    padding:10,
    margin:5,
    elevation:1,
    borderWidth:1,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius:2
},
receiptNo:{
    color: "black",
    fontSize: 20
},
date:{
    fontSize:15
}


})