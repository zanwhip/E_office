import { StyleSheet, Text, View, Switch, TouchableOpacity, Image } from 'react-native'
import React , { useState } from 'react'
import Header from '../../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';

const header = 'Thông báo'

const LanguageSettingScreen = ({navigation}) => {
   
    const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionName) => {
    setSelectedOption(optionName);
  }
  
  const OptionItem = ({ text,textsub, icon, isChecked, onPress, imageSource }) => {
    return (
      <View style={styles.option}>
        <View style={styles.leftContent}>
        {imageSource && <Image source={imageSource} style={styles.optionImage} />}
          <FontAwesome name={icon} size={24} />
          <Text style={styles.optionText}>{text} <Text style={{ fontWeight : '400', fontSize : 14 , }}>{textsub}</Text></Text>
          
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
          text="Tiếng Việt" 
              
          isChecked={selectedOption === 'vietnamese'}
          onPress={() => handleOptionChange('vietnamese')}
        />
        <OptionItem
          text="English"
          textsub="Tiếng Anh"
          isChecked={selectedOption === 'english'}
          onPress={() => handleOptionChange('english')}
        />
        
      </View>
    </View>
  )
}

export default LanguageSettingScreen


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
    flexDirection: 'column',
    //alignItems: 'center',
    justifyContent : 'center',
    backgroundColor : '#ffffff',
    width : '30%'
  },
  optionText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight : 'bold',
    flexDirection : 'column',
    
  },
  optionImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});