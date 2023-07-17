import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const handlePress = () => {
  const url = {link}; // Thay thế URL bằng liên kết bạn muốn mở
  Linking.openURL(url);
};

const Bio = ({image,name, unit, address, phone, email, link}) => {
  return (

    <View>
    <View style = {styles.container}>
      <View style={styles.imagecontainer}> 
      <Image source={image} style={styles.image}  />
      </View>
      
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.title}>Đơn vi : {unit}</Text>
      <Text style={styles.title}>Địa chỉ liên hệ : {address}</Text>
      <Text style={styles.title}>Điện thoại cơ quan :{phone}</Text>
      <Text style={styles.title}>Email :{email}</Text>
      <TouchableOpacity onPress={handlePress}>
      <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Lí lịch hoạt động</Text>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default Bio

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 450,
        backgroundColor : '#e3e3e3',
      //  marginVertical : 30,
        justifyContent : 'center',
        paddingHorizontal : 20,
        borderBottomWidth : 1
    },
    image : {
      alignItems : 'center',
      width : '50%',
      height : 254,
      borderRadius : 10,

    },
    imagecontainer : {
      alignItems : 'center'
    },
    title : {
      //marginTop : 30,
      fontSize : 15,
      fontWeight : '500',
      fontStyle : 'italic',
      
    },
    name : {
      fontSize : 16,
      fontWeight : 'bold',
      textAlign : 'center',
      marginVertical : 10,

    }
})