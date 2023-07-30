import { ScrollView, StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import React, {useState} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
  const handleMenuPressProcessManage  = () => {
    handleMenuItemPress();
       navigation.navigate('ProcessManage');
  };  
    const handleMenuPressWorkManage  = () => {
      handleMenuItemPress();
         navigation.navigate('WorkManage');
    };   

    const handleMenuIncommingDocumetary  = () => {
      handleMenuItemPress();
         navigation.navigate('IncommingDocumetary');
    };  
    const handleMenuOutgoingDocumetary  = () => {
      handleMenuItemPress();
         navigation.navigate('OutgoingDocumentary');
    };    

    const handleMenuInternalDocumentReceive = () => {
      handleMenuItemPress();
         navigation.navigate('InternalDocumentReceive');
    };

    const handleMenuInternalDocumentSend = () => {
      handleMenuItemPress();
         navigation.navigate('InternalDocumentSend');
    };
    const handleMenuSchedule = () => {
      handleMenuItemPress();
         navigation.navigate('RegisterSchedule');
    };
    const handleMenuScheduleWeek = () => {
      handleMenuItemPress();
         navigation.navigate('ScheduleWeek');
    };

        

    const [isDropdownAOpen, setDropdownAOpen] = useState(false);
    const [isDropdownA1Open, setDropdownA1Open] = useState(false);
    const [isDropdownA2Open, setDropdownA2Open] = useState(false);
    const [isDropdownA3Open, setDropdownA3Open] = useState(false);
   
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
      const getDropdownIcon = (isOpen) => {
        return isOpen ? 'caret-up' : 'caret-down';
      };
      const getcolorDropdownIcon = (isOpen) => {
        return isOpen ? '#ffffff' : '#1668C7';
      };
      const getcolorDropdownBackground = (isOpen) => {
        return isOpen ? '#1668c7' : '#ffffff';
      };
      const getcolorDropdownBackgroundsub = (isOpen) => {
        return isOpen ? '#c4d7f4' : '#ffffff';
      };
    const [isDropdownBOpen, setDropdownBOpen] = useState(false);
    const [isDropdownB1Open, setDropdownB1Open] = useState(false);
  
//  const handleMenuItemPress = () => {
//   handleMenuItemPress();
//  };
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
      <Text style={{ fontSize : 16,fontWeight : 'bold', marginTop : '10%', color :'#1668C7', borderBottomWidth : 1, marginRight : 5 }}>Đăng xuất</Text>
      </View>
      

<ScrollView style={styles.dropdowncontainer} contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity style={[styles.menuItem , {backgroundColor : getcolorDropdownBackground(isDropdownAOpen), }]} onPress={toggleDropdownA}>
        <View style={{ flexDirection :'row' }}>
        <FontAwesome 
        name='bank'
        size={20}
        style={{ marginRight : 10 }}
        color={getcolorDropdownIcon(isDropdownAOpen)}
        />
          <Text style={[styles.menuItemText, {color : getcolorDropdownIcon(isDropdownAOpen)}]}>Điều hành tác nghiệp</Text>
        </View>
        
          <FontAwesome
          
          name={getDropdownIcon(isDropdownAOpen)}
          size={20}
          color={getcolorDropdownIcon(isDropdownAOpen)}/>
        </TouchableOpacity>
        {isDropdownAOpen && (
          <View style={styles.dropdown}>
            <TouchableOpacity style={[styles.dropdownItem , {backgroundColor : getcolorDropdownBackgroundsub(isDropdownA1Open)}]} onPress={toggleDropdownA1}>
              <Text style={styles.dropdownItemText}>Văn bản đến</Text>
              <FontAwesome
                name={getDropdownIcon(isDropdownA1Open)}
                size={20}
                color={'#1668c7'} />
            </TouchableOpacity>
            {isDropdownA1Open && (
              <View style={styles.subDropdown}>
                <TouchableOpacity style={styles.subDropdownItem} onPress={handleMenuIncommingDocumetary} >
                  <Text style={styles.subDropdownItemText}>Danh sách văn bản đến</Text>
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity style={[styles.dropdownItem , {backgroundColor : getcolorDropdownBackgroundsub(isDropdownA2Open)}]} onPress={toggleDropdownA2}>
              <Text style={styles.dropdownItemText}>Văn bản đi</Text>
              <FontAwesome
                name={getDropdownIcon(isDropdownA2Open)}
                size={20}
                color={'#1668c7'}
              />
            </TouchableOpacity>
            {isDropdownA2Open && (
              <View style={styles.subDropdown} >
                <TouchableOpacity style={styles.subDropdownItem} onPress={handleMenuOutgoingDocumetary}>
                  <Text style={styles.subDropdownItemText}>Danh sách văn bản đi </Text>
                </TouchableOpacity>

              </View>
            )}

           
<TouchableOpacity style={[styles.dropdownItem , {backgroundColor : getcolorDropdownBackgroundsub(isDropdownA3Open)}]} onPress={toggleDropdownA3}>
              <Text style={styles.dropdownItemText}>Điều hành tác nghiệp</Text>
              <FontAwesome
                name={getDropdownIcon(isDropdownA3Open)}
                size={20}
                color={'#1668c7'}
              />
            </TouchableOpacity>
            {isDropdownA3Open && (
              <View style={styles.subDropdown}>
                <TouchableOpacity style={styles.subDropdownItem} onPress={handleMenuInternalDocumentSend} >
                  <Text style={styles.subDropdownItemText}>Văn bản nội bộ đã gửi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subDropdownItem} onPress={handleMenuInternalDocumentReceive} >
                  <Text style={styles.subDropdownItemText}>Văn bản nội bộ đã nhận</Text>
                </TouchableOpacity>

              </View>
            )}

            <TouchableOpacity
             style={styles.dropdownItem}
             onPress={handleMenuPressWorkManage}
             >
              <Text style={styles.dropdownItemText}>Quản lý công việc</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}
             onPress={handleMenuSchedule}>
              <Text style={styles.dropdownItemText}>Đăng kí lịch tuần</Text>
              
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.dropdownItem}
            onPress={handleMenuPressProcessManage}
            >
              <Text style={styles.dropdownItemText}>Quản lý tiến độ</Text>
            </TouchableOpacity>
           
          </View>
        )}
        

      <TouchableOpacity style={[styles.menuItem , {backgroundColor : getcolorDropdownBackground(isDropdownBOpen), }]} onPress={toggleDropdownB}>
       
        <View style={{ flexDirection :'row' }}>
        <FontAwesome5 
        name='percentage'
        size={20}
        style={{ marginRight : 10 }}
        color={getcolorDropdownIcon(isDropdownBOpen)} 
        />
         <Text style={[styles.menuItemText, {color : getcolorDropdownIcon(isDropdownBOpen)}]}>Tra cứu Lương - Thuế</Text>
        </View>
         
          <FontAwesome
                name={getDropdownIcon(isDropdownBOpen)}
                size={20}
                color={getcolorDropdownIcon(isDropdownBOpen)} />
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
        <TouchableOpacity style={styles.menuItem1}
         onPress={handleMenuScheduleWeek}>
          <Image source={require('../assets/image/Calendar.png')} style={{ width : 22, height : 20, marginRight : 10 }} />
          <Text style={styles.menuItemText}>Lịch tuần</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.menuItem1} 
        onPress={handleMenuPressSetting} 
        >
          <Image source={require('../assets/image/Caidat.png')} style={{ width : 22, height : 20 , marginRight : 10 }} />
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
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',

        
      },
      menu: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        
      },
      menuItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        flexDirection : 'row',
        width : '100%',
        height : 60,
        justifyContent : 'space-between'
        
      },
      menuItem1: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        flexDirection : 'row',
        width : '100%',
        height : 60,
       // justifyContent : 'space-between'
        
      },
      menuItemText: {
        fontSize: 18,
        fontWeight : '700',
        color : '#1668C7'
      },
      dropdown: {
       
      },
      dropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flexDirection : 'row',
        height : 60,
        backgroundColor : '#ffffff',
        justifyContent :'space-between'
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
      },
      iconmenu : {
        paddingHorizontal : 20,
        width : 22,
        height : 20
      }
})