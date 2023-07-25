import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import WeekEvent from './WeekEvent';



const WeekSchedule = ({status,date, hour, person, task}) => {
    let dotColor = '';
    let displayStatus = '';
  
    // Xác định màu sắc dựa trên trạng thái
  switch (status) {
    case 'A':
      dotColor = '#1EDC26';
      displayStatus = 'Đã duyệt';
      break;
    case 'B':
      dotColor = '#BBBBBB';
      displayStatus = 'Chưa duyệt';
      break;
       default:
      dotColor = '#ffffff';
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
               <View style={styles.status}>
               <Entypo 
            name="dot-single"
            size={40}
            style={{ color : dotColor , top  : '8%', marginRight : 0  }}/>
        <Text style={{  fontSize : 14, alignItems :'center',  top :'20%', color : dotColor }}>{displayStatus}</Text>
       
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