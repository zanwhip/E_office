import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import News from '../components/News';

const newScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.header}>
    <Ionicons 
    name="arrow-back-outline"
    size={20}
    color='#ffffff'
    />
    <Text style={styles.textheader}>Tin tức - Sự kiện</Text>
     </View>

     <View style={styles.banner}>
        <Text style={styles.subheader}>Tin nổi bật</Text>
     <Image source={require('../assets/image/bannerNew.png')} style={styles.image}/>
     </View>

     <ScrollView style={styles.newscontainer}>
        <Text style={styles.texttile}>Tin tức - Sự kiện </Text>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
     </ScrollView>
    </View>
  )
}

export default newScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#e3e3e3',
        
    },
    header : {
      flexDirection : 'row',
      width : '100%',
      height : 60,
      backgroundColor : '#1668C7',
      top : 0,
      paddingTop : 20,
      alignContent : 'center',
      //paddingHorizontal : 10,

  },
  textheader : {
      fontSize : 22,
      color : '#ffffff',
      fontWeight : 'bold',
      marginLeft : 80,
  },
  banner : {
    backgroundColor : '#1668C7',
      top : 0,
      width : '100%',
      height : 281,
      //alignItems : 'center',
      //paddingHorizontal : 20,
  }, 
  image : {
    height : 206,
    width : '90%',
    borderRadius : 10,
    marginLeft : 18,
    
  },
  subheader : {
    fontSize : 20,
    fontWeight : 'bold',
    marginRight : 20,
    marginBottom : 10,
    color : '#ffffff',
    marginLeft : 10,
  }, 
  newscontainer : {
     width : '100%',
    backgroundColor : '#e3e3e3',
    height : '100%',
    paddingHorizontal : 10,

  },
  texttile : {
    color : '#000000',
    fontSize: 22,
    fontWeight : 'bold',
    marginTop : 20
  },
  


})  