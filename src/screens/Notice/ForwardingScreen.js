import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Extract from '../../components/Extract';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import Header from '../../components/Header';
import { TouchableOpacity } from 'react-native';
import DepartmentScreen from '../DepartmentScreen';
import { useRoute } from '@react-navigation/native';


const header = 'Chuyển tiếp văn bản'

const ForwardingScreen = ({navigation}) => {
  const route = useRoute();
  const handleOnPress = () => {
    console.log('Chuyển tiếp văn bản');
    navigation.goBack();
  };
  const [selectedTrueOptions, setSelectedTrueOptions] = useState([]);

  useEffect(() => {
    if (route.params && route.params.selectedTrueOptions) {
      setSelectedTrueOptions(route.params.selectedTrueOptions);
    }
  }, [route.params]);
  // Function to update selected options
  // const updateSelectedOptions = (selected) => {
  //   setSelectedOptions(selected);
  // };
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
     onPress={() =>   navigation.navigate('Department')}> 
      <Text>Chọn Phòng, Ban, Khoa</Text>
      <Image source={require('../../assets/image/right.png')} style={{ width : 40, height : 40 }} />
       </TouchableOpacity>
       <Text style={styles.department}>
       {selectedTrueOptions.length > 0
            ? ` ${selectedTrueOptions.join(', ')}`
            : ''}

       </Text>
       <View style={styles.typecontainer1}>
     <Text style={styles.typetext}>Nội dung bút phê</Text>
     </View>
        <TextInput name="content" placeholder='Nhập văn bản...' multiline style={styles.input} />
     </View>
     </ScrollView>
     <TouchableOpacity style={styles.buttonforward} onPress={handleOnPress}>
     <Text style={styles.textforward}>Chuyển tiếp</Text>
     </TouchableOpacity>
     
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
  borderRadius : 8,
  width : '100%',
  height : '18%',
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
  height : '40%',
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
 
}, 
department : {
  fontSize : 16,
  fontWeight : '600',
}

})