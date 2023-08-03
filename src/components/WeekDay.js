import { StyleSheet, Text, View, TouchableOpacity , FlatList} from 'react-native';
import React, { useState, useEffect } from 'react';
import { getISOWeek, parse, format } from 'date-fns';


const WeekDay = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [isTimeSelected, setIsTimeSelected] = useState(false);
  const [selectedhours, setSelectedhours] = useState(new Date());
  const [selectedminute, setSelectedminute] = useState(new Date());
  const [mode, setMode] = useState('date');

  const generateTimeOptions = () => {
    const hours = [];
    const minutes = [];
    for (let hour = 0; hour <= 24; hour++) {
      const formattedHour = hour.toString().padStart(2, '0');
      hours.push({ label: formattedHour, value: formattedHour });
    }
    for (let minute = 0; minute < 60; minute += 5) {
      const formattedMinute = minute.toString().padStart(2, '0');
      minutes.push({ label: formattedMinute, value: formattedMinute });
    }
    return { hours, minutes };
  };

  const { hours, minutes } = generateTimeOptions();

  const handleDayPress = (day) => {
    setSelectedDate(day);
    setSelectedDay(day);
  };

  const handleTimePress = () => {
    setMode('time');
    setIsTimeSelected(true);
    setSelectedhours(new Date());
    setSelectedminute(new Date());
  };
  const handleHourChange = (hour) => {
    const newTime = new Date(selectedhours);
    newTime.setHours(hour);
    setSelectedhours(newTime);
  };
  
  const handleMinuteChange = (minute) => {
    const newTime = new Date(selectedminute);
    newTime.setMinutes(minute);
    setSelectedminute(newTime);
  };
  

  useEffect(() => {
    const selectedDateObject = parse(selectedDate, 'yyyy-MM-dd', new Date());
    if (!isNaN(selectedDateObject)) {
      setIsDateSelected(true);
    } else {
      setIsDateSelected(false);
    }
  }, [selectedDate]);

  useEffect(() => {
    const currentDateObject = new Date();
    const currentWeekNumber = getISOWeek(currentDateObject);
    setSelectedWeek(currentWeekNumber);
  }, []);


  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.header}>Chọn ngày và giờ</Text>

        {mode === 'date' ? (
          selectedDate !== null ? (
            <Text style={styles.week}>{`${selectedDate}, Tuần ${selectedWeek}, năm ${new Date().getFullYear()}`}</Text>
          ) : (
            <Text style={styles.week}>{`Tuần ${selectedWeek}, năm ${new Date().getFullYear()}`}</Text>
          )
        ) : null}

          {mode === 'time' ? (
            
          selectedhours && selectedminute !== null ? (
            <Text style={styles.week}>{`Thời gian: ${format(selectedhours, 'HH')}:${format(selectedminute, 'mm')}`}</Text>
          ) : (
            <Text>Invalid</Text>
          )
        ) : null}

        <View style={styles.display}>


        <View style={styles.option}>
          <TouchableOpacity onPress={() => setMode('date')}>
            <Text style={[styles.optiontext, mode === 'date' ? { color: '#1668c7' } : null]}>Chọn ngày</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTimePress}>
            <Text style={[styles.optiontext, mode === 'time' ? { color: '#1668c7' } : null]}>Chọn giờ</Text>
          </TouchableOpacity>
        </View>
        {mode === 'date' ? (

        <View>
          <View style={styles.row}>
                      <TouchableOpacity
              style={[
                styles.square,
                selectedDay === 'Thứ Hai' ? { backgroundColor: '#1668c7' } : null,
              ]}

              onPress={() => handleDayPress('Thứ Hai')}
            >
            <Text
                style={[
                  styles.text,
                  selectedDay === 'Mon' ? { color: '#ffffff' } : null,
                ]}
              >
                Mon
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={[
                styles.square,
                selectedDay === 'Thứ Ba' ? { backgroundColor: '#1668c7' } : null,
              ]}

              onPress={() => handleDayPress('Thứ Ba')}
            >
            <Text
                style={[
                  styles.text,
                  selectedDay === 'Tue' ? { color: '#ffffff' } : null,
                ]}
              >
                Tue
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={[
                styles.square,
                selectedDay === 'Thứ Tư' ? { backgroundColor: '#1668c7' } : null,
              ]}

              onPress={() => handleDayPress('Thứ Tư')}
            >
            <Text
                style={[
                  styles.text,
                  selectedDay === 'Wed' ? { color: '#ffffff' } : null,
                ]}
              >
                Wed
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.square,
                selectedDay === 'Thứ Năm' ? { backgroundColor: '#1668c7' } : null,
              ]}

              onPress={() => handleDayPress('Thứ Năm')}
            >
            <Text
                style={[
                  styles.text,
                  selectedDay === 'Thu' ? { color: '#ffffff' } : null,
                ]}
              >
                Thu
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={[
                styles.square,
                selectedDay === 'Thứ Sáu' ? { backgroundColor: '#1668c7' } : null,
              ]}

              onPress={() => handleDayPress('Thứ Sáu')}
            >
            <Text
                style={[
                  styles.text,
                  selectedDay === 'Fri' ? { color: '#ffffff' } : null,
                ]}
              >
                Fri
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={[
                styles.square,
                selectedDay === 'Thứ Bảy' ? { backgroundColor: '#1668c7' } : null,
              ]}

              onPress={() => handleDayPress('Thứ Bảy')}
            >
            <Text
                style={[
                  styles.text,
                  selectedDay === 'Sat' ? { color: '#ffffff' } : null,
                ]}
              >
                Sat
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
             style={[
                styles.square,
                selectedDay === 'Chủ Nhật' ? { backgroundColor: '#1668c7' } : null,
              ]}

              onPress={() => handleDayPress('Chủ Nhật')}
            >
            <Text
                style={[
                  styles.text,
                  selectedDay === 'Sun' ? { color: '#ffffff' } : null,
                ]}
              >
                Sun
              </Text>
            </TouchableOpacity>

          </View>

          </View>

   ) : null}

         {mode === 'time' && isTimeSelected && (
        <View style={{ width : 335, height : 260 , justifyContent :'center', alignItems : 'center', flexDirection : 'row' , marginVertical : 20,}}>

                  <View  style={{ marginHorizontal : 10,}} >
                    <Text style={{ fontSize : 18, fontWeight : '600' ,paddingBottom : 20,}}>Giờ</Text>
              <FlatList
              style={{ backgroundColor :'#ffffff', height : 120, }}
                data={hours}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[styles.timePickerOption,
                      item.value === format(selectedhours, 'HH') ? { backgroundColor: '#B9D9FF' } : null,
                    ]}
                    onPress={() => handleHourChange(parseInt(item.value, 10))}
                  >
                    <Text
                      style={[
                        styles.text,
                        item.value === format(selectedhours, 'HH') ? { color: '#ffffff' } : null,
                      ]}
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
              />
              </View>
            <View style={{ marginHorizontal : 10 }}>
              <Text style={{ fontSize : 18, fontWeight : '600' ,paddingBottom : 20,}}>Phút</Text>
              <FlatList
              style={{ backgroundColor :'#ffffff', height : 80 }}
                data={minutes}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.timePickerOption,
                      item.value === format(selectedminute, 'mm') ? { backgroundColor: '#B9D9FF' } : null,
                    ]}
                    onPress={() => handleMinuteChange(parseInt(item.value, 10))}
                  >
                    <Text
                      style={[
                        styles.text,
                        item.value === format(selectedminute, 'mm') ? { color: '#ffffff' } : null,
                      ]}
                    >

                      {item.label}

                    </Text>
                  </TouchableOpacity>

                )}
              />
        </View>
            </View>

      )}
        <TouchableOpacity style={styles.accept} disabled={!isDateSelected}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#1668c7'  }}>Xác nhận</Text>
          </TouchableOpacity>
      </View>





</View>
       </View>
  );
};

export default WeekDay;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    top: 5,
    marginVertical: 10,
  },
  display: {
    paddingVertical: 10,
  },
  week: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    top: 5,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optiontext: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    height: 80,
    width: 80,
    backgroundColor: '#e3e3e3',
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  text1: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF4444',
  },
  accept: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1668c7',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingBottom: 20,
  },
  timePicker: {
    backgroundColor: '#fff',
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  timePickerOption : {
    height : 50,
    width : 60,
    justifyContent :'center',
    alignItems :'center',

  }
});
