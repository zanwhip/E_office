import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { KeycloakProvider } from 'expo-keycloak-auth';
import Navigators from './src/navigators';
import React from 'react';

const keycloakConfig = {
    clientId: 'devoffice',
    realm: 'UDN',
    url: 'https://id.udn.vn:8443/auth',
  };

export default () =>  
<KeycloakProvider {...keycloakConfig}><Navigators /></KeycloakProvider>





  
