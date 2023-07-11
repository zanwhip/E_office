import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';
import DataMonth from '../components/DataMonth';

const dataCBVCScreen = () => {
  return (
    <View>
       <View style={styles.header}>
    <Ionicons 
    name="arrow-back-outline"
    size={20}
    color='#ffffff'
    />
    <Text style={styles.textheader}>Số liệu CBVC</Text>
     </View>
     <View style={styles.datamonth}>
     <ScrollView style={styles.datacontainer}>
     <DataMonth />
     <DataMonth />
     <DataMonth />
     <DataMonth />
     <DataMonth />
     <DataMonth />
     <DataMonth />
     <DataMonth />
     <DataMonth />
     <DataMonth />
      
    </ScrollView>
     </View>
    </View>
  )
}

export default dataCBVCScreen

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

},
textheader : {
  fontSize : 22,
  color : '#ffffff',
  fontWeight : 'bold',
  marginLeft : 80,
},

datamonth : {
  marginTop : 0,
  width : '100%',
  height : '100%',

},
datacontainer : {
  width : '100%',
  height : '100%',
  backgroundColor : '#e3e3e3'
}
})