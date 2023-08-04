import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Circle, Text as SVGText } from 'react-native-svg';

const WorkPercent = ({ status, completionPercentage }) => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('WorkManage');
  };

  let dotImageSource = require('../assets/image/dotgray.png'); // Mặc định dotImage là ccc.png

  // Xác định hình ảnh dựa trên trạng thái
  switch (status) {
    case 'A':
      Colortext = '#959595';
      dotImageSource = require('../assets/image/dotgray.png');
      break;
    case 'B':
      Colortext = '#1EDC26';
      dotImageSource = require('../assets/image/dotgreen.png');
      break;
      default:
      break;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.titledisplay}>
        <Text style={styles.namenotice}>Phân tích công việc</Text>
        <Svg height={40} width={40} style={styles.progressCircle}>
          <Circle
            cx="20"
            cy="20"
            r="16"
            stroke={'#1668C7'}
            strokeWidth="4"
            fill="none"
            strokeDasharray={`${completionPercentage}, 100`}
            strokeLinecap="round"
          />
          <SVGText x="50%" y="50%" textAnchor="end" fontSize={8} fontWeight="bold" letterSpacing={-0.9} fill="#000000" dy="3">
            {completionPercentage}%
          </SVGText>
        </Svg>
        <View style={styles.description}>
          <Text style={styles.date}>14/4/2023 - 14/05/2023</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
           
            <Image source={dotImageSource} style={{ width: 10, height: 10, alignItems: 'center', left: 0, marginHorizontal : 10 }} />
            <Text style={{ fontSize: 14, alignItems: 'center', marginRight: 5, marginVertical: 11 , color : Colortext}}>
              {status === 'A' ? 'Chưa duyệt' : status === 'B' ? 'Đã duyệt' : ''}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkPercent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: 80,
    borderRadius: 10,
    borderWidth: 0.2,
    marginVertical: 3,
  },
  titledisplay: {
    // Add any specific styles you want for the titledisplay container
  },
  namenotice: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  date: {
    marginHorizontal: 20,
    fontStyle: 'italic',
    marginVertical: 5,
    marginRight: '25%',
  },
  description: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  progressCircle: {
    position: 'absolute',
    top: 5,
    right: 20,
  },
});
