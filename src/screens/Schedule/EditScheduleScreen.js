import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';

const address = ["Hội trường - 41 Lê Duẩn", "Phòng 0804 Khu B - 41 Lê Duẩn", "Phòng 0805 - 41 Lê Duẩn", "Phòng 0806 Khu B - 41 Lê Duẩn", "Phòng 2C"];
const header = 'Đăng kí lịch';
const EditScheduleScreen = () => {
  const [selectedOption, setSelectedOption] = useState('DHDN');
  const [selectedLocation, setSelectedLocation] = useState('Chọn địa điểm'); // Default value for location dropdown

  const [isAddressDropdownOpen, setIsAddressDropdownOpen] = useState(false);
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
        <TouchableOpacity style={styles.time}>
          <Text style={{ fontSize: 16 }}>Nhấp để chọn</Text>
          <AntDesign
            name="right"
            size={20}
            color="#000000"
          />
        </TouchableOpacity>

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
            <FontAwesome name={isAddressDropdownOpen ? 'caret-up' : 'caret-down'} size={20} color="#000000" />
          )}
          dropdownStyle={styles.dropdownStyle}
          onDropdownOpen={toggleAddressDropdown}
          onDropdownClose={toggleAddressDropdown}
        />


        <Text style={styles.label}>Nội dung<Text style={{ fontSize : 16, fontWeight : 'bold', color : '#FF4444' }}>*</Text></Text>
        <TextInput name="content" placeholder='Tiếp đoàn Trường Quốc tế - Đại học Khon Kaen (Thái Lan)' multiline style={styles.input} />

        <Text style={styles.label}>Thành phần<Text style={{ fontSize : 16, fontWeight : 'bold', color : '#FF4444' }}>*</Text></Text>
        <TextInput name="content" placeholder='PGĐ. Lê Quang Sơn; đại diện lãnh đạo các Ban: HTQT, CTHSSV, KHCN&MT' multiline style={styles.input} />

        <Text style={styles.label}>Chủ trì<Text style={{ fontSize : 16, fontWeight : 'bold', color : '#FF4444' }}>*</Text></Text>
        <TextInput name="content" placeholder='PGĐ ĐHĐNPGS.TS. Lê Quang Sơn'  style={styles.input1} />

        <Text style={styles.label}>Người đăng kí </Text>
        <TextInput name="content" placeholder='Trịnh Quang Chinh' style={styles.input1} />

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
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    fontSize: 14,
    color: '#000000', 
    textAlign : 'left',
  },
  dropdownStyle: {
    backgroundColor: '#fff',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    marginTop: 5,
  },
  dropdownSelectedText: {
    fontSize: 14,
    color: '#000000', 
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
