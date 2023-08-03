import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';

const header = 'Ngôn ngữ';

const LanguageSettingScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionName) => {
    setSelectedOption(optionName);
  };

  const imageSourceSelected = require('../../assets/image/selected.png');
  const imageSourceNotSelected = require('../../assets/image/unselected.png');

  const OptionItem = ({ text, textsub, isChecked, onPress }) => {
    return (
      <TouchableOpacity style={styles.option} onPress={onPress}>
         <View style={styles.textContainer}>
          <Text style={styles.optionText}>{text}</Text>
          <Text style={styles.subText}>{textsub}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Image
            source={imageSourceSelected}
            style={[styles.optionImage, { opacity: isChecked ? 1 : 0 }, { position: 'absolute', right: 10, zIndex: 1 }]}
          />
          <Image
            source={imageSourceNotSelected}
            style={[styles.optionImage, { opacity: isChecked ? 0 : 1 }, { position: 'absolute', right: 10, zIndex: 1 }]}
          />
        </View>
       
      </TouchableOpacity>
    );
  };

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
  );
};

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
  textContainer: {
    flexDirection: 'column', // Hiển thị dòng chữ theo cột
    alignItems: 'flex-end', // Căn phải dòng chữ
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right', // Căn phải nội dung của dòng chữ English
  },
  subText: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'right', // Căn phải nội dung của dòng chữ Tiếng Anh
  },
  checkboxContainer: {
    position: 'relative',
    width: 30,
    height: 30,
    zIndex: 0,
  },
  optionImage: {
    width: 50,
    height: 50,
  },
});

export default LanguageSettingScreen;
