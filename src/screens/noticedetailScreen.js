import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
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
        <Text style={styles.typetexxt}>Loại hình: Văn bản đến</Text>
     </View>
     <ScrollView style={styles.displaycontainer} >
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
                <Text style={styles.properties}>Trích yếu</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
                <Text style={styles.propertiesdetail}>Tờ trình về việc phê duyệt kế hoạch đào tạo năm học 2023 - 2024 của Viện Nghiên cứu và Đào tạo Việt - Anh</Text>
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
                <Text style={styles.propertiesdetail}></Text>
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
                <Text style={styles.propertiesdetail}></Text>
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
            <View style={styles.propertiesdetailcontainer}>
                <Text style={styles.propertiesdetail}>TS. Trần Đình Khôi Quốc - Ban Đào tạo - nqphi@sdc.udn.vn,</Text>
            </View>
        </View>
        <View>
            <View style={styles.propertiescontainter}>
                <Text style={styles.properties}>Người phối hợp</Text>
            </View>
            <View style={styles.propertiesdetailcontainer}>
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
     </ScrollView>
    </View>
  )
}

export default noticedetailScreen

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
  typecontainer : {
    height : 50,
    alignContent : 'center',
    justifyContent : 'center',
    width : '100%',
    //marginTop : 15,
   // marginBottom : 15,
    backgroundColor :'#ffffff'
  },
  typetexxt : {
    color : '#000000',
    fontSize : 20,
    fontWeight : "bold",
    marginLeft : 20,
    
  },
  displaycontainer : {
    width : '100%',
    height : '100%',
    backgroundColor : '#ffffff'
  },
  propertiescontainter : {
    backgroundColor : '#EEEEEE',
    width : '100%',
    height : 38,
    paddingVertical : 8,
    paddingHorizontal : 16

  },
  propertiesdetailcontainer : {
    backgroundColor : '#ffffff',
    width : '100%',
    height : 38,
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
  }
})