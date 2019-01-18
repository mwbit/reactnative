
import React, { Component } from 'react';
import { View } from 'react-native';
import { colors } from './style/index'
import Header from '../src/components/header'
import {listModels} from './models/modelLayouts'
import ListItem from './components/ListItem'
 
export default class App extends Component {
  render() { 
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Header />
        <View>
         <ListItem data = {listModels} />
        </View>
      </View>
    );
  }
}

