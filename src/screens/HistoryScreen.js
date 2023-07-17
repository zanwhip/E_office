import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import Header from '../components/Header'

import React from 'react'
const header = 'Lịch sử hình thành'
const HistoryScreen = () => {
  return (
    
    <View style={styles.container}>
      <Header header={header} />
    
       <ImageBackground source={require('../assets/image/background2.png')} style={styles.backgroundImage} > 
   
  <ScrollView>
    <View style={styles.contentdisplay}>
  <Text style={styles.content}>• Giai đoạn 1975 - 1976: Viện Đại học Đà Nẵng</Text>
     <Text style={styles.subcontent}>Thành lập theo Quyết định số 66/QĐ ngày 11/7/1975 của Ủy ban Nhân dân Cách mạng Khu Trung Trung bộ, đặt tại Hòa Khánh, Huyện Hòa Vang. Tỉnh Quảng Nam Đà Nẵng và tại 24 Trần Phú, Thành phố Đà Nẵng. PGS.TS Lý Ngọc Sáng là Trưởng Ban điều hành 04 Khoa: Cơ khí, Điện, Kinh tế và Dự bị đại học.</Text>
     <Text style={styles.subcontent}>• Giai đoạn 1975 - 1994: Các trường tiền thân hợp thành</Text>
      
    <Text style={styles.subcontent0}>Trường Đại học Bách Khoa Đà Nẵng</Text>
    {/* <Text style={styles.content}>Tầm nhìn đến năm 2045</Text> */}
    <Text style={styles.subcontent}>Thành lập ngày 27/10/1976 đặt tại Hòa Khánh và Bắc Mỹ An gồm 02 khối ngành: Kỹ thuật và Kinh tế. Hiệu trưởng qua các thời kỳ: PGS.TS Lý Ngọc Sáng (1976-1989), GS.TSKH Phan Kỳ Phùng (1989-1994).</Text>
    
    <Text style={styles.subcontent0}>Phân hiệu Đại học Kinh tế</Text>
    <Text style={styles.subcontent}>Năm 1985, Khối ngành Kinh tế thuộc Trường Đại học Bách khoa Đà Nẵng được tách ra thành Phân hiệu Đại học Kinh tế đặt tại Bắc Mỹ An gồm 03 Khoa: Công thương, Thống kê - Kế toán - Tài chính và Tại chức. Thầy Nguyễn Phiên giữ chức vụ Hiệu trưởng. Năm 1988 sát nhập về lại Trường Đại học Bách khoa Đà Nẵng. </Text>
    <Text style={styles.subcontent}>- Tài chính và Tại chức. Thầy Nguyễn Phiên giữ chức vụ Hiệu trưởng. Năm 1988 sát nhập về lại Trường Đại học Bách khoa Đà Nẵng. </Text>
    
    <Text style={styles.subcontent0}>Cơ sở Đại học Sư phạm Ngoại ngữ Đà Nẵng</Text>
    <Text style={styles.subcontent}>Thành lập ngày 14/4/1985 đặt tại 41 Lê Duẩn gồm 03 Khoa: Tiếng Anh, Tiếng Nga, Tiếng Pháp. Trưởng ban phụ trách qua các thời kỳ: Thầy Vũ Đình Khánh (1985 - 1986), PGS.TS Nguyễn Hào (1986 - 1988), TS Dương Lân (1988 - 1989), GS.TS Nguyễn Đức Chính (1989 - 1991), NGƯT Đặng Công Lý (1991 - 1994). </Text>
    
    <Text style={styles.subcontent0}>Trường Cao đẳng Sư phạm Quảng Nam Đà Nẵng</Text>
    <Text style={styles.subcontent}>Thành lập 03/11/1976 đặt tại Hòa Khánh, sát nhập thêm Trường Bồi dưỡng cán bộ quản lý giáo dục (1987), Trường Trung học Sư phạm QNĐN (1990). Hiệu trưởng qua các thời kỳ: PGS.TS Trần Xuân Nhĩ (1976-1981), TS Nguyễn Quang Tấn (1981-1987), thầy Trương Đình Nam (1987-1993), TS Nguyễn Khắc Sính (1993-1994). </Text>

    <Text style={styles.subcontent0}>Trường Công nhân Kỹ thuật Nguyễn Văn Trỗi</Text>
    <Text style={styles.subcontent}>Thành lập năm 1976 (tiền thân là Trường Kỹ thuật Đà Nẵng thành lập năm 1962) đặt tại 01 Cao Thắng. Hiệu trưởng qua các thời kỳ: Thầy Hoàng Thu Nam (1975 - 1976), thầy Nguyễn Ngọc Liên (1976 - 1980), thầy Lê Văn Tài (1980 - 1982), thầy Nguyễn Nghĩa (1982 - 1983), thầy Bùi Ngọc Quế (1983 - 1990), thầy Trương Ân (1990 - 1994).</Text>

    <Text style={styles.content}>• Giai đoạn 1994 - nay: Đại học Đà Nẵng</Text>
    <Text style={styles.subcontent}>Thành lập theo Nghị định 32/CP ngày 04/04/1994 của Chính phủ trên cơ sở sắp xếp, tổ chức lại các trường: Trường Đại học Bách khoa Đà Nẵng, Cơ sở Đại học Sư phạm Ngoại ngữ Đà Nẵng, Trường Cao đẳng Sư phạm Quảng Nam Đà Nẵng và Trường Công nhân Kỹ thuật Nguyễn Văn Trỗi. Trụ sở Đại học Đà Nẵng tại 41 Lê Duẩn.</Text>
    <Text style={styles.subcontent}>Năm 1994 gồm có 05 trường thành viên: Trường Đại học Kỹ thuật (năm 2004 đổi tên thành Trường Đại học Bách khoa), Trường Đại học Kinh tế và Quản trị Kinh doanh (năm 2004 đổi tên thành Trường Đại học Kinh tế), Trường Đại học Sư phạm, Trường Đại học Đại cương (1997 giải thể) và Trường Cao đẳng Công nghệ. Sau đó, các cơ sở giáo dục đại học thành viên lần lượt được thành lập:</Text>
     
     <View style={styles.timeline} >
        <Text style={styles.timelinetext}>
        <Text style={styles.year}>+ Năm 2002:</Text>
         Trường Đại học Ngoại ngữ (26/8/2002).</Text>
     </View>
     <View style={styles.timeline} >
        <Text style={styles.timelinetext}>
        <Text style={styles.year}>+ Năm 2003:</Text>
         Trường Cao đẳng Công nghệ Thông tin (14/10/2003).</Text>
     </View>
     <View style={styles.timeline} >
        <Text style={styles.timelinetext}>
        <Text style={styles.year}>+ Năm 2007:</Text>
         Phân hiệu Đại học Đà Nẵng tại Kon Tum (14/02/2007), Khoa Y - Dược (16/3/2007).</Text>
     </View>
     <View style={styles.timeline} >
        <Text style={styles.timelinetext}>
        <Text style={styles.year}>+ Năm 2014:</Text>
         Viện Nghiên cứu và Đào tạo Việt - Anh (02/10/2014), Khoa Giáo dục Thể chất (31/7/2014).</Text>
     </View>
     <View style={styles.timeline} >
     <Text style={styles.timelinetext}>
        <Text style={styles.year}>+ Năm 2017:</Text>
        Trường Đại học Sư phạm Kỹ thuật (08/11/2017), Khoa Công nghệ và Khoa Công nghệ Thông tin và Truyền thông (23/01/2017), Viện Công nghệ Quốc tế DNIIT (18/3/2017, hợp tác với Đại học Nice-Sophia Antipolis, CH Pháp).</Text>
     </View>
     <View style={styles.timeline} >
        <Text style={styles.timelinetext}>
        <Text style={styles.year}>+ Năm 2020:</Text>
         Trường Đại học Công nghệ thông tin và Truyền thông Việt - Hàn (03/01/2020), Viện Khoa học và công nghệ tiên tiến (12/8/2020), Khoa Giáo dục Quốc phòng và An ninh (05/11/2020).  </Text>
          </View>
     <Text style={styles.timelinetext}>Giám đốc ĐHĐN các nhiệm kỳ: GS.TSKH Phan Kỳ Phùng (1994 - 1999), GS.TSKH Phan Quang Xưng (1999 - 2005), GS.TSKH Bùi Văn Ga (2005 - 2010), GS.TS Trần Văn Nam (2010 - 2018), PGS.TS Nguyễn Ngọc Vũ (2018 đến nay).</Text>
   </View>
    
  </ScrollView>
     
      </ImageBackground>
   
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    
  },
  backgroundImage: {
    flex: 1,
    width : '100%',
    height : '100%',
    resizeMode: 'cover', 
    justifyContent: 'center', 
   // opacity : 0.2,
  },
  content : {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF0000',
    // textShadowColor: 'rgba(0, 0, 0, 0.5)', 
    // textShadowOffset: { width: 2, height: 2 }, 
    // textShadowRadius: 5, 
    textAlign : 'justify',
    zIndex: 1,
    marginVertical : 15,
  },
  subcontent0 : {
    textAlign : 'justify',
    fontSize : 20,
    fontWeight : 'bold',
    marginVertical : 15,
    color : '#125BAC'
  },
  subcontent : {
    textAlign : 'justify',
    fontSize : 16,
    fontWeight : '400',
    marginVertical : 5,
  },
  contentdisplay : {
    paddingHorizontal : 10,
    textAlign : 'justify',
    justifyContent :'center',
  },
  timeline : {
        flexDirection :'row'
  },
  year : {
   
    fontSize : 16,
    fontWeight : 'bold',
    marginVertical : 20,
  },
  timelinetext : {
    textAlign : 'justify',
    fontSize : 16,
    fontWeight : '400',
    marginVertical : 10,
  }
})