import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';

const header = 'Thông báo';

const NoticeSettingScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionName) => {
    setSelectedOption(optionName);
  };

  const imageSourceSelected = require('../../assets/image/selected.png');
  const imageSourceNotSelected = require('../../assets/image/unselected.png');
  const imageSourceAaa = require('../../assets/image/rung.png');
  const imageSourceBbb = require('../../assets/image/ruongchuong.png');
  const imageSourceCcc = require('../../assets/image/imlang.png');

  const OptionItem = ({ text, textsub, isChecked, onPress, imageSource }) => {
    return (
      <TouchableOpacity style={styles.option} onPress={onPress}>
        <View style={{ flexDirection : 'row' , alignItems : 'center',  }}>
        <Image source={imageSource} style={styles.Image} />
        <View style={styles.textContainer}>
          <Text style={styles.optionText}>{text}</Text>
          <Text style={styles.subText}>{textsub}</Text>
        </View>
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
          text="Rung"
          isChecked={selectedOption === 'rung'}
          onPress={() => handleOptionChange('rung')}
          imageSource={imageSourceAaa}
        />
        <OptionItem
          text="Rung + chuông"
          isChecked={selectedOption === 'rungchuong'}
          onPress={() => handleOptionChange('rungchuong')}
          imageSource={imageSourceBbb}
        />
        <OptionItem
          text="Im lặng"
          isChecked={selectedOption === 'imlang'}
          onPress={() => handleOptionChange('imlang')}
          imageSource={imageSourceCcc}
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
    //alignItems: 'flex-end', // Căn phải dòng chữ
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
    alignItems : 'center',
    justifyContent : 'center'
  },
  optionImage: {
    width: 50,
    height: 50,
    
  },
  Image: {
    width: 40,
    height: 40,
    marginHorizontal : 10
  },
});

export default NoticeSettingScreen;
