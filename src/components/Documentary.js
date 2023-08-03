import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Documentary = ({status}) => {
  let dotColor = '';
  let displayStatus = '';


  const navigation = useNavigation();
    const handleNavigate = () => {
        navigation.navigate('DocumentDetail');
      };

       let dotImageSource = require('../assets/image/dotgray.png'); // Mặc định dotImage là ccc.png
      let Colortext = null
  // Xác định màu sắc dựa trên trạng thái
  switch (status) {
    case 'A':
    Colortext = '#1EDC26';
    dotImageSource = require('../assets/image/dotgreen.png');
    break;
    case 'B':
       Colortext = '#DB6A18';
      dotImageSource = require('../assets/image/dotorange.png');
      break;
    case 'C':
      Colortext = '#AAAAAA';
      dotImageSource = require('../assets/image/dotgray.png');
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
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
           
            <Image source={dotImageSource} style={{ width: 10, height: 10, alignItems: 'center', left: 0, marginHorizontal : 10 }} />
            <Text style={{ fontSize: 14, alignItems: 'center', marginRight: 5, marginVertical: 11 , color : Colortext}}>
              {status === 'A' ? 'Đã xử lí' : status === 'B' ? 'Đang xử lí' :  status === 'C' ? 'Chưa xử lí' : ''}
            </Text>
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