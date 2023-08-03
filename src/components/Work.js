import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Work = ({status, title, date, rate}) => {
    const navigation = useNavigation();
    const handleNavigate = () => {
        navigation.navigate('WorkDetail');
      };


      let dotImageSource = require('../assets/image/dotgray.png'); // Mặc định dotImage là ccc.png

      // Xác định hình ảnh dựa trên trạng thái
      switch (status) {
        case 'A':
          Colortext = '#20AD72';
          dotImageSource = require('../assets/image/dotgreen.png');
          break;
        case 'B':
          Colortext = '#DB6A18';
          dotImageSource = require('../assets/image/dotorange.png');
          break;
          case 'C':
          Colortext = '#858585';
          dotImageSource = require('../assets/image/dotgray.png');
          break;
          default:
          break;
      }
    
    let textcolorRate = '';
    let backgroundColorRate = '';
    let  displayrate = '';
    let widthRate = null
    // Xác định màu sắc dựa trên rate
    switch (rate) {
      case '1':
        textcolorRate = '#FF4444';
        displayrate = 'Cao';
        backgroundColorRate = '#FFDADA'
        widthRate = 50
        break;
      case '2':
        textcolorRate = '#DB6A18';
        displayrate = 'Trung bình';
        backgroundColorRate = '#FEE4D1'
        widthRate = 110
        break;
      case '3':
        textcolorRate = '#20AD72';
        displayrate = 'Thấp';
        backgroundColorRate = '#CFFFEB'
        widthRate = 80
      break;
      default:
        textcolorRate = '#AAAAAA';
        break;
    }
  
  
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={{ backgroundColor : backgroundColorRate , height : 30,width : widthRate, borderRadius : 15, justifyContent : 'center', alignItems : 'center'}}>
          <Text style={{ color : textcolorRate }}>{displayrate}</Text>
      </View>
      <View style={styles.titledisplay}>
        <Text style={styles.namenotice}>{title}</Text>
        <View style={styles.description}>
        <Text style={styles.date}>{date}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
           
            <Image source={dotImageSource} style={{ width: 10, height: 10, alignItems: 'center', left: 0, marginHorizontal : 10 }} />
            <Text style={{ fontSize: 14, alignItems: 'center', marginRight: 5, marginVertical: 11 , color : Colortext}}>
              {status === 'A' ? 'Đã hoàn thành ' : status === 'B' ? 'Đang hoàn thành' :status === 'C' ? 'Tạm dừng' : ''}
            </Text>
          </View>
         </View>
      </View>
    </TouchableOpacity>
  )
}

export default Work

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        width : '100%',
        height : 120,
        borderRadius : 10,
       borderWidth : 0.2,
        marginVertical : 3,
        paddingHorizontal : 16,
        paddingVertical : 10,

    },
    documental : {
        fontSize : 20,
        fontWeight : 'bold',
      },
  
      title : {
          backgroundColor : '#EEEEEE',
          height : 30,
          width : '100%',
          borderTopLeftRadius : 10,
          borderTopRightRadius : 10,
      },
    
      namenotice : {
          fontSize : 18,
          fontWeight : '600',
         marginVertical : 5,
      },
      date : {
        fontStyle : 'italic',
        marginRight : 70,
        marginTop: 8,
        
        },
      description : {
          flexDirection : 'row',
         
      }
})