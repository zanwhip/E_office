import { StyleSheet, Text, View, TouchableOpacity,Modal, Image } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import WeekDay from '../../components/WeekDay';

const address = ["Hội trường - 41 Lê Duẩn", "Phòng 0804 Khu B - 41 Lê Duẩn", "Phòng 0805 - 41 Lê Duẩn", "Phòng 0806 Khu B - 41 Lê Duẩn", "Phòng 2C"];
const header = 'Sửa lịch';
const EditScheduleScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('Chọn địa điểm'); // Default value for location dropdown
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const [isAddressDropdownOpen, setIsAddressDropdownOpen] = useState(false);
  const [isCalendarModalVisible, setCalendarModalVisible] = useState(false);
  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    toggleAddressDropdown(); // Close the dropdown after selecting a location
  };
  const toggleAddressDropdown = () => {
    setIsAddressDropdownOpen((prevValue) => !prevValue);
  };
  const toggleCalendarModal = () => {
    setCalendarModalVisible((prev) => !prev);
  };
  const showSidebar = () => {
    setSidebarVisibility(true);
  };
  const CustomRowText = ({ item }) => {
    return <Text style={styles.dropdownSelectedText}>{item}</Text>;
  };

  return (
    <View style={styles.container}>
      <Header header={header} />
      <ScrollView style={styles.form}>
        <Text style={styles.label}>Loại</Text>
        <View style={styles.type}>
          <TouchableOpacity
            style={[styles.checkbox, selectedOption === 'DHDN' && styles.selectedCheckbox]}
            onPress={() => handleOptionPress('DHDN')}
          >
            {selectedOption === 'DHDN' && <View style={styles.checkboxInner} />}
          </TouchableOpacity>
          <Text>Lịch tuần công tác lãnh đạo Đại Học Đà Nẵng</Text>
        </View>
        <View style={styles.type}>
          <TouchableOpacity
            style={[styles.checkbox, selectedOption === 'organ' && styles.selectedCheckbox]}
            onPress={() => handleOptionPress('organ')}
          >
            {selectedOption === 'organ' && <View style={styles.checkboxInner} />}
          </TouchableOpacity>
          <Text>Lịch tuần Đại Học Đà Nẵng</Text>
        </View>

        <Text style={styles.label}>Thời gian<Text style={{ fontSize : 16, fontWeight : 'bold', color : '#FF4444' }}>*</Text></Text>
        <TouchableOpacity style={styles.time} onPress={toggleCalendarModal}>
          <Text style={{ fontSize: 16 }}>Nhấp để chọn</Text>
          <Image source={require('../../assets/image/right.png')} style={{ width : 40, height : 40 }} />
        </TouchableOpacity>
        <Modal transparent={true} visible={isCalendarModalVisible} animationType="slide" onRequestClose={toggleCalendarModal}>
          <View style={styles.modalContainer}>
          
            <View style={styles.calendarContainer}>
              <WeekDay />
              <TouchableOpacity
           style={{
            width: '100%',
            backgroundColor: '#fff',
            height: 50,
            justifyContent: 'center',
            paddingHorizontal: '44%',
             borderRadius: 10,
          }}
          onPress={toggleCalendarModal}
           >
          <Text style={{ fontSize: 17, color: '#000000', fontWeight: '500',marginVertical : '30%', }}> Hủy</Text>
        </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Text style={styles.label}>Địa điểm<Text style={{ fontSize : 16, fontWeight : 'bold', color : '#FF4444' }}>*</Text></Text>
        <SelectDropdown
          data={address}
          defaultButtonText={selectedLocation}
          onSelect={(selectedItem, index) => {
            handleLocationChange(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          customRowTextComponent={CustomRowText} // Use the custom component to render the selected value
          buttonStyle={isAddressDropdownOpen ? styles.activeDropdownButton : styles.dropdownButton}
          buttonTextStyle={isAddressDropdownOpen ? styles.activeDropdownButtonText : styles.dropdownButtonText}
          renderDropdownIcon={() => (
            <Image source={require('../../assets/image/dropdown.png')} style={{ width : 25, height : 25 }} />
          )}
          dropdownStyle={styles.dropdownStyle}
          onDropdownOpen={toggleAddressDropdown}
          onDropdownClose={toggleAddressDropdown}
        />


        <Text style={styles.label}>Nội dung<Text style={{ fontSize : 16, fontWeight : 'bold', color : '#FF4444' }}>*</Text></Text>
        <TextInput name="content" placeholder='Nhập thông tin...' multiline style={styles.input} />

        <Text style={styles.label}>Thành phần<Text style={{ fontSize : 16, fontWeight : 'bold', color : '#FF4444' }}>*</Text></Text>
        <TextInput name="content" placeholder='Nhập thông tin...' multiline style={styles.input} />

        <Text style={styles.label}>Chủ trì<Text style={{ fontSize : 16, fontWeight : 'bold', color : '#FF4444' }}>*</Text></Text>
        <TextInput name="content" placeholder='Nhập thông tin...'  style={styles.input1} />

        <Text style={styles.label}>Người đăng kí </Text>
        <TextInput name="content" placeholder='Nhập thông tin...' style={styles.input1} />

        <Text style={styles.label}>Số điện thoại<Text style={{ fontSize : 16, fontWeight : 'bold', color : '#FF4444' }}>*</Text></Text>
        <TextInput name="content" placeholder='Nhập thông tin...'  style={styles.input1} />

        <Text style={styles.label}>Số người tham gia</Text>
        <TextInput name="content" placeholder='Nhập thông tin...'  style={styles.input1} />

        <Text style={styles.label}>Đơn vị </Text>
        <TextInput name="content" placeholder='Nhập thông tin...'  style={styles.input1} />

        <Text style={styles.label}>Email<Text style={{ fontSize : 16, fontWeight : 'bold', color : '#FF4444' }}>*</Text> </Text>
        <TextInput name="content" placeholder='Nhập thông tin...'  style={styles.input1} />

        <View style={styles.button}>
          <Text style={styles.buttontext}>Lưu thay đổi</Text>
        </View>
        <View style={{ height : 40 }}></View>
      </ScrollView>
    </View>
  );
};

export default EditScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  form: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  type: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  selectedCheckbox: {
    backgroundColor: '#fff',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#1668c7',
  },
  time: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    alignItems : 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  dropdownContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: '90%',
  },
  dropdownButton: {
    width: '100%',
    backgroundColor: '#fff', 
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 8,
  },
  activeDropdownButton: {
    width: '100%',
    backgroundColor: '#fff', 
    borderRadius: 10,
    marginVertical: 10,
     paddingHorizontal: 10,
      paddingVertical: 8,
   // textAlign : 'left',
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#000000', 
    fontWeight : '400',
    textAlign : 'left',
  },
  activeDropdownButtonText: {
    fontSize: 16,
    color: '#000000', 
    textAlign : 'left',
  },
  dropdownStyle: {
    backgroundColor: '#fff',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    textAlign : 'left',
    marginTop: 5,
  },
  
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  calendarContainer: {
   // backgroundColor: 'white',
    width: '80%',
    height: '50%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownSelectedText: {
    fontSize: 14,
    color: '#000000', 
    textAlign : 'left',
  },
  input : {
    width : '100%',
    height : 100,
    borderRadius : 10,
    borderWidth : 0.5,
    borderColor :'#BBBBBB',
    backgroundColor : '#FFFFFF',
    marginBottom : 20,
    paddingHorizontal : 10,
    marginVertical: 10,
  },
  input1 : {
    width : '100%',
    height : 50,
    borderRadius : 10,
    borderColor :'#BBBBBB',
    borderWidth : 0.5,
    backgroundColor : '#FFFFFF',
    marginBottom : 20,
    paddingHorizontal : 10,
    marginVertical: 10,
  },
  button : {
    width : '100%',
    height : 60,
    backgroundColor : '#1668c7',
    borderRadius : 10,
    alignItems :'center',
    justifyContent :'center'
  }, 
  buttontext : {
    fontSize : 18,
    fontWeight :'bold',
    color : '#ffffff'
  },
  label :{
    fontSize : 16,
    fontWeight : '700'
  }
});
