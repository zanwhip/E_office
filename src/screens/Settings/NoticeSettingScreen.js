import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native'
import React , { useState } from 'react'
import Header from '../../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';

const header = 'Giao diện'

const NoticeSettingScreen = () => {
   
    const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionName) => {
    setSelectedOption(optionName);
  }
  
  const OptionItem = ({ text, icon, isChecked, onPress }) => {
    return (
      <View style={styles.option}>
        <View style={styles.leftContent}>
          <FontAwesome name={icon} size={24} />
          <Text style={styles.optionText}>{text}</Text>
        </View>
        <CheckBox
          checked={isChecked}
          onPress={onPress}
          checkedColor="green"
          checkedIcon="dot-circle-o" // icon khi checkbox được chọn
          uncheckedIcon="circle-o" // icon khi checkbox không được chọn
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header header={header} />
      <View style={styles.display}>
        <OptionItem
          text="Rung"
          
          isChecked={selectedOption === 'vibrate'}
          onPress={() => handleOptionChange('vibrate')}
        />
        <OptionItem
          text="Rung + Chuông"
        
          isChecked={selectedOption === 'ringtone'}
          onPress={() => handleOptionChange('ringtone')}
        />
        <OptionItem
          text="Im lặng"
       
          isChecked={selectedOption === 'silent'}
          onPress={() => handleOptionChange('silent')}
        />
      </View>
    </View>
  )
}

export default NoticeSettingScreen


    const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  display: {
    paddingHorizontal: 20,
  },
  option: {
    width: '100%',
    height: 80,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 10,
    fontSize: 18,
  },
});