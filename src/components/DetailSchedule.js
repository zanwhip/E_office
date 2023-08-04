import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const DetailSchedule = ({ handleMenuItemPress, isSidebarOpen }) => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionPress = (optionName) => {
    setSelectedOption(optionName);
  }
  
  const handleMenuPressDetail  = () => { 
    handleMenuItemPress();
      navigation.navigate('EditSchedule');
    };
    
  const handleMenuPressFile  = () => {
    handleMenuItemPress();
      navigation.navigate('Accept');
    };
    const handleMenuPressMess = () => {
      handleMenuItemPress();
        navigation.navigate('Cancel');
      };
  return (
    <View style={styles.container}>
     <TouchableOpacity
        style={[styles.options, selectedOption === 'Sửa' && styles.selectedOption]}
        onPress={handleMenuPressDetail}
      >
        <Text style={[styles.text, selectedOption === 'Sửa' && styles.selectedText]}> Sửa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.options, selectedOption === 'Duyệt lịch tuần' && styles.selectedOption ,{borderWidth : 0.5, borderColor :'1668c7'}]}
        onPress={handleMenuPressFile}
      >
        <Text style={[styles.text, selectedOption === 'Duyệt lịch tuần' && styles.selectedText, ]}> Duyệt lịch tuần</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.options, selectedOption === 'Hủy lịch tuần' && styles.selectedOption]}
        onPress={handleMenuPressMess}
      >
        <Text style={[styles.text1, selectedOption === 'Hủy lịch tuần ' && styles.selectedText]}>Hủy lịch tuần</Text>
      </TouchableOpacity>
      
      
      </View>
  )
}

export default DetailSchedule

const styles = StyleSheet.create({
  container: {  
    flex: 1,     
      backgroundColor: '#fff',
     
      paddingTop : 100,
    
      
    },
    options : {
      backgroundColor : '#ffffff',
      width : '100%',
      height : 60,
      backgroundColor : '#ffffff',
      
      paddingHorizontal : 30,
      justifyContent : 'center'
    },
    text: {
      fontWeight : '700',
      fontSize : 18,
      color : '#1668C7'
    },
    text1: {
        fontWeight : '700',
        fontSize : 18,
        color : '#FF4444'
      },
    selectedOption: {
      backgroundColor: '#1668C7',
    },
    selectedText: {
      color: '#ffffff',
    },
    
})