import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header'


const header = 'Chi tiết báo cáo'
const DetailReportScreen = ({navigation}) => {
  const handleGoBack = () => {
      
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
       

       <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack}>
            <Image source={require('../../assets/image/goback.png')} style={{ width : 40, height : 40 }} />
   
            </TouchableOpacity>
         
    <View >
    <Text style={styles.textheader}>{header}</Text>
    </View>
    <TouchableOpacity   onPress={() => navigation.navigate('EditDetailReport')}>
    <Image source={require('../../assets/image/edit.png')} style={{ right : 0, width : 35, height : 35 }}  />
    </TouchableOpacity>
   
    </View>

      <View style={styles.table}>
        <View style={styles.column}>
          <View style={styles.row1}>
          <Text style={styles.textrow1}>Người báo cáo</Text>
          </View>
          <View style={styles.row2}>
          <Text style={styles.textrow2}></Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.row1}>
          <Text style={styles.textrow1}>Ngày báo cáo</Text>
          </View>
          <View style={styles.row2}>
          <Text style={styles.textrow2}></Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.row1}>
          <Text style={styles.textrow1}>Nôi dung công việc</Text>
          </View>
          <View style={styles.row2}>
          <Text style={styles.textrow2}></Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.row1}>
          <Text style={styles.textrow1}>Duyệt</Text>
          </View>
          <View style={styles.row2}>
          <Text style={styles.textrow2}></Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.row1}>
          <Text style={styles.textrow1}>Trạng thái công việc</Text>
          </View>
          <View style={styles.row2}>
          <Text style={styles.textrow2}></Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.row1}>
          <Text style={styles.textrow1}>Tiến độ công việc (%) </Text>
          </View>
          <View style={styles.row2}>
          <Text style={styles.textrow2}></Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.row1}>
          <Text style={styles.textrow1}>Nội dung báo cáo</Text>
          </View>
          <View style={styles.row2}>
          <Text style={styles.textrow2}></Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default DetailReportScreen

const styles = StyleSheet.create({
container : {
  flex : 1,
  backgroundColor : '#e3e3e3',
},
table : {
  paddingHorizontal : 20,
  paddingVertical : 20,
},
column : {
  width : '100%',
  flexDirection : 'row',
  borderBottomWidth : 0.4,
  borderBottomColor : '#B8B8B8',

},
row1 : {
  flex : 2,
  backgroundColor :   '#EEEEEE',
  paddingHorizontal : 10,
  paddingVertical : 10,

},
row2 : {
  flex : 5,
  backgroundColor :'#ffffff',
  paddingHorizontal : 10,
  paddingVertical : 10,
  
},
textrow1 : {
  fontWeight : '600',
  fontSize : 18,

},
textrow2 : {
  fontSize : 16,
  fontWeight : '400'
},

header : {
  flexDirection : 'row',
  width : '100%',
  height : 80,
  backgroundColor : '#1668C7',
  paddingTop : 40,
  alignContent : 'center',
  paddingHorizontal : 10,
  
  
  justifyContent : 'space-between'

},
textcontainer : {
width : '100%',
justifyContent : 'center',
backgroundColor : '#000000',
alignContent : 'center',
textAlign : 'center',
height : '100%'
},
textheader : {
  fontSize : 22,
  color : '#ffffff',
  fontWeight : 'bold',

},


})