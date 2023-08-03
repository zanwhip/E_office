import { StyleSheet, Text, View , Modal,Image } from 'react-native';
import React, { useState } from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import { TouchableOpacity } from 'react-native';
import WeekSchedule from '../../components/WeekSchedule';
import Calendar from '../../components/Calendar';
import moment from 'moment';






const type = ['Tất cả', 'ĐHĐN', 'Cơ quan'];
const status = ['Tất cả', 'ĐHĐN', 'Cơ quan'];
const schedule = ['Tất cả', 'ĐHĐN', 'Cơ quan'];

const date = 'Thứ hai 10/7/2023'
const hour = '14h30'
const person = 'Trinh Quang Chính'
const task = 'Tiếp đoàn Trường Quốc tế - Đại học Khon Kaen (Thái Lan)'


const header = 'Đăng kí lịch tuần';
const RegisterScheduleScreen = ({navigation}) => {
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isScheduleDropdownOpen, setIsScheduleDropdownOpen] = useState(false);
  const [isCalendarModalVisible, setCalendarModalVisible] = useState(false);
   const [isSidebarVisible, setSidebarVisibility] = useState(false);
const [selectedDate, setSelectedDate] = useState(moment());
  const toggleTypeDropdown = () => {
    setIsTypeDropdownOpen((prevValue) => !prevValue);
  };
  const toggleCalendarModal = () => {
    setCalendarModalVisible((prev) => !prev);
  };

  const toggleStatusDropdown = () => {
    setIsStatusDropdownOpen((prevValue) => !prevValue);
  };

  const toggleScheduleDropdown = () => {
    setIsScheduleDropdownOpen((prevValue) => !prevValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity  onPress={() => navigation.goBack()}>
      <Image source={require('../../assets/image/goback.png')} style={{ width : 40, height : 40 }} />
      </TouchableOpacity>
        <View>
          <Text style={styles.textheader}>{header}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SetSchedule')}>
        <Image source={require('../../assets/image/plus.png')} style={{ width : 50, height : 50 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.filter}>
        <View style={{ flexDirection :'row' }}>
        <TouchableOpacity style={styles.calendar}  onPress={toggleCalendarModal} >
          <Text style={{ fontSize : 18, fontWeight : 'bold',  }}>Tuần 50, năm 2023</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.more}   >
        <Image source={require('../../assets/image/filterblue.png')} style={{ width : 30, height : 30 }} />
        </TouchableOpacity>
        </View>
       
 {/* Calendar Modal */}
 <Modal transparent={true} visible={isCalendarModalVisible} animationType="slide" onRequestClose={toggleCalendarModal}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleCalendarModal}>
              <Octicons name="x" size={30} color="#ffffff" />
            </TouchableOpacity>
            <View style={styles.calendarContainer}>
              <Calendar currentDate={selectedDate.format('YYYY-MM-DD')} selectedDate={selectedDate.format('YYYY-MM-DD')} />
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.displayschedule}>
      <Text style={{ paddingBottom : 10,fontSize : 18, fontWeight : 'bold',  }}>Lịch tuần Đại Học Đả Nẵng - Tuần 50</Text>
        <WeekSchedule date={date} hour={hour} person={person} task={task} status={'A'} />
        <WeekSchedule date={date} hour={hour} person={person} task={task} status={'B'} />
        <WeekSchedule date={date} hour={hour} person={person} task={task} status={'A'} />
      </View>
    </View>
  );
};

export default RegisterScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: '#1668C7',
    paddingTop: 40,
    alignContent: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  textheader: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  
  filter: {
    width: '100%',
    backgroundColor: '#1668c7',
    paddingHorizontal: 19,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendar: {
    width: '75%',
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 10,
    alignItems : 'center', 
    justifyContent : 'center',
    marginHorizontal : 10,
  },
  more: {
    width: '15%',
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 10,
    alignItems : 'center', 
    justifyContent : 'center',
    marginHorizontal : 10,
  },
  
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '90%',
  },
  
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarContainer: {
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownButton: {
    width: '30%',
    backgroundColor: '#1668c7', // Blue background when not selected
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  activeDropdownButton: {
    width: '30%',
    backgroundColor: '#fff', // White background when selected
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  dropdownButtonText: {
    fontSize: 14,
    color: '#ffffff', // White text when not selected
    textAlign: 'center',
  },
  activeDropdownButtonText: {
    fontSize: 14,
    color: '#1668c7', // Blue text when selected
    textAlign: 'center',
  },
  dropdownStyle: {
    backgroundColor: '#fff',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,
    width: '30%',
    marginTop: 5,
  },
  displayschedule : {
    paddingHorizontal : 10,
    paddingVertical : 10,
    justifyContent: 'center',
    alignItems :'center'
  },
  taskcontainer : {
    width : '100%',
     height : 160,
    // backgroundColor : '#000000',
   // borderRadius : 10
   flexDirection : 'row'
  },
  timecontainer : {
    backgroundColor : '#1668C7',
    width : '28%',
    borderTopLeftRadius : 10, 
    borderBottomLeftRadius : 10,
    height : '100%',
    
  },
  taskcontentcontainer : {
    backgroundColor : '#ffffff',
    borderBottomRightRadius : 10,
    borderTopRightRadius : 10,
    height :'100%',
    width :'72%'
  }
});
