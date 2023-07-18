import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';


const Menu = ({ handleMenuItemPress, isSidebarOpen }) => {
 
  const navigation = useNavigation();
  const handleMenuPressSetting  = () => {
    handleMenuItemPress();
      navigation.navigate('Setting');
    };
    const handleMenuPressSalary  = () => {
      handleMenuItemPress();
        navigation.navigate('Salary');
      };
    const [isDropdownAOpen, setDropdownAOpen] = useState(false);
    const [isDropdownA1Open, setDropdownA1Open] = useState(false);
    const [isDropdownA2Open, setDropdownA2Open] = useState(false);
    const [isDropdownA3Open, setDropdownA3Open] = useState(false);
    const [isDropdownA9Open, setDropdownA9Open] = useState(false);
    const toggleDropdownA = () => {
      setDropdownAOpen(!isDropdownAOpen);
    };
    
  
    const toggleDropdownA1 = () => {
      setDropdownA1Open(!isDropdownA1Open);
    };
    const toggleDropdownA2 = () => {
        setDropdownA2Open(!isDropdownA2Open);
      };
      const toggleDropdownA3 = () => {
        setDropdownA3Open(!isDropdownA3Open);
      };
      const toggleDropdownA9 = () => {
        setDropdownA9Open(!isDropdownA9Open);
      };
    const getDropdownIcon = (isOpen) => {
        return isOpen ? 'chevron-down' : 'chevron-up';
      };
  
    const [isDropdownBOpen, setDropdownBOpen] = useState(false);
    const [isDropdownB1Open, setDropdownB1Open] = useState(false);
  
    // const handleMenuItemPress = () => {
    //   handleMenuItemPress();
    // };
    const toggleDropdownB = () => {
      setDropdownBOpen(!isDropdownBOpen);
    };
  
    const toggleDropdownB1 = () => {
      setDropdownB1Open(!isDropdownB1Open);
    };
    

  return (
    <View style={styles.container}>
      <View style={{ flexDirection : 'row' , justifyContent : 'space-between' , height : '10%' , borderBottomWidth : 5, borderBottomColor : '#e3e3e3', backgroundColor : '#ffffff',paddingTop : 30 }}>
      <Text style={styles.menutext}>Menu</Text>
      <Text style={{ fontSize : 20,fontWeight : 'bold', marginTop : '5%', color :'#1668C7', borderBottomWidth : 1, marginRight : 5 }}>Đăng xuất</Text>
      </View>
      

<ScrollView style={styles.dropdowncontainer} contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity style={styles.menuItem} onPress={handleMenuItemPress}>
          <Text style={styles.menuItemText}>Điều hành tác nghiệp</Text>
          <Entypo
          name={getDropdownIcon(isDropdownAOpen)}
          size={20}
          color="#000000"/>
        </TouchableOpacity>
        {isDropdownAOpen && (
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.dropdownItem} onPress={toggleDropdownA1}>
              <Text style={styles.dropdownItemText}>Văn bản đến</Text>
              <Entypo
                name={getDropdownIcon(isDropdownA1Open)}
                size={20}
                color="#000000" />
            </TouchableOpacity>
            {isDropdownA1Open && (
              <View style={styles.subDropdown}>
                <TouchableOpacity style={styles.subDropdownItem}>
                  <Text style={styles.subDropdownItemText}>Danh sách văn bản đến</Text>
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity style={styles.dropdownItem} onPress={toggleDropdownA2}>
              <Text style={styles.dropdownItemText}>Văn bản đi</Text>
              <Entypo
                name={getDropdownIcon(isDropdownA2Open)}
                size={20}
                color="#000000"
              />
            </TouchableOpacity>
            {isDropdownA2Open && (
              <View style={styles.subDropdown}>
                <TouchableOpacity style={styles.subDropdownItem}>
                  <Text style={styles.subDropdownItemText}>Danh sách văn bản gửi di </Text>
                </TouchableOpacity>

              </View>
            )}

           
<TouchableOpacity style={styles.dropdownItem} onPress={toggleDropdownA3}>
              <Text style={styles.dropdownItemText}>Điều hành tác nghiệp</Text>
              <Entypo
                name={getDropdownIcon(isDropdownA3Open)}
                size={20}
                color="#000000"
              />
            </TouchableOpacity>
            {isDropdownA3Open && (
              <View style={styles.subDropdown}>
                <TouchableOpacity style={styles.subDropdownItem}>
                  <Text style={styles.subDropdownItemText}>Văn bản nội bộ đã gửi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subDropdownItem}>
                  <Text style={styles.subDropdownItemText}>Văn bản nội bộ đã nhận</Text>
                </TouchableOpacity>

              </View>
            )}

            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>Quản lí công việc</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>Đăng kí lịch tuần</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>Quản lí tiến độ</Text>
            </TouchableOpacity>
           
          </View>
        )}
        

      <TouchableOpacity style={styles.menuItem} onPress={toggleDropdownB}>
          <Text style={styles.menuItemText}>Tra cứu Lương - Thuế</Text>
          <Entypo
                name={getDropdownIcon(isDropdownBOpen)}
                size={20}
                color="#000000" />
        </TouchableOpacity>

        {isDropdownBOpen && (
          <View style={styles.dropdown}>
            <TouchableOpacity 
            style={styles.dropdownItem} 
            onPress={handleMenuPressSalary} >
              <Text style={styles.dropdownItemText}>Xem Lương - Thuế cá nhân</Text>
              
            </TouchableOpacity>

          </View>
        )}
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Lịch tuần</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.menuItem} 
        onPress={handleMenuPressSetting} 
        >
          <Text style={styles.menuItemText}>Cài đặt </Text>
        </TouchableOpacity>
        </ScrollView>
        
        
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({ 
  
    menutext : {
        fontSize : 28,
        fontWeight : 'bold',
        marginTop : '5%',
        marginLeft : '5%',
        color :'#1668C7',
        borderBottomWidth : 1,
        borderBottomColor : '#000000'
       
        
    },
    container: {  
      flex: 1,     
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',

        
      },
      menu: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 5,
        
      },
      menuItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        // borderBottomWidth: 1,
        backgroundColor: '#ffffff',
        flexDirection : 'row',
        width : '100%',
        height : 60,
        
        
      },
      menuItemText: {
        fontSize: 18,
        fontWeight : '700',
        color : '#1668C7'
      },
      dropdown: {
        //marginLeft: 10,
       // marginTop: 5,
       
      },
      dropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flexDirection : 'row',
        height : 60,
        backgroundColor : '#ffffff'
        


      },
      dropdownItemText: {
        fontSize: 16,
        fontWeight : '600',
        color : '#1668C7'

      },
      subDropdown: {
        //marginLeft: 10,
        //marginTop: 5,
      },
      subDropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#0000000',
        backgroundColor: '#f2f2f2',
        height : 60,
        backgroundColor : '#ffffff'
       
      },
      subDropdownItemText: {
        fontSize: 16,        
        fontWeight : '600',
        color : '#1668C7'


      },
      dropdowncontainer : {
        flex: 1,
        height: '100%',
        
      },
      logout : {
        backgroundColor : '#000000'
      }
})