import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Image} from 'react-native';

const Month = ({ onMonthSelected, onYearSelected }) => {
  const [currentYear, setCurrentYear] = useState(2023); // Starting year
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [isAAASelected, setIsAAASelected] = useState(false);
  const [isBBBSelected, setIsBBBSelected] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  

  const changeYear = (offset) => {
    setCurrentYear(currentYear + offset);
    setSelectedMonth(null); // Reset selectedMonth when changing year
  };

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'
  ];

   const handleMonthPress = (month) => {
    setSelectedMonth(month);
    setIsAAASelected(false);
    setIsBBBSelected(false);
    onMonthSelected(`${month}`);
  
    console.log(`Selected: ${month} ${currentYear}`);
  };

 const handleCheckboxPress = (checkbox) => {
    if (checkbox === 'AAA') {
      setIsAAASelected(!isAAASelected);
      setIsBBBSelected(false);
      console.log(`AAA is selected: ${!isAAASelected}`);
    } else if (checkbox === 'BBB') {
      setIsAAASelected(false);
      setIsBBBSelected(!isBBBSelected);
      console.log(`BBB is selected: ${!isBBBSelected}`);
    }
  };
  const handleCCCPress = () => {
    setSidebarVisible(false);
  };

  const renderMonths = () => {
    const rows = [];
    for (let i = 0; i < months.length; i += 4) {
      const row = (
        <View key={i} style={styles.row}>
          {months.slice(i, i + 4).map((month, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.month,
                selectedMonth === month ? styles.selectedMonth : null
              ]}
              onPress={() => handleMonthPress(month)}
            >
              <Text style={selectedMonth === month ? styles.selectedText : styles.monthtext}>{month}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
      rows.push(row);
    }
    return rows;
  };

  return (
    <View style={styles.sidebar}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeYear(-1)}>
        <Image source={require('../assets/image/left.png')} style={{ width : 40, height : 40 }} />
        </TouchableOpacity>
        <Text style={styles.year}>{currentYear}</Text>
        <TouchableOpacity onPress={() => changeYear(1)}>
        <Image source={require('../assets/image/right.png')} style={{ width : 40, height : 40 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.monthsContainer}>{renderMonths()}</View>


      <TouchableOpacity style={styles.checkbox} onPress={() => handleCheckboxPress('AAA')}>
        <View style={[styles.checkboxIndicator, isAAASelected ? styles.checkboxSelected : null]} />
        <Text>Danh sách lương và phụ cấp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.checkbox} onPress={() => handleCheckboxPress('BBB')}>
        <View style={[styles.checkboxIndicator, isBBBSelected ? styles.checkboxSelected : null]} />
        <Text>Danh sách tổng thu nhập thuế</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCCC} onPress={handleCCCPress}>
        <Text style={{fontSize : 18, fontWeight : '600', color : '#fff'  }}>Tra cứu</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius : 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  year: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  yearButton: {
    fontSize: 18,
  },
  monthsContainer: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  month: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 5,
    
  },
  monthtext : {
    fontSize : 16,
    fontWeight : '500',
  },
  selectedMonth: {
    backgroundColor: '#1668c7',
  },
  selectedText: {
    fontSize : 16,
    fontWeight : '500',
    color: '#ffffff',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: '#1668c7',
    borderColor: '#1668c7',
  },
  
  buttonCCC: {
    marginTop: 20,
    paddingVertical: 10,
    
    backgroundColor: '#1668c7',
    borderRadius: 5,
    alignItems: 'center',
    width : '30%',
   marginLeft : '60%'
  },
});

export default Month;
