import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const DataMonth = ({
    image,
    name, 
    date
}
) => {
    
    const navigation = useNavigation();
    const handleMenuPressStatistics  = () => { 
      navigation.navigate('Statistics');
    };
  return (
   <TouchableOpacity
   onPress={handleMenuPressStatistics} >
    <View style={styles.container}>
        <View style={styles.newscontent}>
        <Text style={styles.newtext}>Số liệu CBVC Đại học Đà Nẵng tháng 8_2020</Text>
        <Text style={styles.date}>02/11/2020</Text>
        </View>

        <View>
        <Image source={require('../assets/image/right.png')} style={{ width : 40, height : 40, justifyContent : 'center', alignItems :'center', marginVertical : '40%' }} />
        </View>
    </View>
   </TouchableOpacity>
     )
}

export default DataMonth

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        marginTop : 10,
        height : 90,
        width : '100%',
        backgroundColor : '#ffffff',
        justifyContent : 'space-around',
        marginVertical : 5,
        paddingVertical :5,
        
    },
       newtext : {
        fontSize : 18,
        fontWeight : '400',
        width: 300,
        marginLeft : 10

    },
    date : {
        marginTop : 10,
        marginLeft : 10,
        fontStyle : 'italic'
    }
})