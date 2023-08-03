  import { StyleSheet, Text, View, Modal, Image , TouchableWithoutFeedback } from 'react-native'
import React ,{useState} from 'react'
import { ScrollView } from 'react-native';
import Extract from '../../components/Extract';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const number = '1569'
const date = '12-05-2023'
const issued = 'Viện Nghiên cứu và đào tạo Việt-Anh, ĐHĐN'
const signnumber = '247/TTr-VNCĐTVA'
const host = 'Ban Đào tạo'
const combination = 'Ban Thanh tra - Pháp chế, Ban Giám đốc'
const rate = 'Bình thường'
const header = 'Chi tiết văn bản '
const type = 'Tờ trình'
const deadline = ''
const status = 'Chưa xử lí'
const personsign = ''
const note = ''
const hostperson = 'TS.Trần Đình Khôi Quốc - Ban Đào tạo - nqphi@sdc.udn.vn'
const combinationperson = 'PGS.TS. Lê Thành Bắc - Ban Giám đốc - nqphi@sdc.udn.vn, ThS. Ngô Thị Hương Giang - Ban Thanh tra - Pháp chế - vanthu@id.udn.vn,'
const comment = ''



const DocumentDetailScreen = () => {
  const navigation = useNavigation();
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleMenuPressForward = () => {
    handleImagePress()
    navigation.navigate('Forwarding');
  };
  const handleGoBack = () => {
    console.log('Chuyển tiếp văn bản');
    navigation.goBack();
  };
  const handleMenuPressReply = () => {
    handleImagePress()
    navigation.navigate('ReplyDocument');
  };
  const SidebarContent = () => {
      return (
      <View style={styles.sidebar}>
        
        <TouchableOpacity
        style={[styles.options, selectedOption === 'Chuyển tiếp văn bản' && styles.selectedOption]}
        onPress={handleMenuPressForward}
      >
        <Text style={[styles.text, selectedOption === 'Chuyển tiếp văn bản' && styles.selectedText]}>Chuyển tiếp văn bản</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.options, selectedOption === 'Phản hồi' && styles.selectedOption]}
        onPress={handleMenuPressReply}
      >
        <Text style={[styles.text, selectedOption === 'Phản hồi' && styles.selectedText]}>Phản hồi</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.options, selectedOption === 'Luồng văn bản' && styles.selectedOption]}
        onPress={handleMenuPressReply}
      >
        <Text style={[styles.text, selectedOption === 'Luồng văn bản' && styles.selectedText]}>Luồng văn bản</Text>
      </TouchableOpacity>
   </View>
    );
  };

  const handleImagePress = () => {
    setSidebarVisible(false);
  };

  return (
    <View style={styles.container}>
     <View>
     <View style={styles.header}>
      <TouchableOpacity onPress={handleGoBack}>
      <Image source={require('../../assets/image/goback.png')} style={{ width : 40, height : 40 }} />
      </TouchableOpacity>
   

    <View>
    <Text style={styles.textheader}>{header}</Text>
    </View>
    <TouchableOpacity onPress={() => setSidebarVisible(true)}>
  <Image source={require('../../assets/image/Infor.png')} style={{ right: 0 }} />
    </TouchableOpacity>
        </View>
        </View>

   <View style={styles.contentContainer}>
     <ScrollView style={styles.displaycontainer} >
     <Extract />
     <View style={styles.displaytable}>
        <View style={styles.row}>
        <View style={styles.column1}>
            <Text style={styles.text}>Số đến</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.text1}>{number}</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.column1}>
            <Text style={styles.text}>Ngày đến - Ngày VB</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.text1}>{date}</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.column1}>
            <Text style={styles.text}>Nơi ban hành</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.text1}>{issued}</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.column1}>
            <Text style={styles.text}>Số kí hiệu</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.text1}>{signnumber}</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.column1}>
            <Text style={styles.text}>Đơn vị chủ trì</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.text1}>{host}</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.column1}>
            <Text style={styles.text}>Đơn vị phối hợp</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.text1}>{combination}</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.column1}>
            <Text style={styles.text}>Độ khẩn</Text>
        </View>
        <View style={styles.column2}>
            <View style={{ backgroundColor :'#B8B8B8', width : '50%' , height : 30 , borderRadius : 10, marginHorizontal : 10, justifyContent :'center' }}>
            <Text style={styles.textradious}>{rate}</Text>
            </View>
           
            
            
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.column1}>
            <Text style={styles.text}>Loại văn bản</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.text1}>{type}</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.column1}>
            <Text style={styles.text}>Hạn xử lí</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.text1}>{deadline}</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.column1}>
            <Text style={styles.text}>Trạng thái</Text>
        </View>
        <View style={styles.column2}>
        <View style={{ backgroundColor :'#B8B8B8', width : '50%' , height : 30 , borderRadius : 10, marginHorizontal : 10, justifyContent :'center' }}>
            <Text style={styles.textradious}>{status}</Text>
            </View>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.column1}>
            <Text style={styles.text}>Người kí</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.text1}>{personsign}</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.column1}>
            <Text style={styles.text}>Ghi chú</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.text1}>{note}</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.column1}>
            <Text style={styles.text}>Người chủ trì</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.text1}>{hostperson}</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.column1}>
            <Text style={styles.text}>Người phối hợp</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.text1}>{combinationperson}</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.column1}>
            <Text  style={styles.text}>Nội dung bút phê</Text>
        </View>
        <View style={styles.column2}>
            <Text style={styles.text1}>{comment}</Text>
        </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.footertext}>Bạn cần vào trang web <Text style={{ fontStyle :'italic' ,  textDecorationLine: 'underline', }}>dev.office.azurecloud.vn</Text> để chỉnh sửa và xem chi tiết hơn</Text>
        </View>
     </View>
     </ScrollView>
     </View>





     <Modal
         animationIn="slideInLeft"
         animationOut="slideOutLeft"
        transparent={true}
        visible={isSidebarVisible}
        onRequestClose={() => setSidebarVisible(false)}
      > 
      <TouchableWithoutFeedback onPress={handleImagePress}>
        <View style={styles.modalContainer}>
        <View style={styles.sidebarModal}>
          <SidebarContent />
          </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>
</View>
    
  )
}

export default DocumentDetailScreen

const styles = StyleSheet.create({
    container : {
      position: 'absolute',
    flex: 1,
    backgroundColor: '#e3e3e3',
    width: '100%',
    },
  
  header : {
    flexDirection : 'row',
        width : '100%',
        height : 80,
        backgroundColor : '#1668C7',
        paddingTop : 40,
        alignContent : 'center',
        paddingHorizontal : 10,
        justifyContent : 'space-between',
        left : 0
        
},

textheader : {
    fontSize : 22,
    color : '#ffffff',
    fontWeight : 'bold',
  
},
  textheader : {
      fontSize : 22,
      color : '#ffffff',
      fontWeight : 'bold',
},
  typecontainer : {
    height : 50,
    alignContent : 'center',
    justifyContent : 'center',
    width : '100%',
     backgroundColor :'#e3e3e3'
  },
  typetext : {
    color : '#000000',
    fontSize : 20,
    fontWeight : "bold",
    marginLeft : 20,
},
  displaycontainer : {
    width : '100%',
    height : '65%',
    backgroundColor : '#e3e3e3',
},
  displaytable : {
    width : '100%',
    height : '100%',
    backgroundColor : '#e3e3e3',
   paddingHorizontal : 15,
   paddingVertical : 20
  },
  buttonstatus : {
    width : 105,
    height : 28,
    backgroundColor : '#999999',
     borderRadius : 8,
    paddingHorizontal : 10,
    paddingVertical : 5,
  }, 
  footer : {
    top : 0,
  },
  footertext : {
    fontSize : 12,
    fontWeight :'500'
  },
  extactdetail : {
    fontSize : 14,
    fontWeight : '400',
    fontStyle: 'normal',
    marginHorizontal : 10,
 },
  link : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingHorizontal : 10,
    marginLeft : 10,
    marginRight : 10,
    textDecorationLine: 'underline'
  },
  row : {
    backgroundColor :'#ffffff',
    width :'100%',
    flexDirection : 'row',
    borderBottomWidth : 0.5,
    borderBottomColor : '#B8B8B8'
  },
  column1 : {
    backgroundColor : '#EEEEEE',
    width : '35%',
     paddingHorizontal : 5,
     justifyContent : 'center'
    
  },
  column2 : {
    backgroundColor : '#ffffff',
    justifyContent : 'center',
    width : '60%',
    paddingVertical : 15
  },
  text : {
    marginHorizontal : 10,
    marginVertical : 20,
    fontSize : 18,
    fontWeight : '600'
  },
  text1 : {
    marginHorizontal : 10,
   // marginVertical : 20,
    fontSize : 17,
    fontWeight : '400'
  },
  textradious : {
    marginHorizontal : 10,
    // marginVertical : 20,
     fontSize : 17,
     fontWeight : '400',
     color : '#ffffff'
  },  
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end', // Align the Modal to the right side
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background to cover the entire screen
  },
  
  sidebarModal: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '75%',
    backgroundColor: '#fff',
    alignItems: 'flex-end', 
    paddingTop : '30%',
  },
  sidebar: {
    flex: 1,
    backgroundColor: '#fff',
    width :'100%'
  },
  options: {
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 0.2,
    borderColor: '#1668C7',
    paddingHorizontal: 30,
    justifyContent: 'center',
    position: 'relative', // Add this to position the unreadMessageButton absolutely
  },
  text: {
    fontWeight: '700',
    fontSize: 18,
    color: '#1668C7',
  },
  selectedOption: {
    backgroundColor: '#1668C7',
  },
  selectedText: {
    color: '#ffffff',
  },
  unreadMessageButton: {
    position: 'absolute',
   right : '10%',

    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})