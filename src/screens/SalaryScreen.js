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
            <Text style={styles.propertiestext}>Mã cán bộ </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>1109</Text>
          </View>
          </View>

          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Họ và tên </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>Ngô Thị Hương Giang</Text>
          </View>
          </View>

          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Lương bậc ngành </Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Hệ số</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>4.4</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>6.556.000</Text>
          </View>
          </View>
          </View>

        
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Lương hợp đồng </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text> 0 </Text>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Phụ cấp chức vụ </Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Hệ số</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>0.8</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>1.192.000</Text>
          </View>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Phụ cấp thâm niên vượt khung </Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Hệ số</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>0</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>0</Text>
          </View>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Phụ cấp thâm niên nghề </Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Tỷ lệ</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>0</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>0</Text>
          </View>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Phụ cấp khác </Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Tỷ lệ</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>0</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>0</Text>
          </View>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Phụ cấp công tác Đảng </Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Hệ số</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>0.3</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>447.000</Text>
          </View>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Lương làm thêm </Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Hệ số</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>1</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>1.580.000</Text>
          </View>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Quản lý phí</Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Hệ số</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>6.7</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>3.350.000</Text>
          </View>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Tổng thu nhập </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>13.105.000</Text>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Lương bậc ngành </Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>BHXH</Text>
            </View>
            <View style={styles.unit}>
              <Text>BHTN</Text>
            </View> 
            <View style={styles.unit}>
              <Text>BHYT</Text>
            </View>  
            <View style={styles.unit}>
              <Text>KCCĐ</Text>
            </View>  
            <View style={styles.unit}>
              <Text>Tổng</Text>
            </View>             
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>619.840</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>77.480</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>116.220</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>77.480</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>831.390</Text>
          </View>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Thuế TNCN </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>532.390</Text>
          </View>
          </View>

          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Trừ tạm ứng, nợ thuế </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>0</Text>
          </View>
          </View>


          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Thực lĩnh </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>11.647.729</Text>
          </View>
          </View>

          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Số TK cá nhân </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>560100000686925</Text>
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
      width : '20%',
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
    unitcontainer : {
     width : '20%'

    },
    unit : {
      flexDirection : 'column',
      paddingHorizontal : 4,
      paddingVertical : 10,
      //width : '20%',
      height : 40,
      backgroundColor : '#B9D9FF',
      marginBottom : 1,
      paddingHorizontal : 5,


    },
    propertiestext : {
      fontSize : 20,
      fontWeight : '400',
      color : '#ffffff'
    },
    unittext : {

    }
})