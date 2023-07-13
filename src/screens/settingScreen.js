import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
         <View style={styles.header}>
    <Ionicons 
    name="arrow-back-outline"
    size={20}
    color='#ffffff'
    onPress={() => navigation.goBack()}
    />
    <Text style={styles.textheader}>Các văn bản</Text>
     </View>
        <View style={styles.banner}>
        <Image source={require('../assets/image/setting.png')} style={styles.image} />
        </View>

        <View style={styles.adjustmentsdisplay}>
            <View style={styles.adjustments}>
            <Ionicons 
                name="language"
                size={25}
                style={{ marginLeft : 10, marginTop : 10 }}
                />
                <View style={{width : '80%', paddingHorizontal : 20,  }}>
                    <Text style={{ fontSize : 20, fontWeight : 'bold' }}>Ngôn ngữ</Text>
                    <Text  style={{ fontSize : 16, fontWeight : '400', marginTop : 10 }}>Tiếng việt</Text>
                </View>
                <EvilIcons 
                name="chevron-right"
                size={20}
                style={{ marginLeft : 10, marginTop : 25 }}
                />
            </View>
            <View style={styles.adjustments}>
            <EvilIcons 
                name="bell"
                size={25}
                style={{ marginLeft : 10, marginTop : 10 }}
                />
                <View style={{width : '80%', paddingHorizontal : 20,  }}>
                    <Text style={{ fontSize : 20, fontWeight : 'bold' }}>Thông báo</Text>
                    <Text  style={{ fontSize : 16, fontWeight : '400', marginTop : 10 }}>Rung</Text>
                </View>
                <EvilIcons 
                name="chevron-right"
                size={20}
                style={{ marginLeft : 10, marginTop : 25 }}
                />
            </View>
            <View style={styles.adjustments}>
            <EvilIcons 
                name="spinner"
                size={25}
                style={{ marginLeft : 10, marginTop : 10 }}
                />
                <View style={{width : '80%', paddingHorizontal : 20,  }}>
                    <Text style={{ fontSize : 20, fontWeight : 'bold' }}>Giao diện</Text>
                    <Text  style={{ fontSize : 16, fontWeight : '400', marginTop : 10 }}>Sáng</Text>
                </View>
                <EvilIcons 
                name="chevron-right"
                size={20}
                style={{ marginLeft : 10, marginTop : 25 }}
                />
            </View>
        </View>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
    container : {
    flex: 1,
    backgroundColor: '#EEEEEE',
    
},
header : {
  flexDirection : 'row',
  width : '100%',
  height : 60,
  backgroundColor : '#1668C7',
  top : 0,
  paddingTop : 20,
  alignContent : 'center',
  //paddingHorizontal : 10,

},
textheader : {
  fontSize : 22,
  color : '#ffffff',
  fontWeight : 'bold',
  marginLeft : 80,
  
},
    banner : {
        width : '100%',
        height : 250,
        backgroundColor : '#1668C7',
        borderBottomRightRadius : 20,
        borderBottomLeftRadius : 20,
        alignContent : 'center',
        alignItems: 'center',
        

    },
    image : {
        width : 224,
        height : 235,

    },
    adjustmentsdisplay : {
        width : '100%',
        height : '100%',
        backgroundColor : '#EEEEEE',
        marginTop : 25,
    },
    adjustments : {
        flexDirection : 'row',
        marginTop : 10,
        width : '100%',
        height : 66,
        backgroundColor : '#FFFFFF'
    }
})