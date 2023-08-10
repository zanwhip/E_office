import { StyleSheet, Text,Image, View, StatusBar } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'
import Header from '../components/Header';
import { prefetchConfiguration } from 'react-native-app-auth';
 import { authorize } from 'react-native-app-auth';


 
 const config = {
  clientId: 'devoffice  ',
  redirectUrl: 'eoffice://callback',
  scopes: ['openid', 'profile'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://id.udn.vn:8443/auth/auth',
    tokenEndpoint: 'https://id.udn.vn:8443/auth/token',
  },
  }
  
const LoginScreen = ({navigation}) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const handleSignInMicrosoft = async () => {
    
    try {
      const result = await authorize(config);
      console.log('Authorization result:', result);

      // Lưu access token và refresh token
      setAccessToken(result.accessToken);
      setRefreshToken(result.refreshToken);

      // Sau khi xác thực thành công, điều hướng người dùng đến màn hình khác
      navigation.navigate('Welcome');
    } catch (error) {
      console.error('Microsoft Login Error:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
      if (error.request) {
        console.error('Request:', error.request);
      }
      console.error('Error message:', error.message);
    }
    // navigation.navigate('Welcome')
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
      <Image source={require('../assets/image/Loginimage.png')} style={styles.image} />
      </View>
      <View style={styles.Textcontainer}>
        <Text style={styles.TextHeader}>ĐẠI HỌC ĐÀ NẴNG</Text>
        <Text style={styles.TextTitle}>CHỨNG THỰC TẬP TRUNG UDN</Text>
      </View>
     <View style={styles.box}> 
      <Text style={{  marginVertical : 10,fontSize : 20,color : '#000000',fontWeight :'bold', }}>Đăng nhập</Text>
      <TouchableOpacity 
      style={styles.buttonMicro}
      onPress={handleSignInMicrosoft}
      >
        <Text style={styles.textbutton}>Microsoft</Text>
      </TouchableOpacity>
      <TouchableOpacity
       style={styles.buttonGoogle}
       onPress={() => navigation.navigate('Welcome')}
       >
        <Text style={styles.textbutton}>Google</Text>
      </TouchableOpacity>
      <View style={{ alignItems : 'center', justifyContent : 'center', marginVertical : 20, }}>
      <Text style={styles.subtext}> Chọn đăng nhập bằng tài khoản mail <Text style={{ color : '#FF6262' }}>Office 365</Text> hoặc tài khoản <Text style={{ color :'#1668C7' }}>Gmail</Text> .</Text>
      
      </View>
           </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1668C7',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      box : {
        
        width : '80%',
        backgroundColor : '#ffffff',
        alignItems : 'center',
        borderRadius : 10,
        marginBottom :5,
        
    
      },
      image : {
        height : '80%',
        width : '80%',
      },
      Textcontainer : {
        alignItems : 'center',
        alignContent : 'center',
        marginTop : 5,
        paddingTop : 5,
    
      },
      TextHeader : {
        marginVertical : 10,
        fontSize : 20,
        color : '#ffffff',
        fontWeight :'bold',
      },
      TextTitle : {
        fontSize : 15,
        color : '#ffffff',
        fontWeight :'bold',
        marginBottom : 20,
        },
        buttonMicro : {
          height : 46,
          width : '95%',
          backgroundColor : '#28ACDF',
          borderRadius : 31,
          marginTop : 10,
          marginBottom : 10,
          alignItems : 'center'
        },
        buttonGoogle : {
          height : 46,
          width : '95%',
          backgroundColor : '#EA4335',
          borderRadius : 31,
          marginTop : 10,
          marginBottom : 10,
          
          alignItems : 'center'
        },
        subtext : {
          fontSize : 14,
          fontWeight : '400',
          justifyContent : 'center',
          alignContent : 'center',
          paddingHorizontal : 10,
         
        },
        image : {
          height : 222.15,
          width : 282,
          alignContent : 'center',
          alignItems : 'center'
        },
        textbutton : {
          fontSize : 15,
          fontWeight : 'bold',
          justifyContent : 'center',
          marginVertical : 10,
          color : '#ffffff'
          
          }
})