import React from 'react';
import { Modal, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SuccessAlert = ({ visible, onClose }) => {
  return (
    <Modal visible={visible}
     //transparent animationType="fade"
     >
      <View style={styles.modalContainer}>
        <View style={styles.alertContainer}>
          <View style={styles.line}>
          <Image source={require('../assets/image/success.png')} style={styles.successImage} />
          <Text style={styles.alertText}>Thành công</Text>
          </View>
         
    
          <TouchableOpacity style={styles.okButton} onPress={onClose}>
            <Text style={styles.okButtonText}>Xong</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContainer: {
    backgroundColor: '#1668c7',
    width : '60%',
    height :'25%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
 
  successImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  alertText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color : 'white',
    paddingBottom : 20,
  
  },
  line : {
    width : '100%',
    justifyContent : 'center',
    alignItems : 'center',
    borderBottomWidth : 1,
    borderColor :'white'
  },
  okButton: {
    backgroundColor: '#1668C7',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  okButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SuccessAlert;
