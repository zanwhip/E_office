import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'

const DetailWork = ({ handleMenuItemPress, isSidebarOpen }) => {
 
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionPress = (optionName) => {
    setSelectedOption(optionName);
  }
  return (
    <View style={styles.container}>
     <TouchableOpacity
        style={[styles.options, selectedOption === 'Chi tiết' && styles.selectedOption]}
        onPress={() => handleOptionPress('Chi tiết')}
      >
        <Text style={[styles.text, selectedOption === 'Chi tiết' && styles.selectedText]}> Chi tiết</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.options, selectedOption === 'Tài liệu' && styles.selectedOption]}
        onPress={() => handleOptionPress('Tài liệu')}
      >
        <Text style={[styles.text, selectedOption === 'Tài liệu' && styles.selectedText]}> Tài liệu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.options, selectedOption === 'Thảo luận' && styles.selectedOption]}
        onPress={() => handleOptionPress('Thảo luận')}
      >
        <Text style={[styles.text, selectedOption === 'Thảo luận' && styles.selectedText]}>Thảo luận</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.options, selectedOption === 'Báo cáo' && styles.selectedOption]}
        onPress={() => handleOptionPress('Báo cáo')}
      >
        <Text style={[styles.text, selectedOption === 'Báo cáo' && styles.selectedText]}>Báo cáo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.options, selectedOption === 'Người tham gia' && styles.selectedOption]}
        onPress={() => handleOptionPress('Người tham gia')}
      >
        <Text style={[styles.text, selectedOption === 'Người tham gia' && styles.selectedText]}>Người tham gia</Text>
      </TouchableOpacity>
      </View>
  )
}

export default DetailWork

const styles = StyleSheet.create({
  container: {  
    flex: 1,     
      backgroundColor: '#ffffff',
      borderBottomWidth: 1,
      borderBottomColor: '#000000',
      paddingTop : 100,
    
      
    },
    options : {
      backgroundColor : '#ffffff',
      width : '100%',
      height : 60,
      backgroundColor : '#ffffff',
      borderWidth : 0.2,
      borderColor : '#1668C7',
      paddingHorizontal : 30,
      justifyContent : 'center'
    },
    text : {
      fontWeight : '700',
      fontSize : 18,
      color : '#1668C7'
    },
    selectedOption: {
      backgroundColor: '#1668C7',
    },
    selectedText: {
      color: '#ffffff',
    },
    
})