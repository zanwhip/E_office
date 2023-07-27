import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { color } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Documentary = ({status}) => {
  let dotColor = '';
  let displayStatus = '';


  const navigation = useNavigation();
    const handleNavigate = () => {
        navigation.navigate('DocumentDetail');
      };

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
      dotColor = '#ffffff';
      break;
  }

  return (
    <TouchableOpacity 
    style={styles.documentarycontainer}
    onPress={handleNavigate}
    >
      <View style={styles.title}> 
        <Text style={styles.documental}>1598</Text>
      </View>
      <View style={styles.titledisplay}>
        <Text style={styles.namenotice}>Tờ trình về việc phê duyệt kế hoạch đào tạo năm học 2023 - 2024 của Viện Nghiên cứu và Đào tạo Việt - Anh</Text>
        <Text style={{ color : '#B8B8B8', fontSize : 18,  }}>247/TTr-VNCĐTVA</Text>
        <View style={styles.description}>
        <Text style={styles.date}>30/07/2021</Text>
        <View style={{ flexDirection : 'row' }}>
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

export default Documentary

const styles = StyleSheet.create({
    documentarycontainer : {
        width : '100%',
        //height : 105,
        borderRadius : 10,
      backgroundColor  : '#ffffff',
      borderColor : '#EEEEEE',
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
        fontWeight : '400',

    },
    date : {
       // right : 0,
       marginTop : '4%',
        fontStyle : 'italic',
        

    },
  
    description : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
})