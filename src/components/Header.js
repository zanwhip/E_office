import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import React from 'react'

const Header = ({header}) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View >
     <View style={styles.header}>
      <TouchableOpacity onPress={handleGoBack} >
      <Ionicons 
    name="arrow-back-outline"
    size={40}
    color='#ffffff'
    //style ={{ left : 10 }}
    
    />
      </TouchableOpacity>
    
    <View >
    <Text style={styles.textheader}>{header}</Text>
    </View>
    <View></View>
     </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#e3e3e3',
        justifyContent : 'center',
      

    },
    header : {
      flexDirection : 'row',
      width : '100%',
      height : 80,
      backgroundColor : '#1668C7',
      top : 0,
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
     //marginLeft : 80,
  },
})