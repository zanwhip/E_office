import { StyleSheet, Text, View, Switch, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';

const header = 'Giao diện';

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

  const imageSourceAaa = require('../../assets/image/selected.png');
  const imageSourceBbb = require('../../assets/image/unselected.png');

  const OptionItem = ({ text, textsub, isChecked, onPress }) => {
    return (
      <TouchableOpacity style={styles.option} onPress={onPress}>
        <View style={styles.textContainer}>
          <Text style={styles.optionText}>{text}</Text>
          <Text style={styles.subText}>{textsub}</Text>
        </View>
        <Image
          source={isChecked ? imageSourceAaa : imageSourceBbb}
          style={styles.optionImage}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header header={header} />
      <View style={styles.display}>
        <OptionItem
          text="Sáng"
          imageSource={imageSourceAaa}
          isChecked={brightness}
          onPress={() => handleCheckboxChange('brightness')}
        />
        <OptionItem
          text="Tối"
          imageSource={imageSourceAaa}
          isChecked={darkMode}
          onPress={() => handleCheckboxChange('darkMode')}
        />
        <OptionItem
          text="Hệ thống"
          textsub="Điều chỉnh giao diện theo màu sắc chủ đạo của hệ thống"
          imageSource={imageSourceAaa}
          isChecked={systemMode}
          onPress={() => handleCheckboxChange('systemMode')}
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
    width : '80%',
    flexDirection: 'column', // Hiển thị dòng chữ theo cột
    alignItems: 'flex-start', // Căn trái dòng chữ
    justifyContent :'c'
  },
  optionText: {
    fontSize: 18,
    fontWeight: '600',
  },
  optionDescription: {
    fontSize: 14,
    color: '#959595',
  },
  optionImage: {
    width: 50,
    height: 50,
  },
});

export default InterfaceSettingScreen;
