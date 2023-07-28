import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React,  { useState, useRef } from 'react'
import Header from '../../components/Header'
import Work from '../../components/Work'
import { ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import DetailWork from '../../components/DetailWork';
import WorkPercent from '../../components/WorkPercent'

const percent1 = 90

const status1 = 'A'; 
const status2 = 'B'; 
const status3 = 'C'; 

const ReportWorkScreen = ({navigation}) => {
    const header = 'Báo cáo '
    
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebarDetailWork = () => {
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
          onSwipeComplete={toggleSidebarDetailWork}
          style={styles.sidebarModal}
        >
          <View style={styles.sidebar}>
            <DetailWork handleMenuItemPress={handleMenuItemPress} isSidebarOpen={isSidebarOpen} />
          </View>
        </Modal>

        {/* Header */}
        <View style={styles.header}>
          <Ionicons
            name="arrow-back-outline"
            size={20}
            color='#ffffff'
            style={{ left: 10 }}
            onPress={() => navigation.goBack()} // Note: Ensure you have the 'navigation' prop or adjust this as per your navigation setup
          />
          <View>
            <Text style={styles.textheader}>{header}</Text>
          </View>
          <TouchableOpacity onPress={toggleSidebarDetailWork}>
            <Image source={require('../../assets/image/Infor.png')} style={{ right: 0 }} />
          </TouchableOpacity>
        </View>

     <ScrollView style = {styles.displaycontainer}>
        <WorkPercent status="A" completionPercentage={100} />
        <WorkPercent status="B" completionPercentage={80} />
        <WorkPercent status="A" completionPercentage={90} />
        <WorkPercent status="B" completionPercentage={30} />
        <WorkPercent status="A" completionPercentage={20} />
        <WorkPercent status="A" completionPercentage={90} />
        <WorkPercent status="B" completionPercentage={50} />
        <WorkPercent status="A" completionPercentage={20} />
     </ScrollView>

     <TouchableOpacity style={{ width : '80%', height : 40, backgroundColor : '#1668c7', borderRadius : 10, justifyContent : 'center', alignItems : 'center', marginBottom : 10 }}  onPress={() => navigation.navigate('CreateWorkReport')}>
      <Text style={{ fontSize : 18, color : '#ffffff', fontWeight : '700' }}>Tạo báo cáo</Text>
     </TouchableOpacity>
    </View>
  )
}

export default ReportWorkScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#e3e3e3',
        alignItems :'center',
        
    },
    displaycontainer : {
        paddingHorizontal : 5,
        paddingVertical : 20,
    },
    sidebarModal: {
      margin: 0,
      justifyContent: 'flex-end',
      width: '90%',
      marginLeft: '30%',
    },
    sidebar: {
      flex: 1,
      width: '80%',
      height: '100%',
      backgroundColor: '#ffffff',
    },
    
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: '#1668C7',
    paddingTop: 40,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  textheader: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: 'bold',
  },
})