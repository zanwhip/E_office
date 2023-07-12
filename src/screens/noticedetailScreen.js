import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native';



const noticedetailScreen = () => {
  return (
    <View>
     <View style={styles.header}>
    <Ionicons 
    name="arrow-back-outline"
    size={20}
    color='#ffffff'
    />
    <Text style={styles.textheader}>Chi tiết thông báo</Text>
     </View>
     <View style={styles.typecontainer}>
        <Text style={styles.typetext}>Loại hình: Văn bản đến</Text>
     </View>
   
     <ScrollView style={styles.displaycontainer} >
        <View style={styles.extraccontainer}>
        <View style={styles.extact}> 
            <Text style={styles.properties}>Trích yếu</Text> 
            </View>
        <Text style={styles.extactdetail}>Tờ trình về việc phê duyệt kế hoạch đào tạo năm học 2023 - 2024 của Viện Nghiên cứu và Đào tạo Việt - Anh</Text>
        <View style={styles.link}>
        <AntDesign 
    name="link"
    size={20}
    color='#1768D4'
    />
            <Text style={{ color : '#1768D4' }}>1569-247-ttr-vncdtva_1683875983.pdf</Text>
        </View>
        </View>

        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>Số đến</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
                <Text style={styles.propertiesdetail}>1569</Text>
            </View>
        </View>
        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>Ngày đến</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
                <Text style={styles.propertiesdetail}>12-05-2023</Text>
            </View>
        </View>
        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>Nơi ban hành</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
                <Text style={styles.propertiesdetail}>Viện Nghiên cứu và Đào tạo Việt-Anh, ĐHĐN</Text>
            </View>
        </View>
        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>Số kí hiệu</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
                <Text style={styles.propertiesdetail}>247/TTr-VNCĐTVA</Text>
            </View>
        </View>
        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>Ngày VB</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
                <Text style={styles.propertiesdetail}>12-05-2023</Text>
            </View>
        </View>
       
        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>Đơn vị chủ trì</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
                <Text style={styles.propertiesdetail}>Ban Đào tạo</Text>
            </View>
        </View>
        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>Đơn vị phối hợp</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
                <Text style={styles.propertiesdetail}>Ban Thanh tra - Pháp chế, Ban Giám đốc,</Text>
            </View>
        </View>
        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>Độ khẩn</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
                <View style={styles.buttonstatus}>
                    <Text>Bình thường</Text>
                </View>
            </View>
        </View>
        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>Loại văn bản</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
                <Text style={styles.propertiesdetail}>Tờ trình</Text>
            </View>
        </View>
        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>Hạn xử lý</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
                <Text style={styles.propertiesdetail}></Text>
            </View>
        </View>
        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>Trạng thái</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
            <View style={styles.buttonstatus}>
                    <Text>Chưa xử lí</Text>
                </View>
            </View>
        </View>
        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>Người ký</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
                <Text style={styles.propertiesdetail}></Text>
            </View>
        </View>
        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>File văn bản</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
                <Text style={styles.propertiesdetail}>1569-247-ttr-vncdtva_1683875983.pdf</Text>
            </View>
        </View>
        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>Ghi chú</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
                <Text style={styles.propertiesdetail}></Text>
            </View>
        </View>
        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>Người chủ trì</Text>
            </View>
            <View style={styles.propertiesdetailcontainer1}>
                <Text style={styles.propertiesdetail}>TS. Trần Đình Khôi Quốc - Ban Đào tạo - nqphi@sdc.udn.vn,</Text>
            </View>
        </View>
        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>Người phối hợp</Text>
            </View>
            <View style={styles.propertiesdetailcontainer2}>
                <Text style={styles.propertiesdetail}>PGS.TS. Lê Thành Bắc - Ban Giám đốc - nqphi@sdc.udn.vn, ThS. Ngô Thị Hương Giang - Ban Thanh tra - Pháp chế - vanthu@id.udn.vn,</Text>
            </View>
        </View>
        <View>
            <View style={styles.propertiescontainter1}>
                <Text style={styles.properties}>Nội dung bút phê</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
                <Text style={styles.propertiesdetail}></Text>
            </View>
        </View>
        <View style={styles.footer}>
            <Text>Bạn cần vào trang web dev.office.azurecloud.vn để chỉnh sửa và xem chi tiết hơn</Text>
        </View>
     </ScrollView>
    </View>
  )
}

export default noticedetailScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
       
        
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
  typecontainer : {
    height : 50,
    alignContent : 'center',
    justifyContent : 'center',
    width : '100%',
    //marginTop : 15,
   // marginBottom : 15,
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
    height : 520,
    backgroundColor : '#e3e3e3',
  },
  propertiescontainter : {
    backgroundColor : '#EEEEEE',
    width : '100%',
    height : 38,
    paddingVertical : 8,
    paddingHorizontal : 16,
   // marginTop : 20,

  },
  propertiesdetailcontainer : {
    backgroundColor : '#ffffff',
    width : '100%',
    height : 38,
    paddingVertical : 8,
    paddingHorizontal : 16
    
  },
  propertiesdetailcontainer1 : {
    backgroundColor : '#ffffff',
    width : '100%',
    height : 50,
    paddingVertical : 8,
    paddingHorizontal : 16
  },
  propertiesdetailcontainer2 : {
    backgroundColor : '#ffffff',
    width : '100%',
    height : 80,
    paddingVertical : 8,
    paddingHorizontal : 16
  },
  properties : {
    fontSize : 16,
    fontWeight : '500',
    fontStyle: 'normal',
  
  },
  propertiesdetail : {
    fontSize : 14,
    fontWeight : '400',
    fontStyle: 'normal',
  },
  propertiescontainter1 : {
    backgroundColor : '#FFC804',
    width : '100%',
    height : 38,
    paddingVertical : 8,
    paddingHorizontal : 16
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
    paddingHorizontal : 20,
    paddingVertical : 10,
  },
  extraccontainer : {
    width : 330,
    height : 160,
    backgroundColor : '#ffffff',
    //paddingBottom : 10,
    marginLeft : 15,
    borderRadius : 20,
    paddingBottom : 10,
  },
  extact: {
    width : 330,
    height : 40,
    borderRadius: 10,
    backgroundColor : '#EEEEEE',
    paddingVertical : 10,
    

  },
  extactdetail : {
    fontSize : 14,
    fontWeight : '400',
    fontStyle: 'normal',
    marginHorizontal : 10,
    marginVertical : 10

  },
  link : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingHorizontal : 10,
    marginLeft : 10,
    marginRight : 10,
    textDecorationLine: 'underline'
  }
})