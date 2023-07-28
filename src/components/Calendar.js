import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { getISOWeek, parse, format, isSaturday, isSunday } from 'date-fns'; // Import 'format' function

const Calendar = ({ currentDate, selectedDate, closeSidebar, toggleCalendarModal }) => {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');


  useEffect(() => {
    const selectedDateObject = parse(selectedDate, 'yyyy-MM-dd', new Date());
    
    if (!isNaN(selectedDateObject)) {
      setSelectedWeek(getWeekNumber(selectedDateObject));
      setIsDateSelected(true);
      const formattedDateStr = format(selectedDateObject, 'dd/MM/yyyy');
      setFormattedDate(formattedDateStr);
    } else {
      setSelectedWeek(null);
      setIsDateSelected(false);
      setFormattedDate('Invalid'); // Set the date to "Invalid" when it's not a valid date
    }
  }, [selectedDate]);

  const getWeekNumber = (date) => {
    return getISOWeek(date);
    
  };

  const handleDateChange = (date) => {
    console.log('date:', date);
    const formattedDateStr = date
    console.log('selectedDateObject:', formattedDateStr);
    console.log('isNaN(selectedDateObject):', isNaN(formattedDateStr));
    setFormattedDate(formattedDateStr);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Chọn ngày</Text>
      </View>

      <View style={styles.weekNumberContainer}>
        <Text style={styles.weekNumberText}>{`Ngày : ${formattedDate}`}</Text>
        
      </View>

      {/* Date Picker */}
      <DatePicker
        options={{
          backgroundColor: '#ffffff',
          textHeaderColor: '#000000',
          textDefaultColor: '#000000',
          selectedTextColor: '#ffffff',
          mainColor: '#1668c7',
          textSecondaryColor: '#000000',
          borderColor: 'rgba(122, 146, 165, 0.1)',
          dayNames: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
          weekendDay: {
            color: '#FF4444',
          },
        }}
        current={currentDate}
        selected={selectedDate}
        mode="calendar"
        minuteInterval={30}
        style={styles.datePicker}
        onDateChange={handleDateChange}
      />
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  headerContainer: {
    backgroundColor: '#1668c7',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  weekNumberContainer: {
    backgroundColor: '#1668c7',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  weekNumberText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  datePicker: {
    flex: 1,
    borderRadius: 10,
  },
});

export default Calendar;
