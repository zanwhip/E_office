import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal,StyleSheet } from 'react-native';

import Header from '../components/Header'
import { ScrollView } from 'react-native';

const header = 'Xem Lương - Thuế cá nhân'
const SalaryScreen = () => {
  return (
    <View style={styles.container}>
         <Header header={header} />
         <View style={styles.Selectcontainer}>
              <View style={styles.monthpicker}>
                <Text style={styles.monthtext}>THÁNG 5 </Text>
                
              </View>
        </View>
        <View style={styles.titlecontainer}>
        <Text style={styles.title}>Danh sách lương và phụ cấp</Text>
        </View>
        <ScrollView style={styles.displaycontainer}>
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text>Mã cán bộ </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>1109</Text>
          </View>
          </View>

          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text>Họ và tên </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>Ngô Thị Hương Giang</Text>
          </View>
          </View>

          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text>Lương bậc ngành </Text>
          </View>
          <View style={styles.unit}>
            <View style={styles.unittext=}></View>
            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>Ngô Thị Hương Giang</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>Ngô Thị Hương Giang</Text>
          </View>
          </View>
          </View>

        </ScrollView>
    </View>
  )
}


export default SalaryScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    Selectcontainer : {
        width : '100%',
        height : 50,
        backgroundColor : '#1668C7',        
        alignItems : 'center'
    },
    monthpicker : {
      backgroundColor : '#ffffff',
      width : '90%',
      height : 40,
      borderRadius : 10,
      justifyContent : 'center',
      alignItems : 'center'
    },
    monthtext : {
      fontSize : 20,
      fontWeight : '700'
    },
    titlecontainer : {
      width : '100%',
      height : 30,
      backgroundColor : '#1668C7',   
      paddingHorizontal : '5%'
    },
    title : {
      fontSize : 16,
    color :'#ffffff',
    justifyContent : 'center',
    },
    displaycontainer : {
      paddingHorizontal : 10,
      paddingVertical : 10
    },
    properties : {
     // backgroundColor : "#ffffff",
      flexDirection : 'row',
      marginVertical : 5,
    },
    propertiesname : {
      width : '25%',
      backgroundColor : '#1668C7',
      paddingHorizontal : 8,
      paddingVertical : 10  ,
      marginHorizontal : 10,


    },
    content : {
      flexDirection : 'column'
    },
    contentcontainer : {
      backgroundColor : '#ffffff',
      paddingHorizontal : 10,
      paddingVertical : 10  ,
      
    },
    unit : {
      width : '30%',
      flexDirection : 'column'
    },
    unittext : {

    }
})