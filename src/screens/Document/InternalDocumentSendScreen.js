import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Documentary from '../../components/Documentary';
import { ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../components/Header';
import Modal from 'react-native-modal';
import { TextInput } from 'react-native';
//import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import Filter from '../../components/Filter';

const header = 'Văn bản nội bộ đi'
const status1 = 'A'; 
const status2 = 'B'; 
const status3 = 'C'; 
const InternalDocumentSendScreen = () => {


  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebarFilter = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleMenuItemPress = () => {
      setSidebarOpen(false);
  }


  return (
    <View style={styles.container}>
       <Modal
      isVisible={isSidebarOpen}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      swipeDirection="right"
      onSwipeComplete={toggleSidebarFilter}
      style={styles.sidebarModal}
    >
      <View style={styles.sidebar}>
         <Filter />
      </View>
    </Modal>

     <Header header={header} />
     
     <View style={{ width : '100%', height : 60,flexDirection : 'row', justifyContent : 'center' }}>
      <View style={{ backgroundColor : '#ffffff', width : '80%', flexDirection :'row' , borderRadius : 8, height : 50, marginHorizontal : 10,marginVertical : 10,borderWidth : 0.5, paddingHorizontal : 10,}}>
      <Ionicons name="search" size={30} color="#e3e3e3" style={{ marginVertical : 10 }} />
      <TextInput name="content" placeholder='Nhập thông tin...'/>
      </View>
       <TouchableOpacity 
       style={{  width : '10%',height : '80%', backgroundColor : '#1668C7',marginHorizontal : 10,marginVertical : 8, alignItems: 'center', justifyContent: 'center', borderRadius : 9 }}
        onPress={toggleSidebarFilter}>
        <Image source={require('../../assets/image/filter.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      </View>
     <View style={styles.typecontainer}>
        <Text style={styles.typetext}>Văn bản : 24</Text>
     </View>
     <ScrollView style={styles.displaycontainer}>
     <Documentary />
     <Documentary />
     <Documentary />
     <Documentary />
    
     </ScrollView>
      
 
    </View>
  )
}

export default InternalDocumentSendScreen

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#ffffff',
    
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
displaycontainer : {
  width : '100%',
  height : 520,
  backgroundColor : '#ffffff',
  paddingHorizontal : 10,
 
},

typecontainer : {
  height : 50,
  alignContent : 'center',
  justifyContent : 'center',
  width : '100%',
  //marginTop : 15,
 // marginBottom : 15,
  backgroundColor :'#ffffff'
},
typetext : {
  color : '#000000',
  fontSize : 14,
  fontWeight : "400",
  marginLeft : 20,
  
},

sidebarModal: {
  margin: 0,
  justifyContent: 'flex-end',
  width : '100%',
  //marginLeft : '30%',

},
sidebar: {
  flex: 1,       
  width: '100%',
  height: '100%',
  backgroundColor: '#f2f2f2',
},
})