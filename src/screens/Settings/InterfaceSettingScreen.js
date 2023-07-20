import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native'
import React , { useState } from 'react'
import Header from '../../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';

const header = 'Giao diện'

const InterfaceSettingScreen = () => {
    const [brightness, setBrightness] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [systemMode, setSystemMode] = useState(false);

    const handleCheckboxChange = (checkboxName) => {
        switch (checkboxName) {
          case 'brightness':
            setBrightness(true);
            setDarkMode(false);
            setSystemMode(false);
            break;
          case 'darkMode':
            setBrightness(false);
            setDarkMode(true);
            setSystemMode(false);
            break;
          case 'systemMode':
            setBrightness(false);
            setDarkMode(false);
            setSystemMode(true);
            break;
          default:
            setBrightness(false);
            setDarkMode(false);
            setSystemMode(false);
            break;
        }
      };
  return (
    <View style={styles.container}>
    <Header header={header} />
    <View style={styles.display}>
      <View style={styles.option}>
        <Text style={styles.optiontext}>Sáng</Text>
        <CheckBox
          checked={brightness}
          onPress={() => handleCheckboxChange('brightness')}
          checkedColor="green"
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optiontext} >Tối</Text>
        <CheckBox
          checked={darkMode}
          onPress={() => handleCheckboxChange('darkMode')}
          checkedColor="green"
        />
      </View>
      <View style={styles.option}>
       
        <View style={{ width : '80%' }}>
        <Text style={styles.optiontext} >Hệ thống   </Text>
        <Text style={{ color : '#959595' }}>Điều chỉnh giao diện theo màu sắc chủ đạo của hệ thống</Text>
        </View>
        
        
        
     
        
        <CheckBox
          checked={systemMode}
          onPress={() => handleCheckboxChange('systemMode')}
          checkedColor="green"
        />
        
      </View>
      
    </View>
  </View>
  )
}

export default InterfaceSettingScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#ffffff',
        
    },
    display : {
        paddingHorizontal : 20
    },
    option : {
        width : '100%',
        height : 80,
        borderBottomWidth : 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent: 'space-between'
    },
    optiontext : {
        fontSize : 18,
        fontWeight : '600',
    }
})