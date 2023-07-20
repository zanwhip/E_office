import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import News from '../../components/News';
import { TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import BannerImage from "../../assets/image/bannerNew.png"

const header = 'Tin tức - Sự kiện'

const NewScreen = ({navigation}) => {
  return (
    <View>
    <Header header={header} />

     <View style={styles.banner}>
        <Text style={styles.subheader}>Tin nổi bật</Text>
        <TouchableOpacity
         onPress={() => navigation.navigate('Hotnew')}>
        <Image 
       
     source={require('../../assets/image/bannerNew.png')} 
     style={styles.image}
     
     />
        </TouchableOpacity>
    
     </View>

     <ScrollView style={styles.newscontainer}>
        <Text style={styles.texttile}>Tin tức - Sự kiện </Text>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
     </ScrollView>
    </View>
  )
}

export default NewScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#e3e3e3',
        
    },
   
  banner : {
    backgroundColor : '#1668C7',
      top : 0,
      width : '100%',
      height : 280,
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