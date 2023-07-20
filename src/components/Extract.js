import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native';

const extract = () => {
  return (
    <View style={styles.container}>
      <View style={styles.extraccontainer}>
        <View style={styles.extact}> 
            <Text style={styles.properties}>Trích yếu</Text> 
            </View>
        <Text style={styles.extactdetail}>Tờ trình về việc phê duyệt kế hoạch đào tạo năm học 2023 - 2024 của Viện Nghiên cứu và Đào tạo Việt - Anh</Text>
        <View style={styles.link}>
        <AntDesign 
    name="link"
    size={20}
    color='#1768D4'
    />
            <Text style={{ color : '#1768D4',textDecorationLine: 'underline' }}>1569-247-ttr-vncdtva_1683875983.pdf</Text>
        </View>
        </View>
    </View>
  )
}

export default extract

const styles = StyleSheet.create({
  container : {
    flex : 1,
    
  },
  extraccontainer : {
    width : '90%',
    height : 140,
    backgroundColor : '#ffffff',
    //paddingBottom : 10,
    marginLeft : 15,
    borderRadius : 20,
    paddingBottom : 10,
    marginTop: 20,
  },
  extact: {
    width : '100%',
    height : 40,
    borderRadius: 10,
    backgroundColor : '#EEEEEE',
    paddingVertical : 10,
    

  },
  extactdetail : {
    fontSize : 14,
    fontWeight : '400',
    fontStyle: 'normal',
    marginHorizontal : 10,
    marginVertical : 10

  },
  link : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingHorizontal : 10,
    marginLeft : 10,
    marginRight : 10,
    textDecorationLine: 'underline'
  }
})