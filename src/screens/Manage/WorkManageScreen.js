import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Work from '../../components/Work'
import { ScrollView } from 'react-native'

const title1 = 'Phân tích công việc'
const title2 = 'Kiểu tra thông tin công việc'
const title3 = 'Kiểu tra '
const date1 = '14/4/2023 -  14/5/2023'
const date2 = '16/4/2023 -  30/5/2023'
const date3 = '19/4/2023 -  19/5/2023'
const status1 = 'A'; 
const status2 = 'B'; 
const status3 = 'C'; 
const rate1 = '1'
const rate2 = '2'
const rate3 = '3'

const WorkManageScreen = () => {
    const header = 'Quản lý công việc'
  return (
    <View style={styles.container}>
        <Header  header={header}  />
     <ScrollView style = {styles.displaycontainer}>
        <Work title={title1} rate={rate1} date={date1} status="A"/>
        <Work title={title2} rate={rate3} date={date1} status="B"/>
        <Work title={title1} rate={rate1} date={date1} status="C"/>
        <Work title={title3} rate={rate2} date={date1} status="A"/>
        <Work title={title2} rate={rate1} date={date1} status="C"/>
        <Work title={title2} rate={rate3} date={date1} status="B"/>
        <Work title={title3} rate={rate2} date={date1} status="A"/>
        
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