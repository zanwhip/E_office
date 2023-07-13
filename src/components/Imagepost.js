import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const hotnew1 = '../assets/image/hotnew1.png';
const hotnew2 = '../assets/image/hotnew2.png';
const hotnew3 = '../assets/image/hotnew3.png';

const Imagepost = () => {
  return (
    <View style = {styles.container}>
       <Image source={{ uri: hotnew1 }}  style={styles.image}  />
       <Text>Toàn cảnh Chương trình phát động InTE-UD 2023 tại ĐHĐN</Text>
    </View>
  )
}

export default Imagepost

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 253,
        backgroundColor : '#ffffff',
        marginVertical : 50,
        justifyContent : 'center',
        

    },
    image : {
      width : '100%',
      height : 254,

    },
    title : {
      fontSize : 15,
      fontWeight : 16,
      fontStyle : 'italic',
      
    }
})