import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import News from '../../components/News';
import Header from '../../components/Header';


const header = 'Tin tức - Sự kiện';

const bannerData = [
  { id: '1', image: require('../../assets/image/banner.png') },
  { id: '2', image: require('../../assets/image/banner.png') },
  { id: '3', image: require('../../assets/image/banner.png') },
  { id: '4', image: require('../../assets/image/banner.png') },
  { id: '5', image: require('../../assets/image/banner.png') },
];

const NewScreen = ({ navigation }) => {
  const renderBannerItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ }}onPress={() => navigation.navigate('Hotnew')}>
        <View style={styles.bannerItem}>
          <Image source={item.image} style={styles.bannerImage} />
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)']}
            style={styles.gradientOverlay}
          >
            <View style={{ flexDirection :'row' , width : 200, marginBottom : 10  }}>
            <Text style={{ fontSize : 15, color : '#ffffff', fontWeight : '700',  }}>Phát động Cuộc thi “Khởi nghiệp Công nghệ trong sinh viên” InTE-UD lần thứ III: Góp phần kiến tạo cộng đồng khởi nghiệp trẻ từ giảng đường</Text>
            <Text  style={{ fontSize : 12, color : '#ffffff', fontWeight : '700', marginTop : '45%'}}>09/09/2020</Text>
            </View>
           
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header header={header} />

      <View style={styles.banner}>
        <FlatList
          data={bannerData}
          renderItem={renderBannerItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>

      <FlatList
        style={styles.newscontainer}
        data={[...Array(10).keys()]} // Replace this with your actual data for News component
        renderItem={({ index }) => <News />} // Replace this with your actual News component
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<Text style={styles.texttile}>Tin tức - Sự kiện</Text>}
      />
    </View>
  );
};

export default NewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },

  banner: {
    backgroundColor: '#1668C7',
    width: '100%',
    height: 280,
    overflow: 'hidden',
  },
  bannerItem: {
    width:350,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal : 20, 
    paddingVertical : 20,
    
  },
  bannerImage: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 16,
  },
  bannerText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  newscontainer: {
    backgroundColor: '#e3e3e3',
    paddingHorizontal: 10,
  },
  texttile: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
