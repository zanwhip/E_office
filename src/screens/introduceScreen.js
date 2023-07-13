import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const IntroduceScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
    <Ionicons 
    name="arrow-back-outline"
    size={20}
    color='#ffffff'
    onPress={() => navigation.goBack()}
    />
    <Text style={styles.textheader}>Giới thiêu UDN</Text>
     </View>

     <View  style={styles.contentcontainer}>
        <View style={styles.subcontentcontainer}>
            <Text style={styles.subcontent}>Lời ngỏ </Text>
            <AntDesign 
            name="right"
            size={20}
            color='#000000'
            style={{position: 'absolute', right: 5, top : 10}}/>
        </View>
        <View style={styles.subcontentcontainer}>
            <Text style={styles.subcontent}>Sứ mạng - tầm nhìn </Text>
            <AntDesign 
            name="right"
            size={20}
            color='#000000'
            style={{position: 'absolute', right: 5, top : 10}}/>
        </View>
        <View style={styles.subcontentcontainer}>
            <Text style={styles.subcontent}>Lịch sử hình thành </Text>
            <AntDesign 
            name="right"
            size={20}
            color='#000000'
            style={{position: 'absolute', right: 5, top : 10}}/>
        </View>
        <View style={styles.subcontentcontainer}>
            <Text style={styles.subcontent}>Cơ cấu tổ chức </Text>
            <AntDesign 
            name="right"
            size={20}
            color='#000000'
            style={{position: 'absolute', right: 5, top : 10}}/>
        </View>
        <View style={styles.subcontentcontainer}>
            <Text style={styles.subcontent}>Gương mặt tiêu biểu </Text>
            <AntDesign 
            name="right"
            size={20}
            color='#000000'
            style={{position: 'absolute', right: 5, top : 10}}/>
        </View>

     </View>
    </View>
  )
}

export default IntroduceScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#e3e3e3',
        
    },
    header : {
        flexDirection : 'row',
        width : '100%',
        height : 60,
        backgroundColor : '#1668C7',
        top : 0,
        paddingTop : 20,
        alignContent : 'center',
        paddingHorizontal : 10,

    },
    textheader : {
        fontSize : 22,
        color : '#ffffff',
        fontWeight : 'bold',
        marginLeft : 80,
    },
    contentcontainer : {
        marginTop : 30,
        paddingHorizontal : 10,
        width : '100%',
        height : 372,
        backgroundColor : '#e3e3e3'

    },
    subcontentcontainer : {
        width : '100%',
        height : 50,
        backgroundColor : '#ffffff',
        marginTop : 20,
        borderRadius : 10,
        marginLeft : 2,
        flexDirection : 'row'

    },
       subcontent : {
        fontSize : 20,
        fontWeight : 'bold',
        marginLeft : 20,
        marginTop : 10,
    }


})