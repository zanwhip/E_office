import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Notfound from '../components/Notfound';
import Header from '../components/Header';


const SubmissionmanageScreen = ({navigation}) => {
  return (
    <View>
    <View style={styles.header}>
 <Ionicons 
 name="arrow-back-outline"
 size={20}
 color='#ffffff'
 onPress={() => navigation.goBack()}
 />
 <Text style={styles.textheader}>Quản lí tờ trình</Text>
  </View>
  <Notfound />
  </View>
  )
}

export default SubmissionmanageScreen

const styles = StyleSheet.create({
  
    container : {
     flex: 1,
     backgroundColor: '#e3e3e3',
          
      },
      header : {
        flexDirection : 'row',
        width : '100%',
        height : 60,
        backgroundColor : '#1668C7',
        top : 0,
        paddingTop : 20,
        alignContent : 'center',
       // paddingHorizontal : 10,
      
      },
      textheader : {
        fontSize : 22,
        color : '#ffffff',
        fontWeight : 'bold',
        marginLeft : 80,
      },
      displaycontainer : {
        width : '100%',
        height : '100%',
        paddingTop : 20,
      
      },
      image :{
        width : 400,
        height : 400,

      },
      textnotfound : {
        fontSize : 20,
        fontWeight: '800',
        marginLeft : 20,
      },

      
})