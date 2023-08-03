import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import DetailSchedule from '../../components/DetailSchedule';

const header = 'Chi tiết';
const process = 'A'
// const process = 'B'
// const process = 'C'
// const process = 'D'



const DetailScheduleScreen = ({navigation}) => {
    
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebarDetailSchedule = () => {
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
    dotColor = '#38B73D';
    displayStatus = 'Đã duyệt';
    break;
  case 'B':
    dotColor = '#F29100';
    displayStatus = 'Chưa duyệt';
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
      onSwipeComplete={toggleSidebarDetailSchedule}
      style={styles.sidebarModal}
    >
      <View style={styles.sidebar}>
        <DetailSchedule handleMenuItemPress={handleMenuItemPress} isSidebarOpen={isSidebarOpen}  />
      </View>
    </Modal>


    <View style={styles.header}>
      <TouchableOpacity  onPress={() => navigation.goBack()}>
      <Image source={require('../../assets/image/goback.png')} style={{ width : 40, height : 40 }} />
      </TouchableOpacity>
      
      <View>
        <Text style={styles.textheader}>{header}</Text>
      </View>
      <TouchableOpacity onPress={toggleSidebarDetailSchedule} >
    <Image source={require('../../assets/image/Infor.png')} style={{ right : 0 }}  />
    </TouchableOpacity>
    


    </View>
    <View style={styles.displaycontainer}>
    <View style={styles.row1}>
        <View style={styles.column1}>
        <Text style={styles.textcolumn1}>Người đăng ký</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.textcolumn2}>Trần Quang Chính</Text>
        </View>
    </View>
   
    <View style={styles.row1}>
        <View style={styles.column1}>
        <Text style={styles.textcolumn1}>Ngày đăng ký</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.textcolumn2}>06/07/2023</Text>
        </View>
    </View>
    <View style={styles.row}>
        <View style={styles.column1}>
        <Text style={styles.textcolumn1}>Ngày hẹn</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.textcolumn2}>Thứ Hai - 10/7/2023 </Text>
        </View>
    </View>
    <View style={styles.row}>
        <View style={styles.column1}>
        <Text style={styles.textcolumn1}>Giờ hẹn</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.textcolumn2}>14h30 </Text>
        </View>
    </View>

     <View style={styles.row}>
        <View style={styles.column1}>
        <Text style={styles.textcolumn1}>Nội dung</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.textcolumn2}>Tiếp đoàn Trường Quốc tế - Đại học Khon Kaen (Thái Lan) </Text>
        </View>
    </View>

    <View style={styles.row}>
        <View style={styles.column1}>
        <Text style={styles.textcolumn1}>Thành phần</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.textcolumn2}>PGĐ. Lê Quang Sơn; đại diện lãnh đạo các Ban: HTQT, CTHSSV, KHCN&MT </Text>
        </View>
    </View>

    <View style={styles.row1}>
        <View style={styles.column1}>
        <Text style={styles.textcolumn1}>Địa điểm</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.textcolumn2}>Phòng 0805 Khu B - 41 Lê Duẩn </Text>
        </View>
    </View>

    <View style={styles.row1}>
        <View style={styles.column1}>
        <Text style={styles.textcolumn1}>Chủ trì</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.textcolumn2}>PGĐ ĐHĐNPGS.TS. Lê Quang Sơn </Text>
        </View>
    </View>
    <View style={styles.row}>
        <View style={styles.column1}>
        <Text style={styles.textcolumn1}>Lần sửa cuối</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.textcolumn2}></Text>
        </View>
    </View>
    <View style={styles.row}>
        <View style={styles.column1}>
        <Text style={styles.textcolumn1}>Trạng thái</Text>
        </View>
        <View style={styles.column2}>
        <View style={{ backgroundColor : dotColor, width : '40%', height : 30, borderRadius : 8, justifyContent : 'center', alignContent :'center', alignItems : 'center' }}>
            <Text style={{ color : '#ffffff', fontWeight : '400'  }} >{displayStatus}</Text>
        </View>
        </View>
    </View>
    
</View>
    </View>
  )
}

export default DetailScheduleScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3e3e3',
      },
      header: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        backgroundColor: '#1668C7',
        paddingTop: 40,
        alignContent: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
      },
      textheader: {
        fontSize: 22,
        color: '#ffffff',
        fontWeight: 'bold',
      },

      displaycontainer : {
        width : '100%',
        paddingHorizontal : 10,
        paddingVertical : 10,
      },
      row : {
        flexDirection : 'row',
        width : '100%'
      },
      row1 : {
        flexDirection : 'row',
        width : '100%',
        borderBottomWidth : 0.3
        
      },
      column1 : {
        backgroundColor : '#B8B8B8',
        width : '30%',
         justifyContent : 'center',
         paddingHorizontal : 10,
           paddingVertical : 15,
      },
      column2 : {
        justifyContent : 'center',
        width : '70%',
        paddingHorizontal : 10,
        paddingVertical : 10,
        backgroundColor : '#ffffff'
      },
      textcolumn1 : {
        fontSize : 16,
        fontWeight : '700',
        color : '#000000',
        
      },
      textcolumn2 : {
        fontSize : 16,
        fontWeight : '400',
        color : '#000000',
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
        backgroundColor: '#fff',
      },
      
})