import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetailWork = ({ handleMenuItemPress, isSidebarOpen }) => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [unreadMessageCount, setUnreadMessageCount] = useState(3); // Set the initial unread message count

  const handleOptionPress = (optionName) => {
    setSelectedOption(optionName);
  };

  const handleMenuPressDetail = () => {
    handleMenuItemPress();
    navigation.navigate('WorkDetail');
  };

  const handleMenuPressFile = () => {
    handleMenuItemPress();
    navigation.navigate('File');
  };

  const handleMenuPressMess = () => {
    handleMenuItemPress();
    // When the "Mess" section is selected, reset the unread message count to 0
    setUnreadMessageCount(0);
    navigation.navigate('Mess');
  };

  const handleMenuPressReportWork = () => {
    handleMenuItemPress();
    navigation.navigate('ReportWork');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.options, selectedOption === 'Chi tiết' && styles.selectedOption]}
        onPress={handleMenuPressDetail}
      >
        <Text style={[styles.text, selectedOption === 'Chi tiết' && styles.selectedText]}>Chi tiết</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.options, selectedOption === 'Tài liệu' && styles.selectedOption]}
        onPress={handleMenuPressFile}
      >
        <Text style={[styles.text, selectedOption === 'Tài liệu' && styles.selectedText]}>Tài liệu</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.options, selectedOption === 'Thảo luận' && styles.selectedOption]}
        onPress={handleMenuPressMess}
      >
        <Text style={[styles.text, selectedOption === 'Thảo luận' && styles.selectedText]}>Thảo luận</Text>
        {/* Display the red button with the unread message count */}
        {unreadMessageCount > 0 && (
          <View style={styles.unreadMessageButton}>
            <Text style={styles.unreadMessageText}>{unreadMessageCount}</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.options, selectedOption === 'Báo cáo' && styles.selectedOption]}
        onPress={handleMenuPressReportWork}
      >
        <Text style={[styles.text, selectedOption === 'Báo cáo' && styles.selectedText]}>Báo cáo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailWork;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingTop: 100,
  },
  options: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 60,
    backgroundColor: '#ffffff',
    borderWidth: 0.2,
    borderColor: '#1668C7',
    paddingHorizontal: 30,
    justifyContent: 'center',
    position: 'relative', // Add this to position the unreadMessageButton absolutely
  },
  text: {
    fontWeight: '700',
    fontSize: 18,
    color: '#1668C7',
  },
  selectedOption: {
    backgroundColor: '#1668C7',
  },
  selectedText: {
    color: '#ffffff',
  },
  unreadMessageButton: {
    position: 'absolute',
   right : '10%',

    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadMessageText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
