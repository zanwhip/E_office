import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import DataMonth from '../components/DataMonth';
import Header from '../components/Header';
import ImageViewer from 'react-native-image-zoom-viewer';


const images = [
  {
    url:'https://www.udn.vn/app/webroot/upload/images/Thang1_2020.jpg',
    
  },

];

const hightlight = 'Số liệu CBVC Đại học Đà Nẵng năm 2020';
const content =
  'Tính đến tháng 12/2020, đội ngũ cán bộ viên chức và lực lượng giảng viên cơ hữu của ĐHĐN với 2.457 cán bộ, trong đó có 1.547 giảng viên; giảng viên cao cấp 110, giảng viên chính 307. Chất lượng đội ngũ cán bộ giảng dạy của ĐHĐN không ngừng tăng lên qua các giai đoạn phát triển, hiện nay ĐHĐN có 8 GS và 100 PGS. Tỷ lệ giảng viên và cán bộ nghiên cứu có trình độ TS, ThS và được phong hàm GS, PGS ngày càng tăng. Trường ĐHKT, ĐHBK và ĐHSP có số lượng và tỷ lệ GS và TS cao nhất trong các CSGDĐHTV . Bảng số liệu cụ thể:';
const link = 'https://drive.google.com/file/d/1-RerZNkK6krg6bycwjTxvhQ1w_R1ty3L/view?pli=1';
const header = 'Số liệu CBVC';

const StatisticsScreen = ({ navigation }) => {
  const handleLinkPress = () => {
    Linking.openURL(link);
  };
 

  const openImageViewer = (image) => {
    const index = images.indexOf(image);
    ImageViewer.open(images, { index });
  };
  return (
    <View style={styles.container}>
      <Header header={header} />
      <View style={styles.datamonth}>
        <ScrollView style={styles.datacontainer}>
          <Text style={{ fontSize: 20, color: '#1668C7', fontWeight: '700', paddingVertical: 20 }}>
            {hightlight}
          </Text>
          <Text
            style={{
              paddingVertical: 10,
              fontSize: 16,
              fontWeight: '400',
              textAlign: 'justify',
              lineHeight: 20,
              lineHeight : 24,
            }}
          >
            {content}
          </Text>
          <Image source={require('../assets/image/statistics.png')} style={styles.thumbnail} />
          <Text>{link}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default StatisticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  datamonth: {
    marginTop: 0,
    width: '100%',
    height: '100%',
  },
  datacontainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e3e3e3',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  thumbnail : {
  width :'100%',
  height : '60%'
  }
});
  