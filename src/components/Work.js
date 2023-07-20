import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Work = ({status}) => {
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
        dotColor = '#1EDC26';
        displayStatus = 'Đã hoàn thành';
        break;
      default:
        dotColor = '#AAAAAA';
        break;
    }
  
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.titledisplay}>
        <Text style={styles.namenotice}>Phân tích công việc</Text>
        <View style={styles.description}>
        <Text style={styles.date}>14/4/2023 - 14/05/2023</Text>
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
        height : 80,
        borderRadius : 10,
       borderWidth : 0.2,
        marginVertical : 3,
    },
    documental : {
        fontSize : 20,
        fontWeight : 'bold',
      },
  
      title : {
          backgroundColor : '#EEEEEE',
          height : 30,
          paddingHorizontal : 10, 
          width : '100%',
          borderTopLeftRadius : 10,
          borderTopRightRadius : 10,
      },
    
      namenotice : {
          fontSize : 18,
          fontWeight : '600',
          marginHorizontal : 10,
          marginVertical : 5,
          
  
      },
      date : {
        marginHorizontal : 10,
        fontStyle : 'italic',
        marginVertical : 5,
        marginRight : 70
        },
    
      description : {
          flexDirection : 'row',
         
          paddingTop : 5,
          
          
      }
})