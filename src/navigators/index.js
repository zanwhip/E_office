import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import loginscreen from '../screens/loginscreen';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { dataCBVCScreen, documentScreen, noticeScreen, noticedetailScreen, reportmanageScreen, settingScreen, submissionmanageScreen, welcomescreen, workflowmanageScreen } from '../screens';
import introduceScreen from '../screens/introduceScreen';
import newScreen from '../screens/newScreen';








const Stack = createStackNavigator();
const Navigators = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
           {/* <Stack.Screen name="Login" component={loginscreen} /> */}
           {/* <Stack.Screen name="Welcome" component={welcomescreen} /> */}
           {/* <Stack.Screen name="Introduce" component={introduceScreen} /> */}
           {/* <Stack.Screen name="New" component={newScreen} /> */}
           {/* <Stack.Screen name="DataCBVC" component={dataCBVCScreen} /> */}
           {/* <Stack.Screen name="Notice" component={noticeScreen} /> */}
           <Stack.Screen name="Noticedetail" component={noticedetailScreen} />
           {/* <Stack.Screen name="Reportmange" component={reportmanageScreen} /> */}
           {/* <Stack.Screen name="Submissionmanage" component={submissionmanageScreen} /> */}
           {/* <Stack.Screen name="Workflowmanage" component={workflowmanageScreen} />  */}
           {/* <Stack.Screen name="Document" component={documentScreen} />  */}
           {/* <Stack.Screen name="Setting" component={settingScreen} /> */}
          </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default Navigators;