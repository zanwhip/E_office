import { StyleSheet, Text, View, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React , {useState}from 'react'
import { TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Modal from 'react-native-modal';

const WelcomeScreen = ({navigation}) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
   
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
    const handleMenuItemPress = () => {
        setSidebarOpen(false);
    }
    
  return (
    
    <View style={styles.container}>
    <Modal
      isVisible={isSidebarOpen}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      swipeDirection="left"
      onSwipeComplete={toggleSidebar}
      style={styles.sidebarModal}
    >
      <View style={styles.sidebar} >
        <Menu handleMenuItemPress={handleMenuItemPress} isSidebarOpen={isSidebarOpen}  />
        
      </View>
    </Modal>
        
    <ScrollView style={styles.scrollContainer}>
    <View style={styles.Header}>
     <View style={styles.iconheader}>
        <TouchableOpacity style={{ width : 50 }} onPress={toggleSidebar} >
        <Entypo name="menu"
           
          size={30}
          color='#ffffff'
          />
        </TouchableOpacity >
     <TouchableOpacity style={{right : 0}}  onPress={() => navigation.navigate('Notice')}>
     <FontAwesome name="bell"
          size={30}
          color='#ffffff'
         style={styles.bellicon}
        
         />
     </TouchableOpacity>
          
        </View>
        <Text style={styles.textheader}>XIN CHÀO</Text>
        <Text style={styles.subtextheader}>admin_office@id.udn.vn</Text>
     </View>
     <View style={styles.banner}>
        <TouchableOpacity 
        style={styles.bannerrow}
        onPress={() => navigation.navigate('Introduce')}
        >
        <Image source={require('../assets/image/icon1.png')} style={styles.image} />
        <Text style={styles.textbanner}>Giới thiệu UDN</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.bannerrow}
        onPress={() => navigation.navigate('New')}>
        <Image source={require('../assets/image/icon2.png')} 
        style={styles.image} 
        
        />
        <Text style={styles.textbanner}>Tin tức - Sự kiện </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        style={styles.bannerrow}
        onPress={() => navigation.navigate('DataCBVC')}
        >
        <Image source={require('../assets/image/icon3.png')} style={styles.image}  />
        <Text style={styles.textbanner}>Số liệu CBVC</Text>
        </TouchableOpacity>
     </View>
     <View style={styles.subcontainer}>
        <Text style={styles.textmain}>Điều hành tác nghiệp </Text>
     </View>
     <View style={styles.contentcontainer} >
     <View style={styles.contentcontainerrow} >
        <TouchableOpacity
         style={styles.boxcontent}
         onPress={() => navigation.navigate('Document')}
         >
        <Image source={require('../assets/image/box1.png')} style={styles.image} />
        <Text style={styles.textbox}>Các văn bản</Text>
        <Text style={styles.subtextbox}>Soạn thảo và gửi văn bản đến các đơn vị. Đồng thời quản lý bút phê, các văn bản gửi đến, gửi đi và ủy quyền gửi văn bản.</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.boxcontent}
         onPress={() => navigation.navigate('Reportmange')
        }
         >
        <Image source={require('../assets/image/box2.png')} style={styles.image} />
        <Text style={styles.textbox}>Quản lý báo cáo</Text>
        <Text style={styles.subtextbox}>Soạn thảo và gửi các báo cáo cho các đơn vị cấp trên và các ban, văn phòng. Đồng thời quản lý các báo cáo gửi đến, gửi đi.</Text>
        
        </TouchableOpacity>
     </View>
     <View style={styles.contentcontainerrow} >
        <TouchableOpacity
         style={styles.boxcontent}
         onPress={() => navigation.navigate('Submissionmanage')}
         >
        <Image source={require('../assets/image/box3.png')} style={styles.image} />
        <Text style={styles.textbox}>Quản lý tờ trình</Text>
        <Text style={styles.subtextbox}>Soạn thảo và gửi tờ trình cho cấp trên. Đồng thời quản lý các tờ trình đã gửi và các tờ trình đã nhận được.</Text>
        
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.boxcontent}
         onPress={() => navigation.navigate('Workflowmanage')}>
        <Image source={require('../assets/image/box4.png')} style={styles.image} />
        <Text style={styles.textbox}>Quản lý công việc</Text>
        <Text style={styles.subtextbox}>Khởi tạo và quản lý các công việc đã giao, được giao.</Text>
        
        </TouchableOpacity>
     </View>
     </View>
    </ScrollView>
    </View>
    
  )
  
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#e3e3e3',
       width : '100%'
        
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: '#e3e3e3',
      },
      sidebarModal: {
        margin: 0,
        justifyContent: 'flex-start',
        width : '80%'
      },
      sidebar: {
        width: '60%',
        height: '100%',
        backgroundColor: '#f2f2f2',
      },
    Header :{
        backgroundColor : '#0051AE',
        width : '100%',
        height : 180,
        position : 'absolute',
        top : 0,
        left : 0,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20
        
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: '#e3e3e3',
      },
      sidebar: {
        flex: 1,
        backgroundColor: '#f2f2f2',
      },
    banner : {
        flexDirection: 'row',
        backgroundColor : '#e3e3e3',
        height : 81,
        width : '100%',
        marginTop : 200,
    },
    bannerrow : {
        flex : 3, 
        backgroundColor : '#e3e3e3  ',
        height : 81,
        width : 75,
        alignItems : 'center',
        marginLeft : 5,
        marginRight : 5,
    },
    bannerimage : {
        height : 80,
        width : 80,
    },
    textbanner : {
        fontSize : 15,
        fontWeight : 'bold',
    },
    subcontainer : {
        marginTop : 30,

    },
    textmain : {
        paddingLeft : 10,
        color : '#000000',
        fontSize : 20,
        fontWeight : 'bold',

    },
    contentcontainer : {
        width : '100%',
        height : '100%',
       paddingVertical : 10,
       

    },
    contentcontainerrow : {
        flexDirection: 'row',
        backgroundColor : '#e3e3e3',
        width : '100%',
        //height : 220,
        alignItems : 'center',
        marginBottom : 5,
            },
    boxcontent : {
        flex : 1,
        backgroundColor : '#ffffff',
        height : 200,
        width : '40%',
        marginHorizontal : 10,
        marginVertical :10,
        borderRadius : 10,
        alignContent : 'center',
        paddingTop : 5,
        alignItems : 'center'
    },
    textbox : {
        fontSize : 16,
        fontWeight : 'bold',

    },
    subtextbox : {
        paddingHorizontal : 12,
        fontSize : 14,
        fontWeight : '300',
        textAlign : 'justify'
        
    },
    textheader : {
        fontSize : 24,
        fontWeight : 'bold',
        color : '#ffffff',
       
        paddingLeft : 20,

    },
    subtextheader: {
        fontSize : 18,
        fontWeight : '200',
        color : '#ffffff',
        marginTop : 10,
        paddingLeft : 20,

    },
    iconheader : {
        flexDirection : 'row',
        marginTop : 30,
        height : 40,
        width : '100%',
        paddingLeft : 20,
        
    },
    bellicon : {
        marginLeft : '80%',
      
    }

        

})