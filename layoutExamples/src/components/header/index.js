import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
const Header = () => (
    <View style={styles.container}>
        {/* //  <Icon name="ios-arrow-back" size={24} style={styles.icon} /> */}
        <Text style={styles.title}>Layout models</Text>
    </View>
);

export default Header;