import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Calendar from './Calendar'

const field = [
  "Bảo hiểm", "Cơ sở vật chất", "Công đoàn", "Công khai",
  "Đào tạo", "Đoàn thanh niên", "Dự án", "Học sinh sinh viên",
  "Hợp tác quốc tế", "Khoa học công nghệ", "Luật", "Tài chính",
  "Thi đua khen thưởng", "Tổ chức cán bộ", "Văn bản của đảng",
  "Văn bản pháp quy", "Khác"
];

const type = [
  "Nghị quyết", "Quyết định", "Chỉ thị", "Quy chế",
  "Quy định", "Thông cáo", "Thông báo", "Hướng dẫn",
  "Chương trình", "Kế hoạch", "Phương án", "Đề án",
  "Dự án", "Báo cáo", "Biên bản", "Hợp đồng", "Khác"
];

const Filter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevValue) => !prevValue);
  };

  const showSidebar = () => {
    setSidebarVisibility(true);
  };

  const hideSidebar = () => {
    setSidebarVisibility(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcon} />
        <Text style={styles.headerText}>Bộ lọc nâng cao</Text>
        <TouchableOpacity onPress={hideSidebar} >
          <Image source={require('../assets/image/cancel.png')} style={styles.cancelIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.infor}>
        <Text style={styles.infortext}>Lĩnh vực</Text>
        <SelectDropdown
          style={styles.dropdown}
          data={field}
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
            <Entypo
              name={isDropdownOpen ? 'chevron-up' : 'chevron-down'}
              size={20}
              color="#000000" />
          )}
          dropdownStyle={styles.dropdownStyle}
          onDropdownOpen={toggleDropdown}
          onDropdownClose={toggleDropdown}
        />
      </View>

      <View style={styles.infor}>
        <Text style={styles.infortext}>Loại văn bản</Text>
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
            <Entypo
              name={isDropdownOpen ? 'chevron-up' : 'chevron-down'}
              size={20}
              color="#000000" />
          )}
          dropdownStyle={styles.dropdownStyle}
          onDropdownOpen={toggleDropdown}
          onDropdownClose={toggleDropdown}
        />
      </View>

      <View style={styles.infor}>
        <Text style={styles.infortext}>Trạng thái</Text>
        <CheckBox
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          title="Chưa xử lí"
          checkedIcon={<Icon name="check-square" size={30} color="#1668C7" />}
          uncheckedIcon={<Icon name="square" size={30} color="#ffffff" style={styles.checkboxIcon} />}
          checkedTitle="Chưa xử lí"
          checked={selectedOption === 'Option A'}
          onPress={() => handleOptionSelection('Option A')}
        />
        <CheckBox
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          title="Đang xử lí"
          checkedIcon={<Icon name="check-square" size={30} color="#1668C7" />}
          uncheckedIcon={<Icon name="square" size={30} color="#ffffff" style={styles.checkboxIcon} />}
          checkedTitle="Đang xử lí"
          checked={selectedOption === 'Option B'}
          onPress={() => handleOptionSelection('Option B')}
        />
        <CheckBox
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          title="Đã xử lí"
          checkedTitle="Đã xử lí"
          checked={selectedOption === 'Option C'}
          onPress={() => handleOptionSelection('Option C')}
          checkedIcon={<Icon name="check-square" size={30} color="#1668C7" />}
          uncheckedIcon={<Icon name="square" size={30} color="#ffffff" style={styles.checkboxIcon} />}
        />
      </View>

      <Text style={styles.infortext}>Ngày ban hành</Text>
      <View style={styles.infor1}>
        <TouchableOpacity style={styles.time} onPress={showSidebar}>
          <Text style={styles.timeText}>Chọn ngày</Text>
          <AntDesign
            name="right"
            size={20}
            color="#000000"
          />
        </TouchableOpacity>
        <Text style={styles.separator}>Đến</Text>
        <TouchableOpacity style={styles.time} onPress={showSidebar}>
          <Text style={styles.timeText}>Chọn ngày</Text>
          <AntDesign
            name="right"
            size={20}
            color="#000000"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.infortext}>Ngày gửi</Text>
      <View style={styles.infor1}>
        <TouchableOpacity style={styles.time} onPress={showSidebar}>
          <Text style={styles.timeText}>Chọn ngày</Text>
          <AntDesign
            name="right"
            size={20}
            color="#000000"
          />
        </TouchableOpacity>
        <Text style={styles.separator}>Đến</Text>
        <TouchableOpacity style={styles.time} onPress={showSidebar}>
          <Text style={styles.timeText}>Chọn ngày</Text>
          <AntDesign
            name="right"
            size={20}
            color="#000000"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Tìm kiếm</Text>
      </View>

      {isSidebarVisible && (
        <View style={styles.sidebar}>
          <TouchableOpacity style={styles.closeButton} onPress={hideSidebar}>
            <AntDesign name="close" size={30} color="#ffffff" />
          </TouchableOpacity>
         
          <View style={styles.calendarContainer}>
           
          <Calendar />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 80,
  },
  header: {
    width: '100%',
    backgroundColor: '#fff',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerIcon: {
    width: 20,
    backgroundColor: '#1668C7',
    borderRadius: 5,
  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
    width: '80%',
  },
  cancelIcon: {
   
    width: 50,
    height: 50,
    left: 5,
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
    justifyContent: 'center',
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
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0,
  },
  checkboxText: {
    marginLeft: 30,
    flex: 1,
    fontWeight: '400',
    fontSize: 16,
  },
  checkboxIcon: {
    borderWidth: 1,
    borderRadius: 5,
    height: 25,
    width: 25,
  },
  infor1: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  time: {
    flexDirection: 'row',
    width: '40%',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 16,
  },
  separator: {
    marginVertical: 25,
    paddingHorizontal: 20,
  },
  searchButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#1668c7',
    borderRadius: 10,
    marginTop: '30%',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#ffffff',
    fontWeight: '700',
    textAlign: 'center',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  calendarContainer: {
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Filter;
