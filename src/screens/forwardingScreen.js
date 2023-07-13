import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Extract from '../components/Extract';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import Header from '../components/Header';

const header = 'Chuyển tiếp văn bản'

const ForwardingScreen = ({navigation}) => {
  return (
    
    <ScrollView style={styles.container}>
     <Header header={header} />
     <Extract />
     <View>
     <View style={styles.typecontainer}>
     <Text style={styles.typetext}>Tên Phòng, Ban, Khoa,...</Text>
     </View>
     <View style={styles.button}> 
      <Text>Chọn Phòng, Ban, Khoa</Text>
      <AntDesign 
            name="right"
            size={20}
            color='#000000'
          />
       </View>
       <View style={styles.typecontainer1}>
     <Text style={styles.typetext}>Nội dung bút phê</Text>
     </View>
        <TextInput name="content" placeholder='Nhập văn bản...' style={styles.input} />
     </View>

     <View style={styles.buttonforward}>
     <Text style={styles.textforward}>Chuyển tiếp</Text>
     </View>
    </ScrollView>
  )
}

export default ForwardingScreen

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#e3e3e3',
    
},
header : {
  flexDirection : 'row',
  width : '100%',
  height : 60,
  backgroundColor : '#1668C7',
  top : 0,
  paddingTop : 20,
  alignContent : 'center',
  // paddingHorizontal : 10,
 //justifyContent : 'center'
 

},
textheader : {
  fontSize : 22,
  color : '#ffffff',
  fontWeight : 'bold',
 marginLeft : 70,
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

typecontainer1 : {
  height : 50,
  alignContent : 'center',
  justifyContent : 'center',
  width : '100%',
  marginTop : 15,
 // marginBottom : 15,
  backgroundColor :'#e3e3e3'
},
typetext : {
  color : '#000000',
  fontSize : 16,
  fontWeight : "500",
  marginLeft : 20,
  letterSpacing : 0.2,

},
button : {
  borderRadius : 5,
  width : 328,
  paddingHorizontal :  12,
  paddingVertical : 16,
  alignItems : 'center',
  justifyContent : 'space-between',
  borderWidth : 1,
  marginLeft : 20,
  flexDirection : 'row',
  backgroundColor : '#FFFFFF',
 
},
input : {
  width : 328,
  height : 100,
  borderRadius : 10,
  borderWidth : 0.5,
  marginLeft : 20,
  //textAlignVertical : 10,
},
buttonforward : {
  width : 328,
  height : 46,
  backgroundColor : '#1668C7',
  borderRadius : 10,
  marginLeft : 20,
  marginTop : 50, 
  justifyContent : 'center',
  alignContent : 'center'
  
},
textforward : {
  fontSize : 22,
  color : '#ffffff',
  fontWeight : 'bold',
 marginLeft : 100,
}

})