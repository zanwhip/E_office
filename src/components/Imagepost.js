import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Imagepost = ( {image,caption}) => { 
  return (
    <View style = {styles.container}>
       <Image src={image} style={styles.image}  />
      <Text style={styles.title}>{caption}</Text>
    </View>
  )
}

export default Imagepost

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 253,
        backgroundColor : '#e3e3e3',
        marginVertical : 30,
        justifyContent : 'center',


    },
    image : {
      width : '100%',
      height : 254,
      borderRadius : 10,

    },
    title : {
      //marginTop : 30,
      fontSize : 15,
      fontWeight : '500',
      fontStyle : 'italic',
      
    }
})