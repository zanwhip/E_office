import { StyleSheet,  View, Checkbox, Text, Menu, Divider, Provider , TouchableOpacity } from 'react-native'
import React, { useState , useEffect} from 'react'
import Header from '../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';

const header = 'Tên Phòng, Ban, Khoa,...'

const DepartmentScreen = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    ĐHĐN1: false,
         ĐHĐN1A: false,
         ĐHĐN1B: false,
    ĐHĐN2: false,
          ĐHĐN2A: false,
         ĐHĐN2B: false,
    ĐHĐN3: false,
       ĐHĐN2A: false,
      ĐHĐN2B: false,
    ĐHĐN4: false,
    ĐHĐN5: false,
    ĐHĐN6: false,
  });
  const [showDropdown1, setShowDropdown1] = useState(false);
const [showDropdown2, setShowDropdown2] = useState(false);
const [showDropdown3, setShowDropdown3] = useState(false);
  const handleCheckboxChange = (checkboxName) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [checkboxName]: !prevOptions[checkboxName],
    }));
  
  };
  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  useEffect(() => {
    // HOI DONG DHDN1
    // Check if both DHDN1A and DHDN1B are selected, then automatically select DHDN1
    if (selectedOptions.ĐHĐN1A && selectedOptions.ĐHĐN1B) {
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        ĐHĐN1: true,
      }));
    } else if (selectedOptions.ĐHĐN1) {
      // If DHDN1 is selected, automatically select DHDN1A and DHDN1B
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        ĐHĐN1A: true,
        ĐHĐN1B: true,
      }));
    } else {
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        ĐHĐN1: false,
      }));
    }
  }, [selectedOptions.ĐHĐN1A, selectedOptions.ĐHĐN1B, selectedOptions.ĐHĐN1]


  );


  return (
    <View style={styles.container} >
       <Header header={header} />
       <View style={styles.display}>
        <View>
        <View style={styles.option}>
        <TouchableOpacity style={{ flexDirection :"row" }} onPress={toggleDropdown1}>
        <FontAwesome          
          name='caret-up'
          size={20}
          color='#000000'
          style={{marginLeft : 20}}/>
        <Text style={styles.optiontext}>Hội đồng ĐHĐN</Text>
        </TouchableOpacity>
         <CheckBox
  checked={selectedOptions.ĐHĐN1}
  onPress={() => handleCheckboxChange('ĐHĐN1')}
  checkedColor="#1668C7"
        />
        </View>      
{showDropdown1 && (
  <View> 
    <TouchableOpacity style={{ justifyContent:'space-between' , height :60, width : '100%', flexDirection : 'row', alignItems :'center', paddingLeft : 80 }} >
         <Text style={{ fontSize : 18, fontWeight : '600'  }}>Hội đồng ĐHĐN</Text>
         <CheckBox
  checked={selectedOptions.ĐHĐN1A}
  onPress={() => handleCheckboxChange('ĐHĐN1A')}
  checkedColor="#1668C7"
        />
        </TouchableOpacity>
   
   
        <TouchableOpacity style={{ justifyContent:'space-between' , height :60, width : '100%', flexDirection : 'row', alignItems :'center', paddingLeft : 80 }} >
         <Text style={{ fontSize : 18, fontWeight : '600'  }}>Hội đồng ĐHĐN</Text>
         <CheckBox
  checked={selectedOptions.ĐHĐN1B}
  onPress={() => handleCheckboxChange('ĐHĐN1B')}
  checkedColor="#1668C7"
        />
        </TouchableOpacity>
   
  </View>
)
  
}
      </View>
      <View>
      <View style={styles.option}>
      <TouchableOpacity style={{ flexDirection :"row" }} onPress={toggleDropdown2} >
        <FontAwesome          
          name='caret-up'
          size={20}
          color='#000000'
          style={{marginLeft : 20}}/>
        <Text style={styles.optiontext}>Hội đồng ĐHĐN</Text>
        </TouchableOpacity>
        <CheckBox
  checked={selectedOptions.ĐHĐN2}
  onPress={() => handleCheckboxChange('ĐHĐN2')}
  checkedColor="#1668C7"
/>
</View>
{showDropdown2 && (
  <View> 
    <TouchableOpacity style={{ justifyContent:'space-between' , height :60, width : '100%', flexDirection : 'row', alignItems :'center', paddingLeft : 80 }} >
         <Text style={{ fontSize : 18, fontWeight : '600'  }}>Hội đồng ĐHĐN</Text>
         <CheckBox
  checked={selectedOptions.ĐHĐN2A}
  onPress={() => handleCheckboxChange('ĐHĐN2A')}
  checkedColor="#1668C7"
        />
        </TouchableOpacity>
   
   
        <TouchableOpacity style={{ justifyContent:'space-between' , height :60, width : '100%', flexDirection : 'row', alignItems :'center', paddingLeft : 80 }} >
         <Text style={{ fontSize : 18, fontWeight : '600'  }}>Hội đồng ĐHĐN</Text>
         <CheckBox
  checked={selectedOptions.ĐHĐN2B}
  onPress={() => handleCheckboxChange('ĐHĐN2B')}
  checkedColor="#1668C7"
        />
        </TouchableOpacity>
   
  </View>
)
  
}




   
        </View>
      
    </View>
    
    </View>
    
  )
}

export default DepartmentScreen

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#e3e3e3',
 
},

display : {
  marginVerticalVertical : 20
  //paddingHorizontal : 20
},
option : {
  width : '100%',
  height : 60,
  borderBottomWidth : 0.2,
  flexDirection : 'row',
  alignItems : 'center',
  justifyContent: 'space-between',
  
},
optiontext : {
  marginHorizontal : 20,
  fontSize : 18,
  fontWeight : '600',
},

displaycontainer : {
  width : '100%',
  padding : 20
},
council : {
  width: '100%',
  flexDirection :'row',
  height : 60,
  backgroundColor : '#ffffff',
  alignItems :'center',
  padding :20
},
icon : {
  width : 30,
  height : 30,

}
})