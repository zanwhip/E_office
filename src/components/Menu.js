import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import Entypo from 'react-native-vector-icons/Entypo';


const Menu = () => {
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
    ////////////////////
    const [isDropdownBOpen, setDropdownBOpen] = useState(false);
    const [isDropdownB1Open, setDropdownB1Open] = useState(false);
  
    const toggleDropdownB = () => {
      setDropdownBOpen(!isDropdownBOpen);
    };
  
    const toggleDropdownB1 = () => {
      setDropdownB1Open(!isDropdownB1Open);
    };
    

  return (
    <View style={styles.container}>
      <Text style={styles.menutext}>Menu</Text>

<ScrollView style={styles.dropdowncontainer}>
      <TouchableOpacity style={styles.menuItem} onPress={toggleDropdownA}>
          <Text style={styles.menuItemText}>Dropdown A</Text>
          <Entypo
          name={getDropdownIcon(isDropdownAOpen)}
          size={20}
          color="#000000"/>
        </TouchableOpacity>
        {isDropdownAOpen && (
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.dropdownItem} onPress={toggleDropdownA1}>
              <Text style={styles.dropdownItemText}>Dropdown A1</Text>
              <Entypo
                name={getDropdownIcon(isDropdownA1Open)}
                size={20}
                color="#000000" />
            </TouchableOpacity>
            {isDropdownA1Open && (
              <View style={styles.subDropdown}>
                <TouchableOpacity style={styles.subDropdownItem}>
                  <Text style={styles.subDropdownItemText}>A11</Text>
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity style={styles.dropdownItem} onPress={toggleDropdownA2}>
              <Text style={styles.dropdownItemText}>Dropdown A2</Text>
              <Entypo
                name={getDropdownIcon(isDropdownA2Open)}
                size={20}
                color="#000000"
              />
            </TouchableOpacity>
            {isDropdownA2Open && (
              <View style={styles.subDropdown}>
                <TouchableOpacity style={styles.subDropdownItem}>
                  <Text style={styles.subDropdownItemText}>A21</Text>
                </TouchableOpacity>

              </View>
            )}

           
<TouchableOpacity style={styles.dropdownItem} onPress={toggleDropdownA3}>
              <Text style={styles.dropdownItemText}>Dropdown A3</Text>
              <Entypo
                name={getDropdownIcon(isDropdownA3Open)}
                size={20}
                color="#000000"
              />
            </TouchableOpacity>
            {isDropdownA3Open && (
              <View style={styles.subDropdown}>
                <TouchableOpacity style={styles.subDropdownItem}>
                  <Text style={styles.subDropdownItemText}>A31</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subDropdownItem}>
                  <Text style={styles.subDropdownItemText}>A32</Text>
                </TouchableOpacity>

              </View>
            )}

            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>Dropdown A4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>Dropdown A5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>Dropdown A6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>Dropdown A7</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>Dropdown A8</Text>
            </TouchableOpacity>
          
        <TouchableOpacity style={styles.dropdownItem} onPress={toggleDropdownA9}>
              <Text style={styles.dropdownItemText}>Dropdown A9</Text>
              <Entypo
                name={getDropdownIcon(isDropdownA9Open)}
                size={20}
                color="#000000"
              />
            </TouchableOpacity>
            {isDropdownA9Open && (
              <View style={styles.subDropdown}>
                <TouchableOpacity style={styles.subDropdownItem}>
                  <Text style={styles.subDropdownItemText}>A91</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subDropdownItem}>
                  <Text style={styles.subDropdownItemText}>A92</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subDropdownItem}>
                  <Text style={styles.subDropdownItemText}>A93</Text>
                </TouchableOpacity>
              </View>
            )}

          </View>
        )}
        

      <TouchableOpacity style={styles.menuItem} onPress={toggleDropdownB}>
          <Text style={styles.menuItemText}>Dropdown B</Text>
        </TouchableOpacity>

        {isDropdownBOpen && (
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.dropdownItem} onPress={toggleDropdownB1}>
              <Text style={styles.dropdownItemText}>Dropdown B1</Text>
            </TouchableOpacity>

            {isDropdownB1Open && (
              <View style={styles.subDropdown}>
                <TouchableOpacity style={styles.subDropdownItem}>
                  <Text style={styles.subDropdownItemText}>B11</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Dropdown C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Dropdown D</Text>
        </TouchableOpacity>
        </ScrollView>
        <View style={styles.logout}>
            <Text>Đăng xuất</Text>
        </View>
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
        borderBottomWidth : 1

    },
    container: {
       
        backgroundColor: '#e3e3e3',
        
      },
      menu: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 5,
      },
      menuItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flexDirection : 'row'
      },
      menuItemText: {
        fontSize: 16,
      },
      dropdown: {
        marginLeft: 10,
        marginTop: 5,
      },
      dropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flexDirection : 'row',

      },
      dropdownItemText: {
        fontSize: 16,
      },
      subDropdown: {
        marginLeft: 10,
        marginTop: 5,
      },
      subDropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: '#f2f2f2',
      },
      subDropdownItemText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      dropdowncontainer : {
        marginBottom : 80,
        height : '90%'
      },
      logout : {
        backgroundColor : '#000000'
      }
})