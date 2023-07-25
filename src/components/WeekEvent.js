import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WeekEvent = () => {
  return (
    <View style={styles.displaycontainer}>
      <View style={styles.time}>
        <Text style={{ fontSize : 18, color : '#ffffff', fontWeight :'bold' , borderColor : '#000000' ,  textShadowColor: '#000000',    textShadowOffset: { width: 1, height: 1 },   textShadowRadius: 2,}}>08h30</Text>
        <Text style={{ color : '#ffffff' , marginVertical : 10 }}>10-7-2023</Text>
      </View>
      <View style={styles.decripsion}>
        <Text style={{ color :'#1668c7', fontWeight : '700' }}>Hội ý Ban Giám đốc ĐHĐN</Text>
        <Text>Thành Phần</Text>
        <Text>-Như trên;</Text>
        <Text>-Mời : Chánh VP ĐHĐN; Trưởng các ban: TCCB, ĐT; Phó Trưởng Ban phụ trách Ban KHTC</Text>
        <View style={{  width: '100%', height: 1,backgroundColor: 'black',marginTop : 5  }} />
        <Text style={{ fontWeight :'600', marginVertical : 5 }}>Phòng họp 2 Khu A - 41 Lê Duẩn</Text>
      </View>
    </View>
  )
}

export default WeekEvent

const styles = StyleSheet.create({
    displaycontainer : {
        flexDirection :'row',
        width :'100%',
        paddingVertical : 8,
    },
    time: {
        backgroundColor : '#1668c7',
        justifyContent :'center',
        alignItems : 'center',
        borderBottomLeftRadius : 10,
        borderTopLeftRadius : 10,
        paddingVertical : 10,
        paddingHorizontal : 10,
        width : '30%'
    }, 
    decripsion : { 
        backgroundColor : '#ffffff',
        paddingVertical : 10,
        paddingHorizontal : 10,
        width :'70%',
        borderBottomRightRadius : 10,
        borderTopRightRadius : 10,
    }
})