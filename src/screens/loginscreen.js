import { StyleSheet, Text,Image, View, StatusBar } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Loginscreen = ({navigation}) => {
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
      <Text style={styles.TextHeader}>Đăng nhập</Text>
      <TouchableOpacity 
      style={styles.buttonMicro}
      onPress={() => navigation.navigate('Welcome')}
      >
        <Text style={styles.textbutton}>Microsoft</Text>
      </TouchableOpacity>
      <TouchableOpacity
       style={styles.buttonGoogle}
       onPress={() => navigation.navigate('Welcome')}
       >
        <Text style={styles.textbutton}>Google</Text>
      </TouchableOpacity>
      <Text style={styles.subtext}> Chọn đăng nhập bằng tài khoản mail Office 365(màu xanh) hoặc tài khoản Gmail(màu đỏ).</Text>
           </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default Loginscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25A3DB',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      box : {
        height : 268,
        width : 328,
        backgroundColor : '#ffffff',
        alignItems : 'center',
        borderRadius : 10,
        marginBottom :5,
    
      },
      image : {
        height : 222.15,
        width : 222.15,
      },
      Textcontainer : {
        alignItems : 'center',
        alignContent : 'center',
        marginTop : 5,
        paddingTop : 5,
    
      },
      TextHeader : {
        marginTop : 10,
        marginBottom : 10,
        fontSize : 20,
        color : '#000000',
        fontWeight :'bold',
      },
      TextTitle : {
        fontSize : 15,
        color : '#000000',
        fontWeight :'bold',
        marginBottom : 20,
        },
        buttonMicro : {
          height : 46,
          width : 297,
          backgroundColor : '#28ACDF',
          borderRadius : 31,
          marginTop : 10,
          marginBottom : 10,
        },
        buttonGoogle : {
          height : 46,
          width : 297,
          backgroundColor : '#EA4335',
          borderRadius : 31,
          marginTop : 10,
          marginBottom : 10,
        },
        subtext : {
          fontSize : 14,
          fontWeight : '100',
        },
        image : {
          height : 222.15,
          width : 282,
          alignContent : 'center',
          alignItems : 'center'
        },
        textbutton : {
          fontSize : 15,
          alignContent : 'center',
          alignItems : 'center',
          justifyContent : 'center',
          marginBottom : 10,
          marginTop : 10,
          marginLeft : 100,
          }
})