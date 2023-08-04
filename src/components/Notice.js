import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native';


const Notice = ({status}) => {
    const navigation = useNavigation();
    const handleNavigate = () => {
        navigation.navigate('Noticedetail');
      };
      
switch (status) {
    case 'A':
    textweight = 'bold';
    backgroundColor = '#FFF5F5';
    break;
    case 'B':
    textweight = '400';
    backgroundColor = '#FFFFFF';
    
    default:
      dotColor = '#ffffff';
      break;
  }
  return (
   <TouchableOpacity onPress={handleNavigate}>
    <View style={[styles.container , {backgroundColor : backgroundColor}]} >
         <View>
          <Text style={[styles.newtext , { fontWeight : textweight }]}>Bạn vừa nhận được văn bản mới</Text>
        <Text style={styles.date}>5 ngày trước </Text>
        </View>

        <View>
        <Image source={require('../assets/image/right.png')} style={{ width : 40, height : 40 , marginVertical : '40%' }} />
        
        </View>
        
    </View>
    </TouchableOpacity>
     )
}

export default Notice

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        marginTop : 10,
        height : 80,
        width : '100%',
       justifyContent : 'space-between',
        paddingHorizontal : 20
        
     },
       newtext : {
        fontSize : 18,
        width: '100%',
        
        
     },
    date : {
        fontStyle : 'italic',
        marginTop : '10%',
       // marginLeft : 10
    }
})