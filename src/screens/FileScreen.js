import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../components/Header';
import { TouchableOpacity } from 'react-native';
import DetailWork from '../components/DetailWork';
import Modal from 'react-native-modal';

const header = 'Tài liệu'

const FileScreen = () => {
    
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
        <DetailWork handleMenuItemPress={handleMenuItemPress} isSidebarOpen={isSidebarOpen}  />
      </View>
    </Modal>

     <View style={styles.header}>
     <Ionicons 
    name="arrow-back-outline"
    size={20}
    color='#ffffff'
    style ={{ left : 10 }}
    onPress={() => navigation.goBack()}
    />
   
    <View >
    <Text style={styles.textheader}>{header}</Text>
    </View>
    <TouchableOpacity onPress={toggleSidebarDetailWork}>
    <Image source={require('../assets/image/Infor.png')} style={{ right : 0 }}  />
    </TouchableOpacity>
    </View>
       
    <View style={styles.displaycontainer}>
    <View style={styles.file}>
    <Text style={{ fontSize : 16,  }}>files/c4gJ_1631171358.xlsx</Text>
    <Entypo 
    name="download"
    size={20}
    color='#1668C7'
    style ={{ left : 10 }}
       />
    </View>
    <View style={styles.file}>
    <Text style={{ fontSize : 16,  }}>files/c4gJ_1631171358.xlsx</Text>
    <Entypo 
    name="download"
    size={20}
    color='#1668C7'
    style ={{ left : 10 }}
       />
    </View>
    <View style={styles.file}>
    <Text style={{ fontSize : 16,  }}>files/c4gJ_1631171358.xlsx</Text>
    <Entypo 
    name="download"
    size={20}
    color='#1668C7'
    style ={{ left : 10 }}
       />
    </View>
    <View style={styles.file}>
    <Text style={{ fontSize : 16,  }}>files/c4gJ_1631171358.xlsx</Text>
    <Entypo 
    name="download"
    size={20}
    color='#1668C7'
    style ={{ left : 10 }}
       />
    </View>
    </View>
    </View>
  )
}

export default FileScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#ffffff',
        
    },
    header : {
        flexDirection : 'row',
        width : '100%',
        height : 80,
        backgroundColor : '#1668C7',
        paddingTop : 40,
        alignContent : 'center',
        paddingHorizontal : 10,
               
        justifyContent : 'space-between'
  
    },
    textheader : {
        fontSize : 22,
        color : '#ffffff',
        fontWeight : 'bold',
      
    },
    container : {
        flex: 1,
        backgroundColor: '#e3e3e3',
        
    },
    displaycontainer : {
        paddingHorizontal : 10,
        paddingVertical : 20,
    },
    
    textcontainer : {
        width : '100%',
        justifyContent : 'center',
        backgroundColor : '#000000',
        alignContent : 'center',
        textAlign : 'center',
        height : '100%'
      },
      
    sidebarModal: {
        margin: 0,
        justifyContent: 'flex-end',
        width : '90%',
        marginLeft : '30%',

      },
      sidebar: {
        flex: 1,       
        width: '80%',
        height: '100%',
        backgroundColor: '#ffffff',
      },
      file : {
        width : '100%',
        height : 60,
        backgroundColor  : '#ffffff',
        borderRadius : 10,
        borderWidth : 0.2,
        alignItems : 'center',
        marginVertical : 10,
        paddingHorizontal : 20,
        flexDirection : 'row',
        justifyContent :'space-between'
        
      }
})