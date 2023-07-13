import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Loginscreen from '../screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { DataCBVCScreen, DepartmentScreen, DocumentScreen, ForwardingScreen, NoticeScreen, NoticedetailScreen, ReportmanageScreen, SettingScreen, SubmissionmanageScreen, Welcomescreen, WorkflowmanageScreen, NewScreen } from '../screens';
import IntroduceScreen from '../screens/IntroduceScreen';
import HotnewScreen from '../screens/HotnewScreen';
import OpenletterScreen from '../screens/OpenletterScreen';
import MissionScreen from '../screens/MissionScreen';
import TypicalPeopleScreen from '../screens/TypicalPeopleScreen';









const Stack = createStackNavigator();
const Navigators = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
           <Stack.Screen name="Login" component={Loginscreen} />
           <Stack.Screen name="Welcome" component={Welcomescreen} />
           <Stack.Screen name="Introduce" component={IntroduceScreen} />
           <Stack.Screen name="New" component={NewScreen} />
           <Stack.Screen name="DataCBVC" component={DataCBVCScreen} />
           <Stack.Screen name="Notice" component={NoticeScreen} />
           <Stack.Screen name="Noticedetail" component={NoticedetailScreen} />
           <Stack.Screen name="Reportmange" component={ReportmanageScreen} />
           <Stack.Screen name="Submissionmanage" component={SubmissionmanageScreen} />
           <Stack.Screen name="Workflowmanage" component={WorkflowmanageScreen} /> 
           <Stack.Screen name="Document" component={DocumentScreen} /> 
           <Stack.Screen name="Setting" component={SettingScreen} /> 
           <Stack.Screen name="ForwardingScreen" component={ForwardingScreen} />
           <Stack.Screen name="Department" component={DepartmentScreen} />
           <Stack.Screen name="Hotnew" component={HotnewScreen} />
           <Stack.Screen name="OpenLetter" component={OpenletterScreen} /> 
           <Stack.Screen name="Mission" component={MissionScreen} />
           <Stack.Screen name="TypicalPerson" component={TypicalPeopleScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default Navigators;