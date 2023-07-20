import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Work from '../../components/Work'
import { ScrollView } from 'react-native'


const status1 = 'A'; 
const status2 = 'B'; 
const status3 = 'C'; 

const WorkManageScreen = () => {
    const header = 'Quản lí công việc'
  return (
    <View style={styles.container}>
        <Header  header={header}  />
     <ScrollView style = {styles.displaycontainer}>
        <Work status="A"/>
        <Work status="B"/>
        <Work status="A"/>
        <Work status="B"/>
        <Work status="A"/>
        <Work status="A"/>
        <Work status="B"/>
        <Work status="A"/>
     </ScrollView>
    </View>
  )
}

export default WorkManageScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#e3e3e3',
        
    },
    displaycontainer : {
        paddingHorizontal : 10,
        paddingVertical : 20,
    }
})