import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Extract from '../../components/Extract';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import Header from '../../components/Header';
import { TouchableOpacity } from 'react-native';

const header = 'Chuyển tiếp văn bản'

const ForwardingScreen = ({navigation}) => {
  return (
    
    <View style={styles.container}>
      <Header header={header} />
    <ScrollView>
     
     <Extract />
     <View style={{ paddingHorizontal : 15 }}>
     <View style={styles.typecontainer}>
     <Text style={styles.typetext}>Tên Phòng, Ban, Khoa,...</Text>
     </View>
     <TouchableOpacity 
     style={styles.button}
     onPress={() => navigation.navigate('Department')}> 
      <Text>Chọn Phòng, Ban, Khoa</Text>
      <AntDesign 
            name="right"
            size={20}
            color='#000000'
          />
       </TouchableOpacity>
       <View style={styles.typecontainer1}>
     <Text style={styles.typetext}>Nội dung bút phê</Text>
     </View>
        <TextInput name="content" placeholder='Nhập văn bản...' multiline style={styles.input} />
     </View>
     </ScrollView>
     <View style={styles.buttonforward}>
     <Text style={styles.textforward}>Chuyển tiếp</Text>
     </View>
     
     </View>
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
  backgroundColor :'#e3e3e3'
},

typecontainer1 : {
  height : 50,
  alignContent : 'center',
  justifyContent : 'center',
  width : '100%',
  backgroundColor :'#e3e3e3'
},
typetext : {
  color : '#000000',
  fontSize : 16,
  fontWeight : "500",
  letterSpacing : 0.2,

},
button : {
  borderRadius : 5,
  width : '100%',
  paddingHorizontal :  12,
  paddingVertical : 16,
  alignItems : 'center',
  justifyContent : 'space-between',
  borderWidth : 1,
  flexDirection : 'row',
  backgroundColor : '#FFFFFF',
 
},
input : {
  width : '100%',
  height : 100,
  borderRadius : 10,
  borderWidth : 0.5,
  backgroundColor : '#FFFFFF',
  marginBottom : 20,
  paddingHorizontal : 10,
  
},
buttonforward : {
  position: 'absolute',
  bottom: 30,
  width: '90%',
  height: 46,
  backgroundColor: '#1668C7',
  borderRadius: 10,
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  marginHorizontal: 20,
},
textforward : {
  fontSize : 22,
  color : '#ffffff',
  fontWeight : 'bold',
 
}

})