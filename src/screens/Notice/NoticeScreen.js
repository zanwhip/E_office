import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';
import Notice from '../../components/Notice';
import Header from '../../components/Header';


const header = 'Thông báo';
const status1 = 'A'; 
const status2 = 'B'; 
const NoticeScreen = ({navigation}) => {
  return (
    <View>
        <Header header={header} />
       
     <View style={styles.datamonth}>
     <ScrollView style={styles.datacontainer}>
         
     <Notice status="A" />
     <Notice status="B" />
     <Notice status="A" />
     <Notice status="B"/>
     <Notice status="A" />
     <Notice status="B" />
     <Notice status="A" />
     <Notice status="B"/>
    </ScrollView>
     </View>
    </View>
  )
}

export default NoticeScreen

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