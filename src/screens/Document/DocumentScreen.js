import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react' ;
import Documentary from '../../components/Documentary';
import { ScrollView } from 'react-native';
import Header from '../../components/Header';

const header = 'Các văn bản'
const status1 = 'A'; 
const status2 = 'B'; 
const status3 = 'C'; 
const count = 6;
const DocumentScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Header header={header} />
     <View style={styles.typecontainer}>
        <Text style={styles.typetext}>Có +{count}+ văn bản mới đến</Text>
     </View>
     <ScrollView style={styles.displaycontainer}>
     <Documentary status="A"/>
     <Documentary status="B" />
     <Documentary status="C"/>
     <Documentary status="B"/>
     <Documentary status="C"/>
     <Documentary status="A" />
     <Documentary status="C"/>
     <Documentary status="A"/>
     </ScrollView>
      
 
    </View>
  )
}

export default DocumentScreen

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff',
    
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
displaycontainer : {
  width : '100%',
  height : 520,
  backgroundColor : '#ffffff',
  paddingHorizontal : 10,
 
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
typetext : {
  color : '#FF4444',
  fontSize : 20,
  fontWeight : "bold",
  marginLeft : 20,
  
},
})