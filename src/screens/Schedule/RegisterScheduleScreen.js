import { StyleSheet, Text, View , Modal } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
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
        <Ionicons
          name="arrow-back-outline"
          size={20}
          color="#ffffff"
          style={{ left: 10 }}
          onPress={() => navigation.goBack()}
        />
        <View>
          <Text style={styles.textheader}>{header}</Text>
        </View>
        <TouchableOpacity>
          <Feather name="plus" size={30} color="#ffffff" style={{}} onPress={() => navigation.navigate('SetSchedule')} />
        </TouchableOpacity>
      </View>

      <View style={styles.filter}>
        <TouchableOpacity style={styles.calendar}  onPress={toggleCalendarModal} >
          <Text style={{ fontSize : 18, fontWeight : 'bold',  }}>Tuần 50, năm 2023</Text>
        </TouchableOpacity>

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

        <View style={styles.dropdownContainer}>
          <SelectDropdown
            data={type}
            defaultButtonText="Loại"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={isTypeDropdownOpen ? styles.activeDropdownButton : styles.dropdownButton}
            buttonTextStyle={isTypeDropdownOpen ? styles.activeDropdownButtonText : styles.dropdownButtonText}
            renderDropdownIcon={() => (
              <FontAwesome name={isTypeDropdownOpen ? 'caret-up' : 'caret-down'} size={20} color="#ffffff" />
            )}
            dropdownStyle={styles.dropdownStyle}
            onDropdownOpen={toggleTypeDropdown}
            onDropdownClose={toggleTypeDropdown}
          />
          <SelectDropdown
            data={status}
            defaultButtonText="Trạng thái"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={isStatusDropdownOpen ? styles.activeDropdownButton : styles.dropdownButton}
            buttonTextStyle={isStatusDropdownOpen ? styles.activeDropdownButtonText : styles.dropdownButtonText}
            renderDropdownIcon={() => (
              <FontAwesome name={isStatusDropdownOpen ? 'caret-up' : 'caret-down'} size={20} color="#ffffff" />
            )}
            dropdownStyle={styles.dropdownStyle}
            onDropdownOpen={toggleStatusDropdown}
            onDropdownClose={toggleStatusDropdown}
          />
          <SelectDropdown
            data={schedule}
            defaultButtonText="Lịch"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={isScheduleDropdownOpen ? styles.activeDropdownButton : styles.dropdownButton}
            buttonTextStyle={isScheduleDropdownOpen ? styles.activeDropdownButtonText : styles.dropdownButtonText}
            renderDropdownIcon={() => (
              <FontAwesome name={isScheduleDropdownOpen ? 'caret-up' : 'caret-down'} size={20} color="#ffffff" />
            )}
            dropdownStyle={styles.dropdownStyle}
            onDropdownOpen={toggleScheduleDropdown}
            onDropdownClose={toggleScheduleDropdown}
          />
        </View>
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
    width: '90%',
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 10,
    alignItems : 'center', 
    justifyContent : 'center'
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
