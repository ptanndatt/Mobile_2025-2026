import { Text,TouchableOpacity,TextInput,StyleSheet,View,Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Screen03({navigation}){
    return (
        <View>
            <Image style={{width:'100%'}} source={require('../assets/DATA/Image 20.png')}></Image>
            <View style={{padding:'30px'}}>
                <Text style={{fontWeight:'900',fontSize:'30px',marginTop:'30px',marginBottom:'40px'}}>Welcome!</Text>
                <View style={{marginBottom:'20px'}}>
                    <Text style={{fontWeight:'800'}}>Email</Text>
                    <View style={styles.layoutInput}>
                        <Icon style={{marginRight:'10px',fontSize:'20px'}} name="envelope"></Icon>
                        <TextInput style={{outline:'none'}} keyboardType="default" placeholder="Enter email"></TextInput>
                    </View>
                </View>

                <View>
                    <Text style={{fontWeight:'800'}}>Password</Text>
                    <View style={styles.layoutInput}>
                        <Icon style={{marginRight:'10px',fontSize:'20px'}} name="lock"></Icon>
                        <TextInput style={{outline:'none',width:'90%'}} keyboardType="default" placeholder="Enter password"></TextInput>
                        <Icon name="eye-slash"></Icon>
                    </View>

                    <TouchableOpacity style={styles.btn_Login} onPress={()=>{navigation.navigate("Screen04")}}>
                        <Text style={{ color:'white', fontWeight:'400',}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    layoutInput:{
        backgroundColor: '#dadbdd',
        width: "330px",
        height: "50px",
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:'5px',
        padding:"10px"
    },
    btn_Login: {
        marginTop:'50px',
        width:'330px',
        height:'50px',
        backgroundColor:'#25c3d9',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'10px'   
    }
})
