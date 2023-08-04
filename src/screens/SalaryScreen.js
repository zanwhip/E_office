import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal,StyleSheet, Image } from 'react-native';
import moment from 'moment';
import Header from '../components/Header'
import { ScrollView } from 'react-native';

import Month from '../components/Month';
const header = 'Xem Lương - Thuế cá nhân'


const SalaryScreen = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [isCalendarModalVisible, setCalendarModalVisible] = useState(false);
  const [selectedMonthText, setSelectedMonthText] = useState('May');
  const [selectedOption, setSelectedOption] = useState('Danh sách lương và phụ cấp')
  const handleDateSelected = (date) => {
    setSelectedDate(moment(date));
    
  };
  const getMonthInVietnamese = (englishMonth) => {
    const monthMapping = {
      'Jan': 'Tháng 1',
      'Feb': 'Tháng 2',
      'Mar': 'Tháng 3',
      'Apr': 'Tháng 4',
      'May': 'Tháng 5',
      'Jun': 'Tháng 6',
      'Jul': 'Tháng 7',
      'Aug': 'Tháng 8',
      'Sep': 'Tháng 9',
      'Oct': 'Tháng 10',
      'Nov': 'Tháng 11',
      'Dec': 'Tháng 12',
    };
   
    return monthMapping[englishMonth];
  };
  const currentWeekNumber = selectedDate.isoWeek();

  // Custom styles for Saturdays and Sundays
  const weekendStyle = { color: 'red' };

  // Function to handle left swipe
  const handleLeftSwipe = () => {
    setSelectedDate((prevDate) => moment(prevDate).add(1, 'week'));
  };
  const handleMonthSelected = (monthText) => {
    setSelectedMonthText(monthText);
    setCalendarModalVisible(false); // Close the calendar modal after selecting the month
  };
  // Function to handle right swipe
  const handleRightSwipe = () => {
    setSelectedDate((prevDate) => moment(prevDate).subtract(1, 'week'));
  };
  const handleUpdateSelectedOption = (newSelectedOption) => {
    setSelectedOption(newSelectedOption);
  };
  // Function to toggle the Calendar modal
  const toggleCalendarModal = () => {
    setCalendarModalVisible((prev) => !prev);
  };
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };


  return (
    <View style={styles.container}>
        <Modal transparent={true} visible={isCalendarModalVisible} animationType="slide" onRequestClose={toggleCalendarModal}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleCalendarModal}>
            <Image source={require('../assets/image/x.png')} style={{ width : 30, height : 30 }} />
            </TouchableOpacity>
            <View style={styles.calendarContainer}>
            <Month onMonthSelected={handleMonthSelected} isCalendarModalVisible={true} updateSelectedOption={handleUpdateSelectedOption}/>
            </View>
          </View>
        </Modal>
         <Header header={header} />
         <View style={styles.Selectcontainer}>
              <TouchableOpacity style={styles.monthpicker} onPress={toggleCalendarModal}>
              <Text style={styles.monthtext}> {getMonthInVietnamese(selectedMonthText)} năm {getCurrentYear()} </Text>
              </TouchableOpacity>
        </View>
        <View style={styles.titlecontainer}>
        <Text style={styles.title}>{selectedOption}</Text>
        </View>
        <ScrollView style={styles.displaycontainer}>
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Mã cán bộ </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>1109</Text>
          </View>
          </View>

          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Họ và tên </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>Ngô Thị Hương Giang</Text>
          </View>
          </View>

          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Lương bậc ngành </Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Hệ số</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>4.4</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>6.556.000</Text>
          </View>
          </View>
          </View>

        
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Lương hợp đồng </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text> 0 </Text>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Phụ cấp chức vụ </Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Hệ số</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>0.8</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>1.192.000</Text>
          </View>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Phụ cấp thâm niên vượt khung</Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Hệ số</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>0</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>0</Text>
          </View>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Phụ cấp thâm niên nghề </Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Tỷ lệ</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>0</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>0</Text>
          </View>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Phụ cấp ưu đãi nghề </Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Tỷ lệ</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>0</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>0</Text>
          </View>
          </View>
          </View>

          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Phụ cấp khác </Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Tỷ lệ</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>0</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>0</Text>
          </View>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Phụ cấp công tác Đảng </Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Hệ số</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>0.3</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>447.000</Text>
          </View>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Lương làm thêm </Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Hệ số</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>1</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>1.580.000</Text>
          </View>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Quản lý phí</Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>Hệ số</Text>
            </View>
            <View style={styles.unit}>
              <Text>Số tiền</Text>
            </View>            
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>6.7</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>3.350.000</Text>
          </View>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Tổng thu nhập </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>13.105.000</Text>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Lương bậc ngành </Text>
          </View>
          <View style ={styles.unitcontainer}>
            <View style={styles.unit}>
            <Text>BHXH</Text>
            </View>
            <View style={styles.unit}>
              <Text>BHTN</Text>
            </View> 
            <View style={styles.unit}>
              <Text>BHYT</Text>
            </View>  
            <View style={styles.unit}>
              <Text>KCCĐ</Text>
            </View>  
            <View style={styles.unit}>
              <Text>Tổng</Text>
            </View>             
          </View>
          <View style={styles.content}>
          <View style={styles.contentcontainer}>
            <Text>619.840</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>77.480</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>116.220</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>77.480</Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>831.390</Text>
          </View>
          </View>
          </View>

          
          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Thuế TNCN </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>532.390</Text>
          </View>
          </View>

          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Trừ tạm ứng, nợ thuế </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>0</Text>
          </View>
          </View>


          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Thực lĩnh </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>11.647.729</Text>
          </View>
          </View>

          <View style={styles.properties}>
          <View style={styles.propertiesname}>
            <Text style={styles.propertiestext}>Số TK cá nhân </Text>
          </View>
          <View style={styles.contentcontainer}>
            <Text>560100000686925</Text>
          </View>
          </View>
        </ScrollView>
    </View>
  )
}


export default SalaryScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
    },
    Selectcontainer : {
        width : '100%',
        height : 50,
        backgroundColor : '#1668C7',        
        alignItems : 'center'
    },
    monthpicker : {
      backgroundColor : '#ffffff',
      width : '90%',
      height : 40,
      borderRadius : 10,
      justifyContent : 'center',
      alignItems : 'center'
    },
    monthtext : {
      fontSize : 20,
      fontWeight : '700'
    },
    titlecontainer : {
      width : '100%',
      height : 30,
      backgroundColor : '#1668C7',   
      paddingHorizontal : '5%'
    },
    title : {
      fontSize : 16,
    color :'#ffffff',
    justifyContent : 'center',
    },
    displaycontainer : {
      paddingHorizontal : 10,
      paddingVertical : 10
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    properties : {
     // backgroundColor : "#ffffff",
      flexDirection : 'row',
      //marginVertical : 5,
      borderWidth : 0.2,
      borderColor : '#B8B8B8'
    },
    propertiesname : {
      width : '28%',
      backgroundColor : '#e4e4e4',
      paddingHorizontal : 8,
      paddingVertical : 10  ,
      //marginHorizontal : 10,
      justifyContent :'center'

    },
    
  calendarContainer: {
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
    content : {
      flexDirection : 'column',
      justifyContent :'center',
      flex: 2,
    },
    contentcontainer : {
      backgroundColor : '#ffffff',
      paddingHorizontal : 10,
      paddingVertical : 10  ,
      justifyContent :'center'
    },
    unitcontainer : {
     width : '20%',
     flex: 1,
     height : '100%',
    backgroundColor : '#eeeeee'
    },
    unit : {
      flexDirection : 'column',
      paddingHorizontal : 4,
      paddingVertical : 10,
      //width : '20%',
      flex: 1,
      height : '10%',
      backgroundColor : '#eeeeee',
      marginBottom : 1,
      //borderBottomWidth : 0.2


    },
    propertiestext : {
      fontSize : 18,
      flex: 1,
      fontWeight : '400',
      color : '#000000'
    },
    unittext : {

    }
})