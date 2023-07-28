import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Notice = () => {
    const navigation = useNavigation();
    const handleNavigate = () => {
        navigation.navigate('Noticedetail');
      };
  return (
   <TouchableOpacity onPress={handleNavigate}>
    <View style={styles.container} >
         <View>
          <Text style={styles.newtext}>Bạn vừa nhận được văn bản mới</Text>
        <Text style={styles.date}>5 ngày trước </Text>
        </View>

        <View>
        <AntDesign 
            name="right"
            size={20}
            color='#000000'
            style={{top : 30, }}/>
        
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
        backgroundColor : '#ffffff',
        justifyContent : 'space-between',
        paddingHorizontal : 20
        
     },
       newtext : {
        fontSize : 18,
        fontWeight : '300',
        width: '100%',
        
        
     },
    date : {
        fontStyle : 'italic',
        marginTop : '15%',
       // marginLeft : 10
    }
})