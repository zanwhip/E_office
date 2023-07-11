import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

const Notice = ({
    image,
    name, 
    date
}
) => {
  return (
   <TouchableOpacity>
    <View style={styles.container}>
        <View style={styles.newscontent}>
        <Text style={styles.newtext}>Bạn vừa nhận được văn bản mới</Text>
        <Text style={styles.date}>5 ngày trước </Text>
        </View>

        <View>
        <AntDesign 
            name="right"
            size={20}
            color='#000000'
            style={{top : 30, marginLeft : 25}}/>
        
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
        height : 90,
        width : '100%',
        backgroundColor : '#ffffff',
        
    },
       newtext : {
        fontSize : 18,
        fontWeight : '200',
        width: 300,
        marginLeft : 10

    },
    date : {
        fontStyle : 'italic',
        marginTop : 10,
        marginLeft : 10
    }
})