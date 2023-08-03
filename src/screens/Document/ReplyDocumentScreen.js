import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; // Thêm thư viện


const header = 'Phản hồi email';

const ReplyDocumentScreen = ({navigation}) => {
  const handleSendButtonPress = () => {
    // Display the alert when the "Gửi" (Send) button is pressed
    Alert.alert(
      'Xác nhận',
      'Bạn có muốn gửi email phản hồi?',
      [
        {
          text: 'Hủy',
          onPress: () => console.log('Hủy Pressed'),
          style: 'cancel',
        },
        {
          text: 'Đồng ý',
          onPress: () => {
            // Perform the action for "Đồng ý" (OK) here.
            // For example, you can trigger the email sending logic.
            // This can be an API call or any other action you want to perform.
            navigation.navigate('DocumentDetail')
            console.log('Đồng ý Pressed');
            // Add your email sending logic here...
          },
        },
      ],
      { cancelable: false } // Prevent tapping outside of the alert to dismiss it
    );
  };

  return (
    <View style={styles.container}>
      <Header header={header} />
      <KeyboardAwareScrollView >
        <View style={styles.displaycontainer}>
          <View style={styles.infor}>
            <Text style={styles.infortext1}>Tên người gửi</Text>
            <Text style={styles.infortext2}>Ths. Nguyễn Đức Tiến</Text>
          </View>
          <View style={styles.infor}>
            <Text style={styles.infortext1}>Phòng, Ban, Khoa...</Text>
            <Text style={styles.infortext2}>Ths. Nguyễn Đức Tiến</Text>
          </View>
          <View>
            <Text style={styles.infortext1}>Email</Text>
            <Text style={styles.infortext2}>nqphi@sdc.udn.vn</Text>
          </View>
        </View>

        <View style={styles.inputcontainer}>
          <Text style={styles.infortext1}>Nhập nội dung phản hồi</Text>
          <TextInput name="content" multiline placeholder="Nhập văn bản..." style={styles.input} />
        </View>
        
      </KeyboardAwareScrollView>

      <TouchableOpacity style={styles.buttonforward} onPress={handleSendButtonPress}>
        <Text style={styles.textforward}>Gửi</Text>
      </TouchableOpacity>
       
      
    </View>
  );
};

export default ReplyDocumentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  displaycontainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  infor: {
    borderBottomWidth: 1,
  },
  infortext1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  infortext2: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  inputcontainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    top: 0,
  },
  input: {
    width: '100%',
    height: 130,
    borderRadius: 10,
    borderWidth: 0.5,
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  placeholderContainer: {
    marginBottom: 10,
  },
  placeholderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonforward: {
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
  textforward: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
