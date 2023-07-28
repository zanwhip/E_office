import { StyleSheet, Text, View, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react'
import { ScrollView } from 'react-native';
import Imagepost from '../../components/Imagepost';
import Header from '../../components/Header';

const hotnew1 = require('../../assets/image/hotnew1.png');
const hotnew2 = require('../../assets/image/hotnew2.png');
const hotnew3 = require('../../assets/image/hotnew3.png');


const caption1 = 'Toàn cảnh Chương trình phát động InTE-UD 2023 tại ĐHĐN'
const caption2 = 'TS. Đỗ Lê Hưng Toàn-Chủ tịch Hội SV ĐHĐN chia sẻ với SV'
const caption3 = 'Chuyên gia khởi nghiệp giao lưu,truyền cảm hứng cho SV'

const openning = 'Tiếp nối thành công của hai mùa trước, Cuộc thi "Khởi nghiệp Công nghệ trong sinh viên” InTE-UD lần thứ III, “sân chơi” học thuật, sáng tạo của sinh viên (SV) do Hội SV Đại học Đà Nẵng (ĐHĐN) khởi xướng, phát động với sự đồng hành, tài trợ của Sở Khoa học và Công nghệ (KHCN) thành phố Đà Nẵng, Ngân hàng BIDV Chi nhánh Hải Vân năm nay tiếp tục được phát động, không những chỉ dành cho SV ĐHĐN mà còn lan tỏa, truyền cảm hứng cho SV các trường ĐH đổi mới sáng tạo (ĐMST) và khởi nghiệp.'

const title1 = ' Tham dự Chương trình phát động có Bà Lê Thị Thục-Phó Giám đốc Sở KHCN thành phố Đà Nẵng; Ông Lê Công Hùng-Phó Chủ tịch Trung ương Hội SV Việt Nam, Phó Bí thư Thành Đoàn, Chủ tịch Hội SV thành phố Đà Nẵng; PGS.TS. Lê Thành Bắc-Phó Giám đốc ĐHĐN; đại diện lãnh đạo các đơn vị, doanh nghiệp đối tác đồng hành; đại diện lãnh đạo các ban hữu quan và các trường ĐH thành viên của ĐHĐN cùng các chuyên gia và các nhóm SV đăng ký tham dự, quan tâm đến Cuộc thi'
const title2 = 'Phát biểu tại Chương trình phát động InTE-UD 2023, TS. Đỗ Lê Hưng Toàn-Chủ tịch Hội SV ĐHĐN, Trưởng Ban Tổ chức Cuộc thi cho biết, Cuộc thi năm nay nhằm tìm kiếm những hạt nhân, ý tưởng sáng tạo và khởi nghiệp trong SV, qua đó hỗ trợ, đồng hành với những ước mơ, khát vọng khởi nghiệp trẻ trong tương lai.'

const header = 'Tin nổi bật '

const HotnewScreen = ({navigation} ) => {
  return (
    <View style={styles.container}>
    <Header header={header} />
     <ScrollView style={styles.displaycontainer}>
        <View style={styles.caption}>
            <Text style={styles.captiontext}>Phát động Cuộc thi “Khởi nghiệp Công nghệ trong sinh viên” InTE-UD lần thứ III: Góp phần kiến tạo cộng đồng khởi nghiệp trẻ từ giảng đường</Text>
        </View>
        <View style={styles.date}>
        <Feather 
            name="clock"
            size={20}
            color='#000000'
        />
            <Text style={styles.datetext}>09/07/2023</Text>
        </View>
        <View style={styles.openning}>
        <Text style={styles.openningtext}>{openning}</Text>
        </View>
        <Imagepost image={hotnew1} caption={caption1} style={styles.content} />
        <Text style={styles.newtext}>{title1}</Text>
        <Imagepost image={hotnew2} caption={caption2} />
        <Text style={styles.newtext}>{title2}</Text>
        <Imagepost image={hotnew3} caption={caption3}/>  
     </ScrollView>
    </View>
  )
}

export default HotnewScreen

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#e3e3e3',
    
},
displaycontainer : {
  width : '100%',
  paddingHorizontal : 20,

},
  caption : {
    width : '100%',
    marginTop : 10,
    justifyContent : 'center',
    textAlign : 'justify',
    //paddingHorizontal : 15,


  },
  captiontext :{
    fontSize : 16,
    fontWeight : 'bold',
    color : '#1668C7',
    justifyContent : 'center',
    textAlign : 'justify',

  },
  date : {
    flexDirection : 'row',
    width : '100%',
    marginTop : 10,
    paddingHorizontal : 15,

  },
  datetext : {
    fontStyle : 'italic',
    fontSize : 14,
    marginLeft : 10,
  }, 
  openning : {
    //paddingHorizontal : 10,
    marginTop : 10,
    justifyContent : 'center',
    textAlign : 'justify',
   

  },
  openningtext : {
    fontSize : 15,
    fontWeight : 600,
    textAlign : 'justify',
    fontWeight : 'bold'
  },
  newtext : {
    fontSize : 15,
    fontWeight : 600,
    textAlign : 'justify',
    fontWeight : '400'
  }
})