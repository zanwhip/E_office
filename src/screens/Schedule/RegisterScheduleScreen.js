import { StyleSheet, Text, View , Modal,Image } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import WeekSchedule from '../../components/WeekSchedule';
import Calendar from '../../components/Calendar';
import moment from 'moment';
import Filter from '../../components/Filter';
import SelectDropdown from 'react-native-select-dropdown';






const date = 'Thứ hai 10/7/2023'
const hour = '14h30'
const person = 'Trinh Quang Chính'
const task = 'Tiếp đoàn Trường Quốc tế - Đại học Khon Kaen (Thái Lan)'

const type = [
  "Tất cả", "Lịch tuần ĐHĐN", "Lịch công tác lãnh đạo ĐHĐN"
];
const status = [
  "Tất cả", "Chưa duyệt", "Đã duyệt" , "Không duyệt"
];
const schedule = [
  "Tất cả", "Trùng lịch", 
];
const header = 'Đăng kí lịch tuần';
const RegisterScheduleScreen = ({navigation}) => {
  const [isCalendarModalVisible, setCalendarModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedOption, setSelectedOption] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebarFilter = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const toggleCalendarModal = () => {
    setCalendarModalVisible((prev) => !prev);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen((prevValue) => !prevValue);
  };

  
  return (
    <View style={styles.container}>
      
      <Modal transparent={true} visible={isSidebarOpen} animationType="slide" onRequestClose={toggleSidebarFilter} animationIn="slideInRight"  animationOut="slideOutRight" swipeDirection="right" onSwipeComplete={toggleSidebarFilter}>
          <View style={styles.sidebar}>
          <View style={styles.headersidebar} >
            <View style={{ flexDirection : 'row' }}>
            <View style={styles.headerIcon} />
        <Text style={styles.headerText}>Bộ lọc nâng cao</Text>
            </View>
        
            <TouchableOpacity style={styles.close} onPress={toggleSidebarFilter}>
            <Image source={require('../../assets/image/close.png')} style={styles.close} />
            </TouchableOpacity>
            </View>
            <View>
            <View style={styles.infor}>
        <Text style={styles.infortext}>Loại</Text>
        <SelectDropdown
          style={styles.dropdown}
          data={type}
          defaultButtonText="Tất cả"
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
            <Image source={require('../../assets/image/down.png')} style={{ width : 40, height : 40 }} />
          )}
          dropdownStyle={styles.dropdownStyle}
          onDropdownOpen={toggleDropdown}
          onDropdownClose={toggleDropdown}
        />
      </View>

      <View style={styles.infor}>
        <Text style={styles.infortext}>Trạng thái</Text>
        <SelectDropdown
          style={styles.dropdown}
          data={status}
          defaultButtonText="Tất cả"
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
            <Image source={require('../../assets/image/down.png')} style={{ width : 40, height : 40 }} />
          )}
          dropdownStyle={styles.dropdownStyle}
          onDropdownOpen={toggleDropdown}
          onDropdownClose={toggleDropdown}
        />
      </View>

      <View style={styles.infor}>
        <Text style={styles.infortext}>Lịch</Text>
        <SelectDropdown
          style={styles.dropdown}
          data={schedule}
          defaultButtonText="Tất cả"
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
            <Image source={require('../../assets/image/down.png')} style={{ width : 40, height : 40 }} />
          )}
          dropdownStyle={styles.dropdownStyle}
          onDropdownOpen={toggleDropdown}
          onDropdownClose={toggleDropdown}
        />
      </View>
            </View>

            <TouchableOpacity style={styles.searchButton} onPress={toggleSidebarFilter}  >
        <Text style={styles.searchButtonText}>Tìm kiếm</Text>
      </TouchableOpacity>
        </View>
        </Modal>

      <View style={styles.header}>
      <TouchableOpacity  onPress={() => navigation.goBack()}>
      <Image source={require('../../assets/image/goback.png')} style={{ width : 40, height : 40 }} />
      </TouchableOpacity>
        <View>
          <Text style={styles.textheader}>{header}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SetSchedule')}>
        <Image source={require('../../assets/image/plus.png')} style={{ width : 40, height : 40 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.filter}>
        <View style={{ flexDirection :'row' }}>
        <TouchableOpacity style={styles.calendar}  onPress={toggleCalendarModal} >
          <Text style={{ fontSize : 16, fontWeight : 'bold',  }}>Tuần 50, năm 2023</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.more} onPress={toggleSidebarFilter}   >
        <Image source={require('../../assets/image/filterblue.png')} style={{ width : 30, height : 30 }} />
        </TouchableOpacity>
        </View>
       
 {/* Calendar Modal */}
 <Modal transparent={true} visible={isCalendarModalVisible} animationType="slide" onRequestClose={toggleCalendarModal}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleCalendarModal}>
            <Image source={require('../../assets/image/close.png')} style={{ width : 40, height : 40, marginLeft : '90%' }} />
             
            </TouchableOpacity>
            <View style={styles.calendarContainer}>
              <Calendar currentDate={selectedDate.format('YYYY-MM-DD')} selectedDate={selectedDate.format('YYYY-MM-DD')} />
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.displayschedule}>
      <Text style={{ paddingBottom : 10,fontSize : 16, fontWeight : 'bold',  }}>Lịch tuần Đại Học Đả Nẵng - Tuần 50</Text>
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
  headerIcon: {
    width: 20,
    backgroundColor: '#1668C7',
    borderRadius: 5,
  },
  headersidebar : {
   height : 120,
   flexDirection :'row',
   justifyContent : 'space-between'
  },
  headerIcon : {
    marginTop : 80,
    backgroundColor : '#1668c7',
    height : 40,
    width : 20,
    marginHorizontal : 10,
    borderRadius : 8,
  },
  headerText : {
    marginTop : 90,
    fontSize : 22,
    fontWeight :'700',
  
  },
  close : {
    marginTop : 70,
    borderRadius : 50,
    width : 50,
    height : 50,
    paddingHorizontal : 12,
    paddingVertical : 5,
    backgroundColor : '#BBBBBB'
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
  
  dropdownButton: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#B8B8B8',
    borderWidth: 0.5,
    height: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
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
  },
  
sidebarModal: {
  margin: 0,
  
  justifyContent: 'flex-end',
  width : '100%',
  //marginLeft : '30%',

},
sidebar: {
  flex: 1, 
  
  width: '100%',
  height: '100%',
  backgroundColor: '#ffffff',
},
infor: {
  backgroundColor: '#fff',
  paddingTop: 10,
  paddingHorizontal: 10,
},
infortext: {
  fontSize: 18,
  fontWeight: '400',
  marginLeft: 5,
},
dropdown: {
  justifyContent : 'flex-start',
  alignItems : 'flex-start'
},
searchButton: {
  width: '90%',
  height: 50,
  marginHorizontal : '5%',
  backgroundColor: '#1668c7',
  borderRadius: 10,
  marginTop: '100%',
  justifyContent: 'center',
},
searchButtonText: {
  color: '#ffffff',
  fontWeight: '700',
  textAlign: 'center',
},
});
