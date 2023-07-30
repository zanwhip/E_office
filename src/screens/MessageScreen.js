import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState, useRef } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';
import DetailWork from '../components/DetailWork';

const header = 'Thảo luận';

const MessageScreen = ({navigation}) => {
  
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello', fromMe: false },
    { id: 2, text: 'Hi there!', fromMe: true },
    // Add more messages as needed
  ]);
  const [messageText, setMessageText] = useState('');
  const flatListRef = useRef(null);

  const sendMessage = () => {
    if (messageText.trim() === '') return;
    const newMessage = {
      id: messages.length + 1,
      text: messageText.trim(),
      fromMe: true,
    };
    setMessages([...messages, newMessage]);
    setMessageText('');
    // Scroll to the bottom of the list when a new message is sent
    flatListRef.current.scrollToEnd();
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebarDetailWork = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleMenuItemPress = () => {
    setSidebarOpen(false);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }} // Add this style to allow KeyboardAvoidingView to take up the full screen
    >
      <View style={styles.container}>

        <Modal
          isVisible={isSidebarOpen}
          animationIn="slideInRight"
          animationOut="slideOutRight"
          swipeDirection="right"
          onSwipeComplete={toggleSidebarDetailWork}
          style={styles.sidebarModal}
        >
          <View style={styles.sidebar}>
            <DetailWork handleMenuItemPress={handleMenuItemPress} isSidebarOpen={isSidebarOpen} />
          </View>
        </Modal>

        {/* Header */}
        <View style={styles.header}>
          <Ionicons
            name="arrow-back-outline"
            size={20}
            color='#ffffff'
            style={{ left: 10 }}
            onPress={() => navigation.goBack()} // Note: Ensure you have the 'navigation' prop or adjust this as per your navigation setup
          />
          <View>
            <Text style={styles.textheader}>{header}</Text>
          </View>
          <TouchableOpacity onPress={toggleSidebarDetailWork}>
            <Image source={require('../assets/image/Infor.png')} style={{ right: 0 }} />
          </TouchableOpacity>
        </View>

        {/* Messages */}
        <View style={styles.messagesContainer}>
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={item.fromMe ? styles.messageContainerMe : styles.messageContainerOther}>
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
            )}
          />
        </View>

        {/* Input Message */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={messageText}
            multiline
            onChangeText={(text) => setMessageText(text)}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: '#1668C7',
    paddingTop: 40,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  textheader: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageContainerMe: {
    backgroundColor: '#1668C7',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
    alignSelf: 'flex-end',
    marginVertical: 5,
  },
  messageContainerOther: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
    alignSelf: 'flex-start',
    marginVertical: 5,
  },
  messageText: {
    color: '#000000',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    height: 80,
    marginBottom: Platform.OS === 'ios' ? 0 : 10, // On Android, add some margin to avoid being overlapped by the keyboard
  },
  input: {
    flex: 1,
    height: '60%',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 0.3,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#1668C7',
    padding: 10,
    borderRadius: 50,
  },
  sidebarModal: {
    margin: 0,
    justifyContent: 'flex-end',
    width: '90%',
    marginLeft: '30%',
  },
  sidebar: {
    flex: 1,
    width: '80%',
    height: '100%',
    backgroundColor: '#fff',
  },
});
