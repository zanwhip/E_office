import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import WeekEvent from './WeekEvent';



const WeekSchedule = ({status,date, hour, person, task}) => {
   
  let dotImageSource = require('../assets/image/dotgray.png'); // Mặc định dotImage là ccc.png

  // Xác định hình ảnh dựa trên trạng thái
  switch (status) {
    case 'B':
      Colortext = '#959595';
      dotImageSource = require('../assets/image/dotgray.png');
      break;
    case 'A':
      Colortext = '#1EDC26';
      dotImageSource = require('../assets/image/dotgreen.png');
      break;
      default:
      break;
  }

  const navigation = useNavigation();
  const handleNavigate = () => {
      navigation.navigate('DetailSchedule');
    };
  return (
    
      <TouchableOpacity style={styles.displayschedule} onPress={handleNavigate}  >
       
        <View style={styles.taskcontainer}>
            <View style={styles.timecontainer}>
                <Text style={styles.timetext}>{date}</Text>
                <Text style={styles.timetext} >{hour}</Text>
            </View>
              <View style={styles.taskcontentcontainer}>
                <Text style={styles.persontext}>{person}</Text>
                <Text style={{ fontSize : 16 }}>{task}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
           
           <Image source={dotImageSource} style={{ width: 10, height: 10, alignItems: 'center', left: 0, marginHorizontal : 10 }} />
           <Text style={{ fontSize: 14, alignItems: 'center', marginRight: 5, marginVertical: 11 , color : Colortext}}>
             {status === 'B' ? 'Chưa duyệt' : status === 'A' ? 'Đã duyệt' : ''}
           </Text>
         </View>
               
              
              </View>
        </View>
      </TouchableOpacity>
  
  )
}

export default WeekSchedule

const styles = StyleSheet.create({
    
  taskcontainer : {
    width : '100%',
     height : 140,
    // backgroundColor : '#000000',
   // borderRadius : 10
   flexDirection : 'row',
   marginVertical : 10, 
  },
  timecontainer : {
    backgroundColor : '#1668C7',
    width : '28%',
    borderTopLeftRadius : 10, 
    borderBottomLeftRadius : 10,
    height : '100%',
    justifyContent :'center'
  },
  taskcontentcontainer : {
    backgroundColor : '#ffffff',
    borderBottomRightRadius : 10,
    borderTopRightRadius : 10,
    height :'100%',
    width :'72%',
    paddingHorizontal : 10,
    paddingVertical : 20
  }, 
  timetext : {
    fontSize : 16,
    color : '#ffffff',
    fontWeight : '700',
    textAlign : "center",
    alignContent : 'center'
    
  },
  persontext : {
    fontSize : 16,
    fontWeight : '700'

  },
 status : {
    flexDirection : 'row',
  marginLeft :'60%',
 }
})