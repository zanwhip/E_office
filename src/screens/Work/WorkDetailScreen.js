import { StyleSheet, Text, View, Image } from 'react-native'
import React ,{useState}from 'react'
import { ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native';
import DetailWork from '../../components/DetailWork';
import Entypo from 'react-native-vector-icons/Entypo';

const prority = 'Cao'
const time = '14/04/2003 - 14/05/2023'
const process = 'B'
const supervisor = 'Trần Nguyễn Việt Hưng'
const supporter = 'Trần Nguyễn Việt Hưng'
const work = 'Phân tích dự án'

const header = 'Chi tiết'

const WorkDetailScreen = ({navigation}) => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebarDetailWork = () => {
      setSidebarOpen(!isSidebarOpen);
    };
    const handleMenuItemPress = () => {
        setSidebarOpen(false);
    }




    let dotColor = '';
let displayStatus = '';


// Xác định màu sắc dựa trên trạng thái
switch (process) {
    case 'A':
      dotColor = '#20AD72';
      displayStatus = 'Đã hoàn thiên';
      break;
    case 'B':
      dotColor = '#F29100';
      displayStatus = 'Đang thưc hiện';
      break;
    case 'C':
      dotColor = '#AAAAAA';
      displayStatus = 'Chưa triển khai';
      break;
      case 'D':
          dotColor = '#FF4444';
          displayStatus = 'Đang tạm hoãn';
          break;
    default:
      dotColor = '#AAAAAA';
      break;
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
    <Image source={require('../../assets/image/Infor.png')} style={{ right : 0 }}  />
    </TouchableOpacity>
   
    </View>

            <ScrollView style={styles.displaycontainer}>
                <Text style={{ fontSize : 20, fontWeight : 'bold', marginVertical : 15, marginHorizontal : 10, }}>Phân tích dự án</Text>
            <View style={{ flexDirection : 'row' , marginVertical : 8 }}>
        <Text style={{ width : '45%' , fontSize : 18, fontWeight : '600'}}>Ưu tiên: </Text>
        <Text style={{ fontWeight : '400' , fontSize : 16 }}> {prority} </Text>
      </View>

      <View style={{ flexDirection : 'row' , marginVertical : 8 }}>
        <Text style={{ width : '45%' , fontSize : 18, fontWeight : '600'}}>Thời gian: </Text>
        <Text style={{ fontWeight : '400' , fontSize : 16 }} > {time} </Text>
      </View>

     
      <View style={{ flexDirection : 'row' , marginVertical : 8 }}>
        <Text style={{ width : '45%' , fontSize : 18, fontWeight : '600'}}>Trạng thái:  </Text>
        <View style={{ backgroundColor : dotColor, width : '35%', height : 30, borderRadius : 8, justifyContent : 'center', alignContent :'center', alignItems : 'center' }}>
            <Text style={{ color : '#ffffff', fontWeight : '400'  }} >{displayStatus}</Text>
        </View>
      </View>

      <View style={{ flexDirection : 'row' , marginVertical : 8}}>
        <Text style={{ width : '45%' , fontSize : 18, fontWeight : '600'}}>Người giám sát</Text>
        <Text style={{ fontWeight : '400' , fontSize : 16 }} > {supervisor} </Text>
      </View>

      <View style={{ flexDirection : 'row' , marginVertical : 8 }}>
        <Text style={{ width : '45%' , fontSize : 18, fontWeight : '600'}}>Người phối hợp </Text>
        <Text style={{ fontWeight : '400' , fontSize : 16 }}> {supporter} </Text>
      </View>

      <View style={{ flexDirection : 'row' , marginVertical : 8 }}>
        <Text style={{ width : '45%' , fontSize : 18, fontWeight : '600'}}>Nội dung công việc </Text>
        <Text style={{ fontWeight : '400' , fontSize : 16 }}> {work} </Text>
      </View>

    {/* Tài liệu */}
      <Text style={{ fontSize : 20, fontWeight :'700', marginVertical : 20, }}>Tài liệu</Text>
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
            </ScrollView>
     
       </View>
  )
}

export default WorkDetailScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#ffffff',
        
    },
    displaycontainer : {
        paddingHorizontal : 10,
        paddingVertical : 5,
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
    textcontainer : {
      width : '100%',
      justifyContent : 'center',
      backgroundColor : '#000000',
      alignContent : 'center',
      textAlign : 'center',
      height : '100%'
    },
    textheader : {
        fontSize : 22,
        color : '#ffffff',
        fontWeight : 'bold',
      
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