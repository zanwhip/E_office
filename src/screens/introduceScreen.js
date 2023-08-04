import { StyleSheet, Text, View, Linking, Alert, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import { TouchableOpacity } from 'react-native';

const handleOpenLink = () => {
    const url = 'https://www.udn.vn/gioi-thieu/co-cau-to-chuc'; // Thay thế URL bằng liên kết bạn muốn chuyển đến

    Alert.alert(
      'Xác nhận',
      'Bạn có muốn chuyển tới trình duyệt để xem không?',
      [
        { text: 'Hủy', style: 'cancel' },
        {
          text: 'Đồng ý',
          onPress: () => {
            Linking.openURL(url);
          },
        },
      ]
    );
  };

const handlePress = async () => {
    const url = 'https://www.udn.vn/'; 
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Không thể mở liên kết");
    }
}

const header = 'Giới thiệu UDN'
const IntroduceScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Header header={header} />

     <View  style={styles.contentcontainer}>
        <TouchableOpacity 
        style={styles.subcontentcontainer}
        onPress={() => navigation.navigate('OpenLetter')}
        >
            <Text style={styles.subcontent}>Lời ngỏ </Text>
            <Image source={require('../assets/image/right.png')} style={{ width : 40, height : 40 }} />
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.subcontentcontainer}
         onPress={() => navigation.navigate('Mission')}
         >
            <Text style={styles.subcontent}>Sứ mạng - tầm nhìn </Text>
            <Image source={require('../assets/image/right.png')} style={{ width : 40, height : 40 }} />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('History')}
        style={styles.subcontentcontainer}>
            <Text style={styles.subcontent}>Lịch sử hình thành </Text>
            <Image source={require('../assets/image/right.png')} style={{ width : 40, height : 40 }} />
        </TouchableOpacity>
        <TouchableOpacity
         onPress={handleOpenLink}
        style={styles.subcontentcontainer}>
            <Text style={styles.subcontent}>Cơ cấu tổ chức </Text>
            <Image source={require('../assets/image/right.png')} style={{ width : 40, height : 40 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.subcontentcontainer}
         onPress={() => navigation.navigate('TypicalPerson')}>

            <Text 
            style={styles.subcontent}
           
            >
                Gương mặt tiêu biểu </Text>
                <Image source={require('../assets/image/right.png')} style={{ width : 40, height : 40 }} />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={handlePress}
        style={styles.subcontentcontainer}>
            <Text style={styles.subcontent}>Website Đại Học Đà Nẵng  </Text>
            <Image source={require('../assets/image/right.png')} style={{ width : 40, height : 40 }} />

        </TouchableOpacity>

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
        marginTop : 15,
        width : '100%',
        backgroundColor : '#e3e3e3'

    },
    subcontentcontainer : {
        width : '100%',
        height : 70,
        backgroundColor : '#ffffff',
        marginTop : 5,
       
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 20,
        justifyContent : 'space-between'
        

    },
       subcontent : {
        fontSize : 20,
        fontWeight : 'bold',
        
    }


})