import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import Header from '../../components/Header'

import React from 'react'
const header = 'Sứ mạng - Tầm nhìn'
const MissionScreen = () => {
  return (
    
    <View style={styles.container}>
      <Header header={header} />
    
       <ImageBackground source={require('../../assets/image/background1.png')} style={styles.backgroundImage} > 
   
  <ScrollView>
    <View style={styles.contentdisplay}>
  <Text style={styles.content}>Sứ mạng</Text>
    <Text style={styles.subcontent}>Đại học Đà Nẵng là cơ sở đào tạo, nghiên cứu khoa học và chuyển giao công nghệ nhằm thực hiện nhiệm vụ chiến lược quốc gia, nhiệm vụ phát triển vùng của đất nước, là nơi cung cấp nguồn nhân lực có tư duy đổi mới, năng lực sáng nghiệp và giàu tính nhân văn; có bản lĩnh, thích ứng nhanh và có khả năng làm việc hiệu quả trong môi trường hội nhập quốc tế; tiên phong giữ gìn bản sắc văn hóa dân tộc, truyền bá tri thức khoa học, góp phần phát triển đất nước phồn vinh, hạnh phúc. </Text>
    <Text style={styles.content}>Tầm nhìn đến năm 2045</Text>
    <Text style={styles.subcontent}>Đại học Đà Nẵng là trung tâm đào tạo, nghiên cứu khoa học và chuyển giao công nghệ đa ngành, đa lĩnh vực chất lượng cao, ngang tầm khu vực và quốc tế. </Text>
    <Text style={styles.subcontent}> Đại học Đà Nẵng là một trong các đại học hàng đầu Việt Nam với nhiều ngành mũi nhọn trong các lĩnh vực về kỹ thuật, kinh tế, quản trị, khoa học tự nhiên, giáo dục, xã hội và nhân văn, chăm sóc sức khỏe; là trung tâm đào tạo, hợp tác nghiên cứu và triển khai ứng dụng khoa học công nghệ mang tầm quốc gia và quốc tế. </Text>
    <Text style={styles.content}>Mục tiêu chung</Text>
    <Text style={styles.subcontent}>Phát triển Đại học Đà Nẵng thành trung tâm đào tạo nguồn nhân lực tinh hoa, nghiên cứu khoa học, đổi mới sáng tạo, chuyển giao tri thức và công nghệ theo chuẩn mực quốc tế, đáp ứng nhu cầu phát triển kinh tế-xã hội trong kỷ nguyên số; tham vấn chính sách và giải quyết các vấn đề về kinh tế-xã hội, giáo dục-đào tạo, khoa học công nghệ, đổi mới sáng tạo của quốc gia và cả vùng. </Text>
    <Text style={styles.content}>Giá trị cốt lõi</Text>
    <Text style={styles.subcontent}>Chất lượng - Sáng tạo - Nhân văn - Phụng sự xã hội </Text>
    <Text style={styles.subcontent}>Chất lượng: Chất lượng đào tạo, nghiên cứu khoa học và phục vụ cộng đồng từng bước được nâng lên đạt chuẩn mực quốc tế; đảm bảo sinh viên tốt nghiệp từ Đại học Đà Nẵng có trình độ, kỹ năng tương đương với sinh viên các nước ASEAN và thế giới.</Text>
    <Text style={styles.subcontent}>Sáng tạo: Thể hiện tinh thần đổi mới cách nghĩ, cách làm, biến thách thức thành cơ hội, là nơi sản sinh ra tri thức mới; sinh viên tốt nghiệp ra trường có tính năng động, sáng nghiệp cao, thích nghi nhanh với môi trường hội nhập và có tinh thần khởi nghiệp.</Text>
    <Text style={styles.subcontent}>Nhân văn: Đề cao giá trị văn hóa, tôn trọng nhân cách, trung thực, độ lượng, vị tha, khoan dung; có tinh thần hợp tác, tôn trọng lẫn nhau để cùng đạt mục tiêu. </Text>
    <Text style={styles.subcontent}>Phụng sự xã hội: Viên chức và người học của Đại học Đà Nẵng có ý thức, năng lực tốt nhất để phục vụ Tổ quốc, phục vụ cộng đồng, là mục tiêu phấn đấu trong các hoạt động đào tạo và nghiên cứu khoa học tại Đại học Đà Nẵng. </Text>
    </View>
  </ScrollView>
     
      </ImageBackground>
   
    </View>
  )
}

export default MissionScreen

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
    color: '#000000',
    // textShadowColor: 'rgba(0, 0, 0, 0.5)', 
    // textShadowOffset: { width: 2, height: 2 }, 
    // textShadowRadius: 5, 
    textAlign : 'justify',
    zIndex: 1,
    marginVertical : 20,
  },
  subcontent : {
    textAlign : 'justify',
    fontSize : 16,
    fontWeight : '400',
    marginVertical : 20,
  },
  contentdisplay : {
    paddingHorizontal : 10,
    textAlign : 'justify',
    justifyContent :'center',
  }
})