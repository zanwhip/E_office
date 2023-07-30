import { StyleSheet, Text, View, Switch, TouchableOpacity, Image } from 'react-native'
import React , { useState } from 'react'
import Header from '../../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';

const header = 'Thông báo'

const NoticeSettingScreen = ({navigation}) => {
   
    const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionName) => {
    setSelectedOption(optionName);
  }
  
  const OptionItem = ({ text, icon, isChecked, onPress, imageSource }) => {
    return (
      <View style={styles.option}>
        <View style={styles.leftContent}>
        {imageSource && <Image source={imageSource} style={styles.optionImage} />}
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
  
const NoticeSettingScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionName) => {
    setSelectedOption(optionName);
  }
}
  return (
    <View style={styles.container}>
      <Header header={header} />
      <View style={styles.display}>
        <OptionItem
          text="Rung" 
          imageSource={require('../../assets/image/rung.png')}         
          isChecked={selectedOption === 'vibrate'}
          onPress={() => handleOptionChange('vibrate')}
        />
        <OptionItem
          text="Rung + Chuông"
          imageSource={require('../../assets/image/chuong.png')}         
          isChecked={selectedOption === 'ringtone'}
          onPress={() => handleOptionChange('ringtone')}
        />
        <OptionItem
          text="Im lặng"
          imageSource={require('../../assets/image/imlang.png')}         
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
    backgroundColor: '#fff',
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
  optionImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});