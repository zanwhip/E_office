import { CheckBox } from 'react-native-elements';
import { StyleSheet, Text, View, Image ,Picker, TouchableOpacity, Platform } from 'react-native'
import Reac, {useState} from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';


import Calendar from './Calendar';

const field = ["Bảo hiểm", "Cơ sở vật chất", "Công đoàn", "Công khai", "Đào tạo", "Đoàn thanh niên", "Dự án", "Học sinh sinh viên" , "Hợp tác quốc tế", "Khoa học công nghệ", "Luật", "Tài chính", "Thi đua khen thường", "Tổ chức cán bộ", "Văn bản của đảng", "Văn bản pháp quy", "Khác"]
const type = ["Nghị quyết", "Quyết định", "Chỉ thị", "Quy chế" , "Quy định", "Thông cáo", "Thông báo", "Hướng dẫn", "Chương trình", "Kế hoạch", "Phương án", "Đề án", "Dự án", "Báo cáo", "Biên bản", "Hợp đồng", "Khác"]


const Filter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen((prevValue) => !prevValue);
  };
    const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showSidebar = () => {
    setSidebarVisibility(true);
  };
  const hideSidebar = () => {
    setSidebarVisibility(false);
  };
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };





  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <View style={{ width : 20, backgroundColor : '#1668C7', borderRadius : 5 }}></View>
        <Text style={{ fontSize : 23, fontWeight : 'bold',marginLeft :10 , marginVertical : 10, width : '80%'}}>Bộ lọc nâng cao</Text>
        <Image source={require('../assets/image/cancel.png')} style={{ width : 50, height :50, left : 5, }} />
      </View>

      <View style={styles.infor}>
        <Text style={styles.infortext}>Lĩnh vực</Text>
        <SelectDropdown
        style={{ borderRadius : 10, }}
	data={field}
    defaultButtonText="Tất cả"
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		return item
	}}
    buttonStyle={styles.dropdownButton}
          buttonTextStyle={styles.dropdownButtonText}
          renderDropdownIcon={() => (
            <Entypo
            name={isDropdownOpen ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#000000"/>
          )}
          dropdownStyle={styles.dropdownStyle}
          onDropdownOpen={toggleDropdown}
          onDropdownClose={toggleDropdown}
        />
      </View>
      <View style={styles.infor}>
        <Text style={styles.infortext}>Loại văn bản</Text>
        <SelectDropdown
        style={{ borderRadius : 10, }}
	data={type}
    defaultButtonText="Tất cả"
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		return item
	}}
    buttonStyle={styles.dropdownButton}
          buttonTextStyle={styles.dropdownButtonText}
          renderDropdownIcon={() => (
            <Entypo
            name={isDropdownOpen ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#000000"/>
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
          uncheckedIcon={<Icon name="square" size={30} color="#ffffff" style={{ borderWidth : 1, borderRadius : 5, height : 25, width : 25 }} />}
          checkedTitle="Chưa xử lí" // This is used to display the text after the checkbox is checked
          checked={selectedOption === 'Option A'}
          onPress={() => handleOptionSelection('Option A')}
        />
        <CheckBox
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          title="Đang xử lí"
          checkedIcon={<Icon name="check-square" size={30} color="#1668C7" />}
          uncheckedIcon={<Icon name="square" size={30} color="#ffffff"  style={{ borderWidth : 1, borderRadius : 5, height : 25, width : 25, }}/>}
          checkedTitle="Đang xử lí" // This is used to display the text after the checkbox is checked
          checked={selectedOption === 'Option B'}
          onPress={() => handleOptionSelection('Option B')}
        />
        <CheckBox
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          title="Đã xử lí"
          checkedTitle="Đã xử lí" // This is used to display the text after the checkbox is checked
          checked={selectedOption === 'Option C'}
          onPress={() => handleOptionSelection('Option C')}
          checkedIcon={<Icon name="check-square" size={30} color="#1668C7"  />}
          uncheckedIcon={<Icon name="square" size={30} color="#ffffff" style={{ borderWidth : 1, borderRadius : 5, height : 25, width : 25 }} />}
         
        />
      </View>
      <View style={styles.infor}>
        <Text style={styles.infortext}>Ngày ban hành</Text>
       
        
      </View>
      
    </View>
 
      

      
     )
}

export default Filter

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal : 15,
        paddingVertical : 80
    },
    header : {
        width : '100%',
        backgroundColor : '#ffffff',
        height : 50,
        flexDirection : 'row',
       justifyContent : 'space-between'
        
    },
    infor : {
        backgroundColor : '#ffffff',
        paddingTop : 10,
        paddingHorizontal : 10,
    },
    infortext : {
      fontSize : 18,
      fontWeight : '400',
      marginLeft : 5,
      paddingVertical : 10,
    },

    dropdownButton: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderColor : '#B8B8B8',
        borderWidth : 0.5,
        height: 50,
        paddingHorizontal: 10,
        justifyContent: 'center',
      },
      dropdownButton1: {
        width: '50%',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderColor : '#B8B8B8',
        borderWidth : 0.5,
        height: 50,
        paddingHorizontal: 10,
        justifyContent: 'center',
      },
      dropdownButtonText: {
        fontSize: 16,
        color: '#000000',
      },
      dropdownIcon: {
        width: 20,
        height: 20,
      },
      dropdownStyle: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 8,
        marginTop: 5,
      },
      
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor : '#ffffff',
    borderWidth: 0, // Loại bỏ border,
   
  },
  checkboxText: {
    marginLeft: 30,
    flex: 1,
    fontWeight : '400',
    fontSize : 16
  },
  
})