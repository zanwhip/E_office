import { StyleSheet,  View, Checkbox, Text, Image, Divider, Provider , TouchableOpacity } from 'react-native'
import React, { useState , useEffect} from 'react'
import Header from '../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';

const header = 'Tên Phòng, Ban, Khoa,...'

const DepartmentScreen = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    DHDN1: false,
         DHDN1A: false,
         DHDN1B: false,
    DHDN2: false,
          DHDN2A: false,
          DHDN2B: false,
          DHDN2C: false,
          DHDN2D: false,
    DHDN3: false,
       DHDN2A: false,
      DHDN2B: false,
    DHDN4: false,
    DHDN5: false,
    DHDN6: false,
  });

const [showDropdown1, setShowDropdown1] = useState(false);
const [showDropdown2, setShowDropdown2] = useState(false);
const [showDropdown3, setShowDropdown3] = useState(false);
 


  const handleCheckboxChange = (checkboxName) => {
    setSelectedOptions((prevOptions) => {
      if (checkboxName === 'DHDN1') {
        const isDHDN1Checked = !prevOptions.DHDN1;
        return {
          ...prevOptions,
          DHDN1: isDHDN1Checked,
          DHDN1A: isDHDN1Checked ? true : false,
          DHDN1B: isDHDN1Checked ? true : false,
        };
      } else if (checkboxName === 'DHDN1A') {
        const isDHDN1AChecked = !prevOptions.DHDN1A;
        return {
          ...prevOptions,
          DHDN1: isDHDN1AChecked && !prevOptions.DHDN1B ? false : isDHDN1AChecked,
          DHDN1A: isDHDN1AChecked,
        };
      } else if (checkboxName === 'DHDN1B') {
        const isDHDN1BChecked = !prevOptions.DHDN1B;
        return {
          ...prevOptions,
          DHDN1: isDHDN1BChecked && !prevOptions.DHDN1A ? false : isDHDN1BChecked,
          DHDN1B: isDHDN1BChecked,
        };
      } else {
        return {
          ...prevOptions,
          [checkboxName]: !prevOptions[checkboxName],
        };
      }
    });
  };


  

  const handleCheckboxChange2 = (checkboxName) => {
    setSelectedOptions((prevOptions) => {
      if (checkboxName === 'DHDN2') {
        const isDHDN2Checked = !prevOptions.DHDN2;
        const areAllSubChecked =
          isDHDN2Checked &&
          prevOptions.DHDN2A &&
          prevOptions.DHDN2B &&
          prevOptions.DHDN2C &&
          prevOptions.DHDN2D;

        return {
          ...prevOptions,
          DHDN2: areAllSubChecked || isDHDN2Checked,
          DHDN2A: isDHDN2Checked,
          DHDN2B: isDHDN2Checked,
          DHDN2C: isDHDN2Checked,
          DHDN2D: isDHDN2Checked,
        };
      } else if (
        checkboxName === 'DHDN2A' ||
        checkboxName === 'DHDN2B' ||
        checkboxName === 'DHDN2C' ||
        checkboxName === 'DHDN2D'
      ) {
        const isSubChecked = !prevOptions[checkboxName];
        const areAllSubChecked =
          isSubChecked &&
          prevOptions.DHDN2A &&
          prevOptions.DHDN2B &&
          prevOptions.DHDN2C &&
          prevOptions.DHDN2D;
        const isDHDN2Checked =
          areAllSubChecked || prevOptions.DHDN2 || isSubChecked;

        return {
          ...prevOptions,
          [checkboxName]: isSubChecked,
          DHDN2: isDHDN2Checked && areAllSubChecked,
        };
      } else {
        return {
          ...prevOptions,
          [checkboxName]: !prevOptions[checkboxName],
        };
      }
    });
  };




  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };
  const getDropdownIcon = (isOpen) => {
    return isOpen ? 'caret-up' : 'caret-down';
  };
  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };


  return (
    <View style={styles.container} >
       <Header header={header} />
       <View style={styles.display}>
        <View>
        <View style={styles.option}>
        <TouchableOpacity style={{ flexDirection :"row" }} onPress={toggleDropdown1}>
        {showDropdown1 ? (
        <Image source={require('../assets/image/drop_up.png')} style={{ width : 30, height : 30 ,  }} />
      ) : (
        <Image source={require('../assets/image/drop_down.png')} style={{ width : 30, height : 30,  }} />
      )}
        <Text style={styles.optiontext}>Hội đồng DHDN</Text>
        </TouchableOpacity>
         <CheckBox
  checked={selectedOptions.DHDN1}
  onPress={() => handleCheckboxChange('DHDN1')}
  checkedColor="#1668C7"
        />
        </View>      
{showDropdown1 && (
  <View> 
    <TouchableOpacity style={styles.optionsub} >
         <Text style={{ fontSize : 18, fontWeight : '600'  }}>Hội đồng DHDN 1A</Text>
         <CheckBox
  checked={selectedOptions.DHDN1A}
  onPress={() => handleCheckboxChange('DHDN1A')}
  checkedColor="#1668C7"
        />
        </TouchableOpacity>
   
   
        <TouchableOpacity style={styles.optionsub} >
         <Text style={{ fontSize : 18, fontWeight : '600'  }}>Hội đồng DHDN 1B</Text>
         <CheckBox
  checked={selectedOptions.DHDN1B}
  onPress={() => handleCheckboxChange('DHDN1B')}
  checkedColor="#1668C7"
        />
        </TouchableOpacity>
   
  </View>
)
  
}
{/* Hoi dong DHDN2 */}
<View>
        <View style={styles.option}>
        <TouchableOpacity style={{ flexDirection :"row" }} onPress={toggleDropdown2}>
        {showDropdown2 ? (
        <Image source={require('../assets/image/drop_up.png')} style={{ width : 30, height : 30 ,  }} />
      ) : (
        <Image source={require('../assets/image/drop_down.png')} style={{ width : 30, height : 30,  }} />
      )}
        <Text style={styles.optiontext}>Hội đồng DHDN 2</Text>
        </TouchableOpacity>
         <CheckBox
  checked={selectedOptions.DHDN2}
  onPress={() => handleCheckboxChange2('DHDN2')}
  checkedColor="#1668C7"
        />
        </View>      
{showDropdown2 && (
  <View> 
    <TouchableOpacity style={styles.optionsub} >
         <Text style={{ fontSize : 18, fontWeight : '600'  }}>Hội đồng DHDN 2A</Text>
         <CheckBox
  checked={selectedOptions.DHDN2A}
  onPress={() => handleCheckboxChange('DHDN2A')}
  checkedColor="#1668C7"
        />
        </TouchableOpacity>
   
   
        <TouchableOpacity style={styles.optionsub} >
         <Text style={{ fontSize : 18, fontWeight : '600'  }}>Hội đồng DHDN 2B</Text>
         <CheckBox
  checked={selectedOptions.DHDN2B}
  onPress={() => handleCheckboxChange('DHDN2B')}
  checkedColor="#1668C7"
        />
        </TouchableOpacity>


        <TouchableOpacity style={styles.optionsub} >
         <Text style={{ fontSize : 18, fontWeight : '600'  }}>Hội đồng DHDN 2C</Text>
         <CheckBox
  checked={selectedOptions.DHDN2C}
  onPress={() => handleCheckboxChange('DHDN2C')}
  checkedColor="#1668C7"
        />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionsub} >
         <Text style={{ fontSize : 18, fontWeight : '600'  }}>Hội đồng DHDN 2D</Text>
         <CheckBox
  checked={selectedOptions.DHDN2D}
  onPress={() => handleCheckboxChange('DHDN2D')}
  checkedColor="#1668C7"
        />
        </TouchableOpacity>
   
  </View>
)
  
}

 </View>
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
  backgroundColor :'#ffffff'
  
},
optionsub : {
   justifyContent:'space-between' ,
    height :60, 
    width : '100%', 
    flexDirection : 'row', 
    alignItems :'center', 
    paddingLeft : 80, 
    backgroundColor :'#ffffff' ,
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
  padding :20,
  backgroundColor :'#ffffff'
},
icon : {
  width : 30,
  height : 30,

}
})