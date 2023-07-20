import { StyleSheet, Text, View, TextInput,  Alert  } from 'react-native'
import React from 'react'
import Header from '../../components/Header';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const header = 'Phản hồi email'


const showAlert = () => {
    Alert.alert(
      //'Bạn có muốn gửi email phản hồi ',
      'Bạn có muốn gửi email phản hồi ',
      [
        {
          text: 'Hủy',
          onPress: () => {
            // Xử lý khi lựa chọn A
            console.log('Bạn đã chọn A');
            // Đóng alert
          },
        },
        {
          text: 'Xác nhận',
          onPress: () => {
            // Xử lý khi lựa chọn B
            console.log('Bạn đã chọn B');
            // Chuyển về trang trước đó
            navigation.navigate('Noticedetail')
          },
        },
      ],
     
    );
  };


const ReplyEmailScreen = () => {
  return (
    <View style={styles.container}>
     <Header header={header} />
     <ScrollView >
        <View style={styles.displaycontainer}>
        <View style={styles.infor}>
        <Text style={styles.infortext1}>Tên người gửi</Text>
        <Text style={styles.infortext2}>Ths. Nguyễn Đức Tiến</Text>
        </View>
        <View style={styles.infor}>
        <Text style={styles.infortext1}>Phòng, Ban, Khoa...</Text>
        <Text style={styles.infortext2} >Ths. Nguyễn Đức Tiến</Text>
        </View>
        <View >
        <Text style={styles.infortext1}>Email</Text>
        <Text style={styles.infortext2} >nqphi@sdc.udn.vn</Text>
        </View>
        </View>

        <View style={styles.inputcontainer}>
            <Text style={styles.infortext1} >Nhập nôi dung phản hồi</Text>
            <TextInput name="content" placeholder='Nhập văn bản...' style={styles.input} />
        </View>
     </ScrollView>
     
     <TouchableOpacity 
     style={styles.buttonforward}
    //  onPress={handleOpenLink}
    onPress={showAlert}  
     >
     <Text style={styles.textforward}>Gửi</Text>
     </TouchableOpacity>

    </View>
  )
}

export default ReplyEmailScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#e3e3e3',
    },
    displaycontainer :{
        paddingHorizontal : 10,
        paddingVertical : 20,
        borderRadius : 10,
        backgroundColor :'#ffffff',
        marginHorizontal : 20,
        marginVertical : 20 
    },
    infor : {
        borderBottomWidth : 1,
      
    },
    infortext1 : {
        fontSize : 18,
        fontWeight :'bold',
        marginVertical : 10,
        marginHorizontal : 10   
    },
    infortext2 : {
        fontSize : 16,
        fontWeight :'400',
        marginVertical : 5,
        marginHorizontal : 10   
    },
    inputcontainer : {
        paddingHorizontal : 20,
        paddingVertical : 20
    }, 
    input : {
      width : '100%',
      height : 130,
      borderRadius : 10,
      borderWidth : 0.5,
      backgroundColor : '#FFFFFF',
      marginBottom : 10,
      paddingHorizontal : 10,
      
    },
    placeholderContainer: {
        marginBottom: 10,
      },
      placeholderText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      
  buttonforward : {
    position: 'absolute',
    bottom: 30, 
    left: '10%', 
    width: '80%',
    height: 50,
    backgroundColor: '#1668C7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textforward : {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  }

})