import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Work = ({status, title, date, rate}) => {
    const navigation = useNavigation();
    const handleNavigate = () => {
        navigation.navigate('WorkDetail');
      };


    let dotColor = '';
    let displayStatus = '';
  
    // Xác định màu sắc dựa trên trạng thái
    switch (status) {
      case 'A':
        dotColor = '#F29100';
        displayStatus = 'Đang thực hiện';
        break;
      case 'B':
        dotColor = '#20AD72';
        displayStatus = 'Đã hoàn thành';
        break;
        case 'C':
        dotColor = '#959595';
        displayStatus = 'Tạm dừng';
        break;
      default:
        dotColor = '#AAAAAA';
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
        <View style={{ flexDirection : 'row',}}>
        <Entypo 
            name="dot-single"
            size={40}
            style={{ color : dotColor , marginRight : 0 ,alignItems :'center', left : 0  }}/>
        <Text style={{  fontSize : 14, alignItems :'center', color : dotColor, marginRight : 5, marginVertical : 11}}>{displayStatus}</Text>
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
        backgroundColor: '#ffffff',
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