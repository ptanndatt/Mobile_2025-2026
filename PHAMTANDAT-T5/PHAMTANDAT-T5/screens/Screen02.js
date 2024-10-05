import { StyleSheet, TextInput } from "react-native"
import { View,Text,Image,Button,CheckBox } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import { TouchableOpacity } from "react-native";
export default function Screen02({navigation}){
    const [isChecked,setIschecked] = useState(false)
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChecked = () => {
        setIschecked(!isChecked)
    }
    return(

        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Screen01")}>
                <Icon style={styles.returnIcon} name="arrow-left"  />
            </TouchableOpacity>
            <View style={styles.layout}>
                <Image source={require('../assets/DATA/Image 19.png')}></Image>
                <Text style={styles.textNice}>Nice to see you!</Text>
                <Text style={styles.textCreat}>Create your account</Text>

              <View  style={styles.textInput}>
                 <Icon style={{fontSize:'20px',marginLeft:'15px',width:'10%'}} name="user"></Icon>
                 <TextInput  keyboardType="default" style={{outline:'none'}} placeholder="Enter your user name"/>
              </View>

              <View  style={styles.textInput}>
                 <Icon style={{fontSize:'20px',marginLeft:'15px',width:'10%'}} name="envelope"></Icon>
                 <TextInput keyboardType="default" style={{outline:'none'}} placeholder="Enter your email address"/>
              </View>

              <View  style={styles.textInput}>
                 <Icon style={{fontSize:'20px',marginLeft:'15px',width:'10%'}} name="lock"></Icon>
                 <TextInput keyboardType="default" style={{outline:'none'}} placeholder="Enter your password"/>
              </View>
              
              <View style={styles.role}>
                  <CheckBox value={isChecked} onChange={handleChecked}/>
                   <Text style={{marginLeft:'10px',marginRight:'10px'}}>I agree with</Text>
                  <TouchableOpacity> <Text style={styles.textTerm}>Terms & Conditions</Text></TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.continueButton} onPress={()=> {navigation.navigate("Screen03")}}>
                 <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>

            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    returnIcon: {
        fontSize:'20px',
    },
    layout: {
        alignItems:"center",
        width:'100%',
    },
    textNice: {
        fontSize:'30px',
        fontWeight:'800'
    },
    textCreat:{
        color:'#aeb0b3',
        marginBottom:'50px'
    },

    textInput:{
        width:'300px',
        height:'40px',

        display:'flex',
        flexDirection:'row',
        alignItems:'center',

        marginBottom:'15px',

        backgroundColor:'#F5F5F5',

        borderRadius:"10px",
        borderColor:'black',
        borderWidth:'1px'

    },

    role: {
        display:'flex',
        flexDirection:'row'
    },
    textTerm:{
        color:'#71b7ec'
    },

    continueButtonText: {
        width:'300px',
        height:'50px',
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor:'#00bdd6',
        lineHeight:'50px',
        borderRadius:'10px',
        marginTop:'30px'
      },


})