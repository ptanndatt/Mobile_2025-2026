import { StyleSheet } from "react-native"
import { View,Text,Image,TouchableOpacity } from "react-native"

export default function Screen01({navigation}){
    return(
        <View>
            <View style={{alignItems:'center',marginTop:'30px'}}>
                <Image source={require('../assets/DATA/Container 17.png')}></Image>
            </View>

            <View style={{marginLeft:'30px'}}>
                <Text style={styles.boost}>Boost Productivity</Text>
                <Text style={styles.simpify}>Simpify tasks, boost, productivity</Text>
            </View>

            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Screen02")}} style={styles.btnSignUp}>Sign up</TouchableOpacity>
            </View>
            <View>
                 <TouchableOpacity style={{alignItems:'center',marginTop:'10px',marginBottom:'10px'}} onPress={()=>{navigation.navigate("Screen03")}}>Login</TouchableOpacity>
            </View>
          

             <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <TouchableOpacity style={styles.list} ></TouchableOpacity>
                <TouchableOpacity style={styles.chose} ></TouchableOpacity>
                <TouchableOpacity style={styles.list} ></TouchableOpacity>
             </View>
        </View>

    )
}


const styles = StyleSheet.create({
  
   boost:{
        fontWeight:'800',
        fontSize:'20px'
   },
   simpify:{
        opacity: 0.5
   },
   btnSignUp: {
        width:'330px',
        height:'50px',
        color:'#fff',
        backgroundColor:'#53b8b9',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'10px',
        marginTop:'5px'
   },

   list:{
        borderRadius:'100%',
        width: '10px',
        height: '10px',
        margin:'3px',
        backgroundColor:'#ddd',
        border: '1px',
        borderColor:'blue',
        

   },
   chose:{
    borderRadius:'100%',
    backgroundColor:'#53b8b9',
    width: '10px',
    height: '10px',
    margin:'3px'
}
})