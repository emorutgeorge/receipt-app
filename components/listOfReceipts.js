import React from "react"
import{
View, StyleSheet
} from "react-native"
import Header from "./header"
import Receipt from "./receipt"
import ReceiptDetail from "./receipDetail"
import { thisExpression } from "@babel/types";

class ListOfReceipts extends React.Component{
    state = {
        currentScreen: "LIST_RECEIPTS",
        selectedReceipt:{},
        selectedreceiptNumber:-1
    }
    viewDetails(selectedReceipt, selectedreceiptNumber){
        this.setState({currentScreen:"RECEIPT_DETAIL",
        selectedReceipt,
        selectedreceiptNumber
    
    })
    }
render(){
    let {currentScreen,
        selectedReceipt:{paidFor,companyName, balance, createdAt, amount},
        selectedreceiptNumber
    }= this.state

    if (currentScreen==="RECEIPT_DETAIL"){
        return (<ReceiptDetail
        paidFor= {paidFor}
        balance={balance}
        createdAt={createdAt}
        companyName={companyName}
        receiptNumber={selectedreceiptNumber}
        amount={amount}
        />)
    }
    return(
        <View style={myStyles.main}>
        <Header title="List Of Receipts"
        goBack ={this.props.moveBackHome}
        />
        <View style={myStyles.content}>
        {this.props.list.map((rcpt, index) => (
            <Receipt key={index}
            receiptNumber={index+1}
            receiptDate={rcpt.createdAt}
            receiptData={rcpt}
            viewDetails={()=>this.viewDetails(rcpt,index+1)}
            
            />
        ))
        }
        </View>
    </View>
)
    }
}
   
const myStyles=StyleSheet.create({
    main:{
        flex:1
    },
    content:{
        flex:8
    }
})

export default ListOfReceipts