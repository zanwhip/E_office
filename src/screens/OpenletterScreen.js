import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { ScrollView } from 'react-native'

const header = 'Lời ngỏ'

const OpenletterScreen = ({navigation}) => {
  return (
    <View styles={styles.container}>
      <Header header={header}/>
      <ScrollView style={styles.displaycontainer}>
      <Image source={require('../assets/image/openningletter.jpg')} style={styles.image} />
      <Text style={styles.name}>PGS.TS.NGƯT LƯU TRANG</Text>
      <Text style={styles.position}>HIỆU TRƯỞNG</Text>
      <View style={styles.openninglettercontainer}>
      <Text style={styles.openningletter}>Chào mừng các bạn sinh viên, học viên đến với trường Đại học Sư phạm – Đại học Đà Nẵng, một trường đại học công lập năng động, một cơ sở đào tạo và nghiên cứu khoa học có uy tín, nơi đồng hành và trao cho bạn nhiều cơ hội để khơi nguồn sáng tạo, đánh thức đam mê và khởi nghiệp thành công. 
</Text>
      <Text style={styles.openningletter}>Trường Đại học Sư phạm, Đại học Đà Nẵng được thành lập từ những cơ sở giáo dục – đào tạo tiền thân sau ngày giải phóng miền Nam, thống nhất đất nước; đến nay, Trường đã có hơn 40 năm tuổi.</Text>  
      <Text style={styles.openningletter}>Trong cuộc hành trình hơn 4 thập kỷ qua, trên mỗi chặng đường xây dựng và phát triển, biết bao thế hệ thầy và trò Trường Đại học Sư phạm đã vượt qua bao khó khăn thử thách để vươn lên trong giảng dạy và học tập để đưa nhà trường trở thành một trong những Trường Đại học Sư phạm trọng điểm quốc gia đồng thời là trung tâm nghiên cứu khoa học giáo dục và ứng dụng công nghệ phục vụ yêu cầu phát triển kinh tế - xã hội các tỉnh, thành phố miền Trung - Tây Nguyên nói riêng và cả nước nói chung.
</Text>
      <Text style={styles.openningletter}>Tích cực đổi mới và phát triển mọi mặt, Trường Đại học Sư phạm vui mừng chào đón các bạn đến thăm, làm việc, công tác và học tập vì tương lai của chính chúng ta trên hành trình phát triển bền vững và vươn xa hội nhập quốc tế. Phương châm của nhà trường là: Thành đạt của người học là thành công của nhà trường!
</Text>
      <Text style={styles.openningletter}>Trân trọng chào đón các bạn!</Text>
      </View>
      
      </ScrollView>
      
    </View>
  )
}

export default OpenletterScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#e3e3e3',
        height : 600,
       
    },
    displaycontainer : {
        width : '100%',
        //alignItems  : 'center',
        //justifyContent : 'center',
        backgroundColor : "#e3e3e3",
        paddingHorizontal : 15,
    },
    image : {
        marginTop : 30,
        marginHorizontal : '30%',
        height : 166,
        width : 133,
    },
    name : {
        marginHorizontal : '15%',
        marginTop : 25,
        fontSize : 18,
        fontWeight : 'bold',
        
    },
    position : {
    color : '#fc1c03',
    fontSize : 16,
    fontWeight : '800',
    marginVertical : 10,
    marginHorizontal : '34%',
    },
    openningletter : {
        textAlign : 'justify',
        fontSize : 14,
        fontWeight : 400,
        marginVertical : 5,
        
        
    },
    openninglettercontainer : {
        textAlign : 'justify',
        justifyContent :'center',
        marginBottom : 200,
        
    }
})