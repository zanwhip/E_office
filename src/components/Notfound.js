import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Notfound = () => {
  return (
    <View>
     <View style={styles.displaycontainer}>
  <Image source={require('../assets/image/NoFound.png')} style={styles.image} />
  <Text style={styles.textnotfound}>Không tìm thấy file báo cáo mới</Text>
  </View>
    </View>
  )
}

export default Notfound

const styles = StyleSheet.create({
    
    container : {
        flex: 1,
        backgroundColor: '#e3e3e3',
             
         },
         
      displaycontainer : {
        width : '100%',
        height : '100%',
        paddingTop : 20,
        alignContent : 'center',
        alignItems: 'center',
      
      },
      image :{
        width : 400,
        height : 400,

      },
      textnotfound : {
        fontSize : 20,
        fontWeight: '800',
        
      },
})