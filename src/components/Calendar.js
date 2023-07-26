import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { getISOWeek, parse, format } from 'date-fns'; // Import 'format' function

const Calendar = ({ currentDate, selectedDate, closeSidebar, toggleCalendarModal }) => {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [isDateSelected, setIsDateSelected] = useState(false);

  useEffect(() => {
    const selectedDateObject = parse(selectedDate, 'yyyy-MM-dd', new Date());
    if (!isNaN(selectedDateObject)) {
      setSelectedWeek(getWeekNumber(selectedDateObject));
      setIsDateSelected(true);
    } else {
      setSelectedWeek(null);
      setIsDateSelected(false);
    }
  }, [selectedDate]);

  const getWeekNumber = (date) => {
    return getISOWeek(date);
  };

  const handleDateChange = (date) => {
    const selectedDateObject = parse(date, 'yyyy-MM-dd', new Date());
    if (!isNaN(selectedDateObject)) {
      setSelectedWeek(getWeekNumber(selectedDateObject));
      setIsDateSelected(true);

      const formattedDate = format(selectedDateObject, 'dd/MM/yyyy'); // Format the date

      console.log('Ngày đã chọn:', formattedDate);

      // Đóng sidebar
      closeSidebar();
      toggleCalendarModal(); // Close the calendar modal when a date is selected
    } else {
      setSelectedWeek(null);
      setIsDateSelected(false);
      console.log('Ngày đã chọn: Invalid'); // Log 'Invalid' string directly
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Chọn ngày</Text>
      </View>

      <View style={styles.weekNumberContainer}>
        {isDateSelected ? (
          <Text style={styles.weekNumberText}>{`Tuần ${selectedWeek}, năm 2023`}</Text>
        ) : (
          <Text style={styles.weekNumberText}>Invalid</Text>
        )}
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
