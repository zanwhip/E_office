import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header';


import SelectDropdown from 'react-native-select-dropdown';
const header = 'Sửa báo cáo'
const status = ["Đang xử lí","Đã xử lí", "Chưa xử lí"  ];


const EditDetailReportScreen = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen((prevValue) => !prevValue);
      };
    
  return (
    <View  style={styles.container}>
        <Header header={header} />
        <ScrollView style = {styles.displaycontainer}>
        <Text style={styles.typetext}>Người báo cáo</Text>
        <TextInput name="reporter" placeholder='Nhập thông tin' multiline style={styles.input} />
        <Text style={styles.typetext}>Nội dung công việc</Text>
        <TextInput name="content" placeholder='Nhập thông tin' multiline style={styles.input1} />

        <Text style={styles.typetext}>Trạng thái công việc</Text>
        <SelectDropdown
          style={styles.dropdown}
          data={status}
          defaultButtonText="Đang xử lý"
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdownButton}
          buttonTextStyle={styles.dropdownButtonText}
          renderDropdownIcon={() => (
              <Image source={require('../../assets/image/drop_down.png')} style={{ width : 30, height : 30,  }} />
                      )}
          dropdownStyle={styles.dropdownStyle}
          onDropdownOpen={toggleDropdown}
          onDropdownClose={toggleDropdown}
        />
        <Text style={styles.typetext}>Tiến độ công việc %</Text>
        <TextInput name="reporter" placeholder='Nhập thông tin' multiline style={styles.input} />
        <Text style={styles.typetext}>Nội dung báo cáo</Text>
        <TextInput name="content" placeholder='Nhập thông tin' multiline style={styles.input1} />
     </ScrollView>
  
     <TouchableOpacity style={styles.buttonforward} >
        <Text style={styles.textforward}>Lưu thay đổi</Text>
      </TouchableOpacity>
     </View>
 
  )
}

export default EditDetailReportScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    displaycontainer : {
        paddingHorizontal : 20,
        paddingVertical : 20,
    }, input : {
        width : '100%',
        height : 45,
        borderRadius : 8,
        borderWidth : 0.5,
        backgroundColor : '#FFFFFF',
        marginBottom : 20,
        paddingHorizontal : 10,
        
      },
    input1 : {
        width : '100%',
        height : 100,
        borderRadius : 8,
        borderWidth : 0.5,
        backgroundColor : '#FFFFFF',
        marginBottom : 20,
        paddingHorizontal : 10,
        
      },
      typetext : {
        color : '#000000',
        fontSize : 16,
        fontWeight : 'bold',
        letterSpacing : 0.2,
        paddingVertical : 10,
      
      },
      
  dropdown: {
    borderRadius: 10,
  },
  closeButton: {
    width : 30,
    height : 30,
    borderRadius : 10,
    position: 'absolute',
    top: 150,
    right: 10,
  },
  dropdownButton: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#B8B8B8',
    borderWidth: 0.5,
    height: 50,
    paddingHorizontal: 10,
    
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#000000',
    
  },
  dropdownStyle: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    marginTop: 5,
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
})