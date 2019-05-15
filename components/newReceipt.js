import React, {Component} from "react"
import{
View, Text, TextInput,StyleSheet, TouchableOpacity,
} from "react-native"
import Header from "./header"

class NewReceipt extends Component{
    state = {
        companyName:"",
        amount:"",
        paidFor:"",
        balance:""
    }
    render(){
        let {companyName,amount,paidFor,balance}=this.state
        return(
            <View style={myStyles.main} >
                <Header title="New Receipt" 
                goBack ={this.props.moveToHome}
                />
                <View style={myStyles.content}>
                
                {/*the inputs
                company name, amount pd, paid for,balance, save button*/}
                <View style={myStyles.row}>
                    <Text styles={myStyles.txt}>
                        Company Name
                        </Text>
                    <TextInput style ={myStyles.input}
                    placeholder=""
                    autoFocus
                    onChangeText={
                        (companyName)=>this.setState({companyName:companyName})
                    }
                   
                    />
                </View>
                <View style={myStyles.row}>
                    <Text styles={myStyles.txt}>
                        Amount Paid
                        
                        </Text>
                    <TextInput style ={myStyles.input}
                    placeholder=""
                    onChangeText={
                        (amount)=>this.setState({amount})
                    }
                    />
                </View>
                <View style={myStyles.row}>
                    <Text styles={myStyles.txt}>
                        Being Payment for
                        </Text>
                    <TextInput style ={myStyles.input}
                    placeholder=""
                    onChangeText={
                        (paidFor)=>this.setState({paidFor})
                    }
                    />
                </View>
                <View style={myStyles.row}>
                    <Text styles={myStyles.txt}>
                        Balance
                        </Text>
                    <TextInput style ={myStyles.input}
                    placeholder=""
                    onChangeText={
                        (balance)=>this.setState({balance})
                    }
                    />
                </View>
                <TouchableOpacity style={myStyles.btn}
                onPress={()=>this.props.save(companyName, amount, paidFor,balance)}
                >
                <Text style={myStyles.txt}>
                Save
                </Text>
        
                </TouchableOpacity>
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
    },
    row:{
        padding:20
    },
    input:{
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.2)",
        borderRadius:10
    },
    txt:{
        fontSize:18
    },
    btn:{
        alignSelf:"center",
        backgroundColor:"#1d1d1d",
        padding:10,
        paddingHorizontal:40,
        borderRadius:5
    },
    txt:{
        color:"#FFF"
    }
})

export default NewReceipt