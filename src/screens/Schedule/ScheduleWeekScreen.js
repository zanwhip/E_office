import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import Header from '../../components/Header';
import CalendarStrip from 'react-native-calendar-strip';
import Octicons from 'react-native-vector-icons/Octicons';
import moment from 'moment';
import WeekEvent from '../../components/WeekEvent';
import SwipeGesture from 'react-native-swipe-gestures';
import Calendar from '../../components/Calendar';

const header = 'Lịch tuần';

const ScheduleWeekScreen = () => {
  let disabledDays = [1, 2, 3, 4, 5, 6, 7]; // Disable all days except Sunday (0)
  const [selectedDate, setSelectedDate] = useState(moment());
  const [isCalendarModalVisible, setCalendarModalVisible] = useState(false);

  const handleDateSelected = (date) => {
    setSelectedDate(moment(date));
    
  };

  const currentWeekNumber = selectedDate.isoWeek();

  // Custom styles for Saturdays and Sundays
  const weekendStyle = { color: 'red' };

  // Function to handle left swipe
  const handleLeftSwipe = () => {
    setSelectedDate((prevDate) => moment(prevDate).add(1, 'week'));
  };

  // Function to handle right swipe
  const handleRightSwipe = () => {
    setSelectedDate((prevDate) => moment(prevDate).subtract(1, 'week'));
  };

  // Function to toggle the Calendar modal
  const toggleCalendarModal = () => {
    setCalendarModalVisible((prev) => !prev);
  };

  // Config for swipe gestures
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <SwipeGesture onSwipeLeft={handleLeftSwipe} onSwipeRight={handleRightSwipe} config={config} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header header={header} />

        {/* Custom Week Header */}
        <View style={styles.weekHeaderContainer}>
          <TouchableOpacity onPress={handleLeftSwipe}>
            <Octicons name="chevron-left" size={30} color="#e3e3e3" style={{ marginLeft: 50 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleCalendarModal}>
            <Text style={styles.weekHeaderText}>{`Tuần thứ ${currentWeekNumber}, năm ${selectedDate.format(
              'YYYY'
            )}`}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRightSwipe}>
            <Octicons name="chevron-right" size={30} color="#e3e3e3" style={{ marginRight: 50 }} />
          </TouchableOpacity>
        </View>

        {/* CalendarStrip */}
        <CalendarStrip
          calendarAnimation={{ type: 'sequence', duration: 30 }}
          daySelectionAnimation={{
            type: 'border',
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: 'white',
          }}
          style={{ height: 140, paddingBottom: 10 }}
          calendarHeaderStyle={{ color: '#1668c7', backgroundColor: '#1668c7', width: '100%', height: 10, fontSize: 20 }}
          calendarColor={'#ffffff'}
          dateNumberStyle={(date) => (date.isoWeekday() === 6 || date.isoWeekday() === 7 ? weekendStyle : { color: '#ffffff' })}
          dateNameStyle={(date) => (date.isoWeekday() === 6 || date.isoWeekday() === 7 ? weekendStyle : { color: '#ffffff' })}
          highlightDateContainerStyle={{
            backgroundColor: '#1668c7',
            borderColor: 'white',
             borderWidth: 1,
            borderRadius: 5,
            height: 70,
          }}
          highlightDateNumberStyle={{ color: '#ffffff' }}
          highlightDateNameStyle={{ color: '#ffffff' }}
          dayContainerStyle={{ paddingBottom: 5, borderColor: 'black', borderWidth: 1, borderRadius: 5, height: 70, marginHorizontal : 10 }}
          weekendDateNameStyle={{ color: 'red' }}
          weekendDateNumberStyle={{ color: 'red' }}
          disabledDateOpacity={0.6}
          disabledDateNameStyle={{ color: '#000000' }}
          disabledDateNumberStyle={{ color: '#000000' }}
          disabledDays={disabledDays}
          weekNumbers // Enable the display of week numbers
          calendarHeaderFormat={`[Tuần] w [, năm ]YYYY`} // Display week number as "Tuần thứ ..."
          startingDate={moment().startOf('year').isoWeek(currentWeekNumber).startOf('week')} // Set the starting date for the CalendarStrip
          endingDate={moment().startOf('year').isoWeek(currentWeekNumber).endOf('week')} // Set the ending date for the CalendarStrip
          onDateSelected={handleDateSelected}
        />

        {/* Rest of the component */}
        <ScrollView style={styles.displaycontainer}>
          
          <Text style={styles.selectedDateText}>Thứ: {selectedDate.format('dddd')}</Text>
          <Text style={styles.selectedDateText}>Ngày: {selectedDate.format('DD/MM/YYYY')}</Text>
          {/* Các thông tin khác của ngày được chọn */}
          <WeekEvent />
          <WeekEvent />
          <WeekEvent />
        </ScrollView>

        {/* Calendar Modal */}
        <Modal transparent={true} visible={isCalendarModalVisible} animationType="slide" onRequestClose={toggleCalendarModal}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleCalendarModal}>
              <Octicons name="x" size={30} color="#ffffff" />
            </TouchableOpacity>
            <View style={styles.calendarContainer}>
              <Calendar currentDate={selectedDate.format('YYYY-MM-DD')} selectedDate={selectedDate.format('YYYY-MM-DD')} />
            </View>
          </View>
        </Modal>
      </View>
    </SwipeGesture>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  displaycontainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  selectedDateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  weekHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: '#1668c7',
  },
  weekHeaderText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    color: '#ffffff',
  },
  dayHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  dayHeaderText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    width : 30,
    height : 30,
    borderRadius : 10,
    position: 'absolute',
    top: 50,
    right: 10,
  },
  calendarContainer: {
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScheduleWeekScreen;
