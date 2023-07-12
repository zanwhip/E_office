import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react'
import { TouchableOpacity } from 'react-native';

const welcomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
     <View style={styles.Header}>
     <View style={styles.iconheader}>
     <Entypo name="menu"
          size={30}
          color='#ffffff'
           />
           <FontAwesome5 name="bell"
          size={30}
          color='#ffffff'
         style={styles.bellicon}
         />
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

        <TouchableOpacity style={styles.bannerrow}>
        <Image source={require('../assets/image/icon2.png')} 
        style={styles.image} 
        onPress={() => navigation.navigate('New')}
        />
        <Text style={styles.textbanner}>Tin tức - Sự kiện </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.bannerrow}>
        <Image source={require('../assets/image/icon3.png')} 
        style={styles.image} 
        onPress={() => navigation.navigate('DataCBVC')}
        />
        <Text style={styles.textbanner}>Số liệu CBVC</Text>
        </TouchableOpacity>
     </View>
     <View style={styles.subcontainer}>
        <Text style={styles.textmain}>Điều hành doanh nghiêp </Text>
     </View>
     <View style={styles.contentcontainer} >
     <View style={styles.contentcontainerrow} >
        <View style={styles.boxcontent}>
        <Image source={require('../assets/image/box1.png')} style={styles.image} />
        <Text style={styles.textbox}>Các văn bản</Text>
        <Text style={styles.subtextbox}>Soạn thảo và gửi văn bản đến các đơn vị. Đồng thời quản lý bút phê, các văn bản gửi đến, gửi đi và ủy quyền gửi văn bản.</Text>
        </View>
        <View style={styles.boxcontent}>
        <Image source={require('../assets/image/box2.png')} style={styles.image} />
        <Text style={styles.textbox}>Các văn bản</Text>
        <Text style={styles.subtextbox}>Soạn thảo và gửi văn bản đến các đơn vị. Đồng thời quản lý bút phê, các văn bản gửi đến, gửi đi và ủy quyền gửi văn bản.</Text>
        
        </View>
     </View>
     <View style={styles.contentcontainerrow} >
        <View style={styles.boxcontent}>
        <Image source={require('../assets/image/box3.png')} style={styles.image} />
        <Text style={styles.textbox}>Các văn bản</Text>
        <Text style={styles.subtextbox}>Soạn thảo và gửi văn bản đến các đơn vị. Đồng thời quản lý bút phê, các văn bản gửi đến, gửi đi và ủy quyền gửi văn bản.</Text>
        
        </View>
        <View style={styles.boxcontent}>
        <Image source={require('../assets/image/box4.png')} style={styles.image} />
        <Text style={styles.textbox}>Các văn bản</Text>
        <Text style={styles.subtextbox}>Soạn thảo và gửi văn bản đến các đơn vị. Đồng thời quản lý bút phê, các văn bản gửi đến, gửi đi và ủy quyền gửi văn bản.</Text>
        
        </View>
     </View>
     </View>
    </ScrollView>
  )
}

export default welcomeScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#e3e3e3',
       
        
    },
    Header :{
        backgroundColor : '#0051AE',
        width : '100%',
        height : 151,
        position : 'absolute',
        top : 0,
        left : 0,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20
        
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
        marginLeft : 12,
        marginRight : 12,
    },
    bannerimage : {
        height : 80,
        width : 80,
    },
    textbanner : {
        fontSize : 12,
        fontWeight : 'bold',
    },
    subcontainer : {
        marginTop : 30,

    },
    textmain : {
        paddingLeft : 10,
        color : '#000000',
        fontSize : 22,
        fontWeight : 'bold',

    },
    contentcontainer : {
        width : '100%',
        height : '100%',
        marginTop : 20,
        marginHorizontal : 5,

    },
    contentcontainerrow : {
        flexDirection: 'row',
        backgroundColor : '#e3e3e3',
        width : '100%',
        height : 220,
        alignItems : 'center',
        marginBottom : 5,
            },
    boxcontent : {
        flex : 1,
        backgroundColor : '#ffffff',
        height : 200,
        width : '40%',
        marginLeft : 10 ,
        marginRight : 10,
        marginTop : 5, 
        marginBottom : 5,
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
        marginTop : 20,
        //backgroundColor : '#000000',
        height : 40,
        width : '100%',
        paddingLeft : 20,
        
    },
    bellicon : {
        marginLeft : 250,
      
    }

        

})