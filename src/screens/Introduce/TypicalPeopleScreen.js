import { StyleSheet, Text, View, Image, T } from 'react-native'
import React from 'react'
import Bio from '../../components/Bio'
import Header from '../../components/Header'
import { ScrollView } from 'react-native'



const bio1 = require('../../assets/image/background1.png');
const bio2 = '../assets/image/bio.png'
const name = 'GS.TSKH. Bùi Văn Ga'
const unit = 'Nguyên Thứ trưởng Bộ GD&ĐT - Bộ GD&ĐT'
const address = '41 Lê Duẩn, Tp.Đà Nẵng'
const phone = '0987654321'
const email = 'https://email@gmail.com'
const link = 'http://scv.udn.vn/Buivanga';




const header = 'Gương mặt tiêu biểu '

const TypicalPeopleScreen = () => {
  return (
    <View style={styles.container}>
      <Header  header={header}  />
      <ScrollView style={styles.displaycontainer} >
      <Bio image={bio1} name={name} unit={unit}  address={address} phone ={phone} email ={email} link = {link}  />
      <Bio image={bio1} name={name} unit={unit}  address={address} phone ={phone} email ={email} link = {link}  />
      <Bio image={bio1} name={name} unit={unit}  address={address} phone ={phone} email ={email} link = {link}  />
      <Bio image={bio1} name={name} unit={unit}  address={address} phone ={phone} email ={email} link = {link}  />
      
      </ScrollView>
     
    </View>
  )
}

export default TypicalPeopleScreen

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#e3e3e3',
    
},
displaycontainer : {
  width : '100%',
  //paddingHorizontal : 20,
  
},
})