
import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import NewReceipt from "./components/newReceipt"
import ListOfReceipts from './components/listOfReceipts'

export default class App extends Component{
  state ={
    currentScreen: "HOME",
    receiptsList:[
      {
        companyName: "Umoja",
        amount:"Ugx.200,000",
        paidFor:"Branding",
        balance: "Nill",
        createdAt:new Date()
      },
      {
        companyName: "Kamcare Ltd",
        amount:"Ugx.4,200,000",
        paidFor:"Branding",
        balance: "Ugx.300,000",
        createdAt:new Date()
      }
    ]
  }
  saveReceipt(companyName,amount,paidFor,balance){
    let { receiptsList } = this.state
  if(companyName!=="" && amount!=="" && paidFor!=="" && balance!==""){
    receiptsList.push({
      companyName,
      amount,
      paidFor,
      balance,
      createdAt:new Date()
    })
    this.setState({receiptsList, currentScreen:"HOME"})
  }}
  render(){
    //alert(JSON.stringify(this.state.receiptsList))
    //if the currentScreen is NEW_RECEIPT then show the NewReceipt component
    if (this.state.currentScreen=== "NEW_RECEIPT"){
      return (<NewReceipt
      moveToHome = {()=>this.setState({currentScreen:"HOME"})}
      save={(companyName,amount,paidFor,balance)=>{
        this.saveReceipt(companyName,amount,paidFor,balance)
      }}
      />)
    }
    if (this.state.currentScreen=== "LIST_RECEIPTS"){
      return (<ListOfReceipts
        moveBackHome = {()=>this.setState({currentScreen:"HOME"})}
        list={this.state.receiptsList}
      />)
    }
    //By default show the home Component with the two buttons i.e New Receipt & List of Receipts
    return(
      <View style={styles.main}>
      <TouchableOpacity style={styles.btn}
      //the onPress function changes currentScreen to NEW_RECEIPT
      //Using setState to change the state of currenntScreen
      onPress={()=>this.setState({currentScreen:"NEW_RECEIPT"})}
      >
        <Text style={styles.txt}>New Receipt</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.btn}
      onPress={()=>this.setState({currentScreen:"LIST_RECEIPTS"})}
      >
        <Text style={styles.txt}>List of Receipts</Text>
       </TouchableOpacity>
      </View>
    )
  }
}

const styles =StyleSheet.create({
  main:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  btn:{
    backgroundColor:"#1d1d1d",
    padding:10,
    marginVertical:15,
    borderRadius:10,
    paddingHorizontal:20
  },
  txt:{
    color:"#FFF",
    fontSize:18
  }
})

