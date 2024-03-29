import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import { TouchableOpacity } from 'react-native';

const header = 'Cài đặt'
const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
          <Header header={header} />
        <View style={styles.banner}>
        <Image source={require('../assets/image/setting.png')} style={styles.image} />
        </View>

        <View style={styles.adjustmentsdisplay}>
            <TouchableOpacity 
            style={styles.adjustments}
            onPress={() => navigation.navigate('LanguageSetting')}
            >
            <Image source={require('../assets/image/language.png')} style={{ width : 30, height : 30 , marginHorizontal : 10, marginVertical : 20}} />
                <View style={{width : '80%', paddingHorizontal : 20,  }}>
                    <Text style={{ fontSize : 20, fontWeight : 'bold' }}>Ngôn ngữ</Text>
                    <Text  style={{ fontSize : 16, fontWeight : '400', marginTop : 10 }}>Tiếng việt</Text>
                </View>
                <Image source={require('../assets/image/right.png')} style={{ width : 30, height : 30, marginVertical : 20 }} />
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.adjustments}
             onPress={() => navigation.navigate('NoticeSetting')}
             >
            <Image source={require('../assets/image/bellnotice.png')} style={{ width : 30, height : 30 , marginHorizontal : 10, marginVertical : 20}} />
                <View style={{width : '80%', paddingHorizontal : 20,  }}>
                    <Text style={{ fontSize : 20, fontWeight : 'bold' }}>Thông báo</Text>
                    <Text  style={{ fontSize : 16, fontWeight : '400', marginTop : 10 }}>Rung</Text>
                </View>
                <Image source={require('../assets/image/right.png')} style={{ width : 30, height : 30, marginVertical : 20 }} />
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.adjustments}
             onPress={() => navigation.navigate('InterfaceSetting')}
             >
           <Image source={require('../assets/image/interface.png')} style={{ width : 30, height : 30, marginHorizontal : 10, marginVertical : 20 }} />
                <View style={{width : '80%', paddingHorizontal : 20,  }}>
                    <Text style={{ fontSize : 20, fontWeight : 'bold' }}>Giao diện</Text>
                    <Text  style={{ fontSize : 16, fontWeight : '400', marginTop : 10 }}>Sáng</Text>
                </View>
                <Image source={require('../assets/image/right.png')} style={{ width : 30, height : 30, marginVertical : 20 }} />
            </TouchableOpacity>
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