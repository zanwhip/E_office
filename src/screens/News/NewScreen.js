import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
      <TouchableOpacity onPress={() => navigation.navigate('Hotnew')}>
        <View style={styles.bannerItem}>
          <Image source={item.image} style={styles.bannerImage} />
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)']}
            style={styles.gradientOverlay}
          >
            <View style={styles.textContainer}>
              <Text style={styles.bannerText}>
                Phát động Cuộc thi “Khởi nghiệp Công nghệ trong sinh viên” InTE-UD lần thứ III: Góp phần kiến tạo cộng đồng khởi nghiệp trẻ từ giảng đường
              </Text>
              <Text style={styles.bannerDate}>09/09/2020</Text>
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
        <Text style={styles.bannerTitle}>Tin nổi bật</Text>
        <FlatList
          data={bannerData}
          renderItem={renderBannerItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>

      <FlatList
        style={styles.newsContainer}
        data={[...Array(10).keys()]} // Replace this with your actual data for News component
        renderItem={({ index }) => <News />} // Replace this with your actual News component
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<Text style={styles.textTitle}>Tin tức - Sự kiện</Text>}
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
    height: 300,
  },
  bannerItem: {
    width: 350,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
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
  bannerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginHorizontal: 15,
  },
  textContainer: {
    position: 'absolute',
    flexDirection : 'row',
    bottom: 16,
    left: 16,
    right: 16,
  },
  bannerText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '700',
    marginBottom: 4,
    marginHorizontal : 5,
    width : '65%',
    lineHeight : 22,
  },
  bannerDate: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '700',
    marginTop : '28%', 
    marginLeft : 10
    
  },
  newsContainer: {
    backgroundColor: '#e3e3e3',
    paddingHorizontal: 10,
  },
  textTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
