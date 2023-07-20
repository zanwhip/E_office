import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Processing from '../../components/Processing'
import { ScrollView } from 'react-native'

const unit = 'Văn phòng Đảng ủy ĐHĐN'
const content = 'Phân tích dự án'
const base = ''
const process1 = 'A'
const process2 = 'B'
const process3 = 'C'
const process4 = 'D'
const deadline = '17/7/2023'
const proof = 'Dự kiến trong vòng 2 tuần sẽ hoàn thành'


const header = 'Quán lí tiến độ'

const ProcessManageScreen = () => {
  return (
    <View style={styles.container} >
        <Header  header={header}  />
        <ScrollView>
          <Processing unit={unit} content={content} base={base} process={process1} deadline={deadline} proof={proof} />
          <Processing unit={unit} content={content} base={base} process={process2} deadline={deadline} proof={proof} />
          <Processing unit={unit} content={content} base={base} process={process3} deadline={deadline} proof={proof} />
          <Processing unit={unit} content={content} base={base} process={process4} deadline={deadline} proof={proof} />
          <Processing unit={unit} content={content} base={base} process={process2} deadline={deadline} proof={proof} />
        </ScrollView>
    </View>
  )
}

export default ProcessManageScreen

const styles = StyleSheet.create({

  container : {
    flex: 1,
    backgroundColor: '#e3e3e3',
    
},

})