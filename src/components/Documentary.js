import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Documentary = () => {
  return (
    <View style={styles.documentarycontainer}>
      <View style={styles.title}> 
        <Text>Công văn</Text>
      </View>
      <View style={styles.titledisplay}>
        <Text style={styles.namenotice}>P test gửi mail cảnh báo sắp hết hạn xử lý</Text>
        <View style={styles.description}>
        <Text style={styles.date}>30/07/2021</Text>
        <Text style={styles.status}>Chưa xử lý</Text>
        </View>
      </View>
    </View>
  )
}

export default Documentary

const styles = StyleSheet.create({
    documentarycontainer : {
        width : '100%',
        height : 105,
        borderRadius : 10,
      backgroundColor  : '#ffffff',
        borderWidth : 0.5

    },
    title : {
        backgroundColor : '#EEEEEE',
        height : 30,
        paddingHorizontal : 20, 
        width : '100%',
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
    },
    titledisplay : {
        paddingHorizontal : 10,

    },
    namenotice : {
        fontSize : 18,
        fontWeight : '200',

    },
    date : {
       // right : 0,
        fontStyle : 'italic',
        

    },
    status :{
        fontSize : 14,
        marginLeft : 0,

    },
    description : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
})