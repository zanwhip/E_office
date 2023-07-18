import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { color } from 'react-native-reanimated';



const Documentary = ({status}) => {
  let dotColor = '';
  let displayStatus = '';

  // Xác định màu sắc dựa trên trạng thái
  switch (status) {
    case 'A':
      dotColor = '#1EDC26';
      displayStatus = 'Đã xử lí';
      break;
    case 'B':
      dotColor = '#F29100';
      displayStatus = 'Đang xử lí';
      break;
    case 'C':
      dotColor = '#AAAAAA';
      displayStatus = 'Chưa xử lí';
      break;
    default:
      dotColor = '#AAAAAA';
      break;
  }

  return (
    <View style={styles.documentarycontainer}>
      <View style={styles.title}> 
        <Text style={styles.documental}>Công văn</Text>
      </View>
      <View style={styles.titledisplay}>
        <Text style={styles.namenotice}>P test gửi mail cảnh báo sắp hết hạn xử lý</Text>
        <View style={styles.description}>
        <Text style={styles.date}>30/07/2021</Text>
        <View style={{ flexDirection : 'row' }}>
        <Entypo 
            name="dot-single"
            size={40}
            style={{ color : dotColor , top  : '15%', marginRight : 0  }}/>
        <Text style={{  fontSize : 14, alignItems :'center',  top :'27%', color : dotColor }}>{displayStatus}</Text>
        </View>
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
        borderWidth : 0.5,
        marginVertical : 5,

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
    titledisplay : {
        paddingHorizontal : 10,

    },
    namenotice : {
        fontSize : 18,
        fontWeight : '200',

    },
    date : {
       // right : 0,
       marginTop : '8%',
        fontStyle : 'italic',
        

    },
  
    description : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
})