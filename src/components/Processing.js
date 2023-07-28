import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Processing = ({unit, content, base, process, deadline, proof}) => {
    
let dotColor = '';
let displayStatus = '';

// Xác định màu sắc dựa trên trạng thái
switch (process) {
  case 'A':
    dotColor = '#F29100';
    displayStatus = 'Đang tiến hành';
    break;
  case 'B':
    dotColor = '#20AD72';
    displayStatus = 'Đã tiến hành';
    break;
  case 'C':
    dotColor = '#AAAAAA';
    displayStatus = 'Chưa triển khai';
    break;
    case 'D':
        dotColor = '#FF4444';
        displayStatus = 'Đang tạm hoãn';
        break;
  default:
    dotColor = '#AAAAAA';
    break;
}


  return (
    <View style={styles.container}>
      <View style={{ flexDirection : 'row' , marginVertical : 8 }}>
        <Text style={{ width : '25%' , fontSize : 18, fontWeight : '600'}}>Đơn vị: </Text>
        <Text style={{ fontWeight : '400' , fontSize : 16 }}> {unit} </Text>
      </View>

      <View style={{ flexDirection : 'row' , marginVertical : 8 }}>
        <Text style={{ width : '25%' , fontSize : 18, fontWeight : '600'}}>Nội dung: </Text>
        <Text style={{ fontWeight : '400' , fontSize : 16 }} > {content} </Text>
      </View>

      <View style={{ flexDirection : 'row' , marginVertical : 8}}>
        <Text style={{ width : '25%' , fontSize : 18, fontWeight : '600'}}>Căn cứ: </Text>
        <Text style={{ fontWeight : '400' , fontSize : 16 }} > {base} </Text>
      </View>

      <View style={{ flexDirection : 'row' , marginVertical : 8 }}>
        <Text style={{ width : '25%' , fontSize : 18, fontWeight : '600'}}>Tiến độ:  </Text>
        <View style={{ backgroundColor : dotColor, width : '35%', height : 30, borderRadius : 8, justifyContent : 'center', alignContent :'center', alignItems : 'center' }}>
            <Text style={{ color : '#ffffff', fontWeight : '400'  }} >{displayStatus}</Text>
        </View>
      </View>

      <View style={{ flexDirection : 'row' , marginVertical : 8 }}>
        <Text style={{ width : '25%' , fontSize : 18, fontWeight : '600'}}>Thời hạn:  </Text>
        <Text style={{ fontWeight : '400' , fontSize : 16 }}> {deadline} </Text>
      </View>

      <Text style={{  fontSize : 18, fontWeight : '600' , marginVertical : 8}}>Minh chứng/Nguyên nhân/Dự kiến thời gian hoàn thành: </Text>
      <Text  style={{ fontWeight : '400' , fontSize : 16 }}> {proof} </Text>
    </View>
  )
}

export default Processing

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: '#e3e3e3',
        paddingHorizontal : 16,
        paddingVertical : 8,
        backgroundColor : '#ffffff',
        marginTop : 8,
        
    },

    
})