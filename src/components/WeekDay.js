import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React,{ useState, useEffect }  from 'react';
import { getISOWeek, parse, format } from 'date-fns'; // Import 'format' function
const WeekDay = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const handleDayPress = (day) => {
    setSelectedDate(day);
    setSelectedDay(day);
  };
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

  useEffect(() => {
    const currentDateObject = new Date();
    const currentWeekNumber = getISOWeek(currentDateObject);
    setSelectedWeek(currentWeekNumber);
  }, []);

  const getWeekNumber = (date) => {
    return getISOWeek(date);
  };


  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.header}>Chọn ngày và giờ</Text>
        <Text style={styles.header}>Chọn ngày và giờ</Text>
        {selectedWeek !== null ? (
           <Text>{`Tuần ${selectedWeek}, năm ${new Date().getFullYear()}`}</Text>
        ) : (
          <Text>{`Tuần ${selectedWeek}, năm ${new Date().getFullYear()}`}</Text>
        )}
        <View style={styles.option}>
          <Text style={styles.optiontext}>Chọn ngày</Text>
          <Text style={styles.optiontext}>Chọn giờ</Text>
        </View>
        {/* Khu vực chọn thứ trong tuần */}
        <View style={styles.display}>
          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.square,
                selectedDay === 'Mon' ? { backgroundColor: '#1668c7' } : null,
              ]}
              
              onPress={() => handleDayPress('Mon')}
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
                selectedDay === 'Tue' ? { backgroundColor: '#1668c7' } : null,
              ]}
              
              onPress={() => handleDayPress('Tue')}
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
                selectedDay === 'Wed' ? { backgroundColor: '#1668c7' } : null,
              ]}
              
              onPress={() => handleDayPress('Wed')}
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
                selectedDay === 'Thu' ? { backgroundColor: '#1668c7' } : null,
              ]}
              
              onPress={() => handleDayPress('Thu')}
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
                selectedDay === 'Fri' ? { backgroundColor: '#1668c7' } : null,
              ]}
              
              onPress={() => handleDayPress('Fri')}
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
                selectedDay === 'Sat' ? { backgroundColor: '#1668c7' } : null,
              ]}
              
              onPress={() => handleDayPress('Sat')}
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
                selectedDay === 'Sun' ? { backgroundColor: '#1668c7' } : null,
              ]}
              
              onPress={() => handleDayPress('Sun')}
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
        <Text style={styles.accept}>Xác nhận</Text>
      </View>

      <View style={styles.container}>
        <View
          style={{
            width: '100%',
            backgroundColor: '#ffffff',
            height: 50,
            justifyContent: 'center',
            paddingHorizontal: '45%',
            borderRadius: 10,
          }}
        >
          <Text
            style={{ fontSize: 17, color: '#000000', fontWeight: '600' }}
          >
            Hủy
          </Text>
        </View>
      </View>

      {/* Display selected date */}
      {selectedDate && (
        <View style={styles.container}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>
            Ngày được chọn: {selectedDate}
          </Text>
        </View>
      )}
    </View>
  );
};


export default WeekDay

const styles = StyleSheet.create({

    container : {
        backgroundColor : '#ffffff',
        width : '100%',
        marginVertical : 10,
        borderRadius : 10,
        
    },
    header : {
        fontSize : 18, 
        fontWeight :'700', 
        textAlign : 'center' ,
         top : 5, 
         marginVertical : 10,
    },
    display : {
        paddingVertical : 10,
    },
    week : {
        fontSize : 18, 
        fontWeight :'700', 
        textAlign : 'center' , 
        top : 5, 
        marginVertical : 20, 
        marginHorizontal : 10,
    },
    option : { 
    flexDirection : 'row', 
    justifyContent : 'center', 
    alignItems :'center' 
},
optiontext : { 
    fontSize : 16, 
    fontWeight :'600' , 
    paddingHorizontal : 10 
    },
    row :  {
        flexDirection :'row',
        paddingHorizontal : 10, 
        paddingVertical : 5 ,
        backgroundColor : '#ffffff',
        marginHorizontal : 10,
        marginVertical : 5,
        alignItems : 'center',
        justifyContent : 'center',
    },
    square : {
        height : 80,
        width : 80,
        backgroundColor : '#e3e3e3',
        marginHorizontal : 10,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center',
    },
    text : {
        fontSize : 16,
        fontWeight : '600',
        color : '#000000'
    },
    text1 : {
        fontSize : 16,
        fontWeight : '600',
        color : '#FF4444'
    },
    accept : { 
        fontSize : 18,
        fontWeight : '700',
        color : '#1668c7',
        alignItems : 'center',
        justifyContent : 'center',
        textAlign : 'center',
        paddingBottom : 20,
    }

})