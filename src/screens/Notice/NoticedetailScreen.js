import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native';
import Extract from '../../components/Extract';
import Header from '../../components/Header';
import { TouchableOpacity } from 'react-native';

const number = '1569'
const date = '12-05-2023'
const issued = 'Viện Nghiên cứu và đào tạo Việt-Anh, ĐHĐN'
const signnumber = '247/TTr-VNCĐTVA'
const host = 'Ban Đào tạo'
const combination = 'Ban Thanh tra - Pháp chế, Ban Giám đốc'
const rate = 'Bình thường'
const header = 'Chi tiết thông báo '
const type = 'Tờ trình'
const deadline = ''
const status = 'Chưa xử lí'
const personsign = ''
const note = ''
const hostperson = 'TS.Trần Đình Khôi Quốc - Ban Đào tạo - nqphi@sdc.udn.vn'
const combinationperson = 'PGS.TS. Lê Thành Bắc - Ban Giám đốc - nqphi@sdc.udn.vn, ThS. Ngô Thị Hương Giang - Ban Thanh tra - Pháp chế - vanthu@id.udn.vn,'
const comment = ''
const NoticedetailScreen = ({navigation}) => {
  
    const handleGoBack = () => {
      navigation.goBack();
    }
  return (
    <View>
        <View >
     <View style={styles.header}>
     <Ionicons 
    name="arrow-back-outline"
    size={20}
    color='#ffffff'
    //style ={{ left : 10 }}
    onPress={handleGoBack}
    />
    <View >
    <Text style={styles.textheader}>{header}</Text>
    </View>
    <MaterialCommunityIcons 
    name="near-me"
    size={30}
    color='#ffffff'
    //style={{ marginRight : 2 }}
    onPress={() => navigation.navigate('Forwarding')}
    />
    
     </View>
    </View>
    
     <View style={styles.typecontainer}>
        <Text style={styles.typetext}>Loại hình: Văn bản đến</Text>
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
        <View style={{backgroundColor : '#E5B300', width : '35%',   paddingHorizontal : 10,}}>
            <Text style={{ marginHorizontal : 10, marginVertical : 20, fontSize : 16, fontWeight : '600' , color : '#ffffff'}}>Nội dung bút phê</Text>
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
     
     <TouchableOpacity 
     style={styles.buttonforward}
     onPress={() => navigation.navigate('ReplyEmail')}
     >
        <Feather 
         name="rotate-cw"
         size={30}
         color='#ffffff'
        />
     <Text style={styles.textforward}>Phản hồi email</Text>
     </TouchableOpacity>
     </View>
    </View>
  )
}

export default NoticedetailScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        //position: 'relative',
        
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
    height : '85%',
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
    height : 100,
    paddingVertical : 10,
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
 
  
  buttonforward : {
    position: 'absolute',
    bottom: 10, 
    left: '10%', 
    width: '80%',
    height: 50,
    backgroundColor: '#1668C7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection :'row'
  },
  textforward : {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal : 10
  }
  
})