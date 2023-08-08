import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Loginscreen from '../screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { DataCBVCScreen, DepartmentScreen, DocumentScreen, ForwardingScreen, NoticeScreen, NoticedetailScreen, ReportmanageScreen, SettingScreen, SubmissionmanageScreen, Welcomescreen, WorkflowmanageScreen } from '../screens';
import NewScreen from '../screens/News/NewScreen';
import IntroduceScreen from '../screens/IntroduceScreen';
import HotnewScreen from '../screens/News/HotnewScreen';
import OpenletterScreen from '../screens/Introduce/OpenletterScreen';
import MissionScreen from '../screens/Introduce/MissionScreen';
import TypicalPeopleScreen from '../screens/Introduce/TypicalPeopleScreen';
import HistoryScreen from '../screens/Introduce/HistoryScreen'
import SalaryScreen from '../screens/SalaryScreen';
import ProcessManageScreen from '../screens/Manage/ProcessManageScreen';
import WorkManageScreen from '../screens/Work/WorkManageScreen';
import WorkDetailScreen from '../screens/Work/WorkDetailScreen';
import ReplyEmailScreen from '../screens/Notice/ReplyEmailScreen';
import IncomingDocumentaryScreen from '../screens/Document/IncommingDocumentaryScreen';
import InternalDocumentReceiveScreen from '../screens/Document/InternalDocumentReceiveScreen';
import InternalDocumentSendScreen from '../screens/Document/InternalDocumentSendScreen';
import OutgoingDocumentaryScreen from '../screens/Document/OutgoingDocumentaryScreen';
import InterfaceSettingScreen from '../screens/Settings/InterfaceSettingScreen';
import NoticeSettingScreen from '../screens/Settings/NoticeSettingScreen';
import LanguageSettingScreen from '../screens/Settings/LanguageSettingScreen';

import MessageScreen from '../screens/MessageScreen';
import ReportWorkScreen from '../screens/Work/ReportWorkScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import RegisterScheduleScreen from '../screens/Schedule/RegisterScheduleScreen';
import SetSchedule from '../screens/Schedule/SetSchedule';
import SetScheduleScreen from '../screens/Schedule/SetSchedule';
import DetailScheduleScreen from '../screens/Schedule/DetailScheduleScreen';
import EditScheduleScreen from '../screens/Schedule/EditScheduleScreen';
import ScheduleWeekScreen from '../screens/Schedule/ScheduleWeekScreen';
import CreateWorkReport from '../screens/Work/CreateWorkReport';
import DocumentDetailScreen from '../screens/Document/DocumentDetailScreen';
import ReplyDocumentScreen from '../screens/Document/ReplyDocumentScreen';
import DetailReportScreen from '../screens/Work/DetailReportScreen';
import EditDetailReportScreen from '../screens/Work/EditDetailReportScreen';








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
           <Stack.Screen name="Hotnew" component={HotnewScreen} />
           <Stack.Screen name="OpenLetter" component={OpenletterScreen} /> 
           <Stack.Screen name="Mission" component={MissionScreen} />
           <Stack.Screen name="TypicalPerson" component={TypicalPeopleScreen} />
           <Stack.Screen name="History" component={HistoryScreen} />
           <Stack.Screen name="Salary" component={SalaryScreen} />
           <Stack.Screen name="ProcessManage" component={ProcessManageScreen} />
           <Stack.Screen name="WorkManage" component={WorkManageScreen} /> 
           <Stack.Screen name="WorkDetail" component={WorkDetailScreen} />
           <Stack.Screen name="ReplyEmail" component={ReplyEmailScreen} />
           <Stack.Screen name="IncommingDocumetary" component={IncomingDocumentaryScreen} />
           <Stack.Screen name="InternalDocumentReceive" component={InternalDocumentReceiveScreen} />
           <Stack.Screen name="InternalDocumentSend" component={InternalDocumentSendScreen} />
           <Stack.Screen name="OutgoingDocumentary" component={OutgoingDocumentaryScreen} /> 
            <Stack.Screen name="Forwarding" component={ForwardingScreen} />
           <Stack.Screen name="DocumentDetail" component={DocumentDetailScreen} />       
           <Stack.Screen name="ReplyDocument" component={ReplyDocumentScreen} />       
           <Stack.Screen name="InterfaceSetting" component={InterfaceSettingScreen} />
           <Stack.Screen name="NoticeSetting" component={NoticeSettingScreen} />
           <Stack.Screen name="LanguageSetting" component={LanguageSettingScreen} />
           <Stack.Screen name="Department" component={DepartmentScreen} /> 
           <Stack.Screen name="Mess" component={MessageScreen} /> 
           <Stack.Screen name="ReportWork" component={ReportWorkScreen} />
           <Stack.Screen name="Statistics" component={StatisticsScreen} /> 
           <Stack.Screen name="RegisterSchedule" component={RegisterScheduleScreen} /> 
           <Stack.Screen name="SetSchedule" component={SetScheduleScreen} />
           <Stack.Screen name="DetailSchedule" component={DetailScheduleScreen} />
           <Stack.Screen name="EditSchedule" component={EditScheduleScreen} /> 
           <Stack.Screen name="ScheduleWeek" component={ScheduleWeekScreen} />
           <Stack.Screen name="CreateWorkReport" component={CreateWorkReport} />
           <Stack.Screen name="DetailReport" component={DetailReportScreen} />
           <Stack.Screen name="EditDetailReport" component={EditDetailReportScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default Navigators;