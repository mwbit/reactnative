import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

import Voice from 'react-native-voice';

class VoiceTest extends Component {
  state = {
    recognized: '',
    pitch: '',
    error: '',
    end: '',
    started: '',
    results: [],
    partialResults: [],
  };

  constructor(props) {
    super(props);
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechRecognized = this.onSpeechRecognized;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart = e => {
    this.setState({
      started: '√',
    });
  };

  onSpeechRecognized = e => {
    this.setState({
      recognized: '√',
    });
  };

  onSpeechEnd = e => {
    this.setState({
      end: '√',
    });
  };

  onSpeechError = e => {
    this.setState({
      error: JSON.stringify(e.error),
    });
  };

  onSpeechResults = e => {
    this.setState({
      results: e.value,
    });
  };

  onSpeechPartialResults = e => {
    this.setState({
      partialResults: e.value,
    });
  };

  onSpeechVolumeChanged = e => {
    this.setState({
      pitch: e.value,
    });
  };

  _startRecognizing = async () => {
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });

    try {
      await Voice.start('pt-BR');
    } catch (e) {
      console.error(e);
    }
  };

  _stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  _cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Voice Recognition</Text>
        <Text style={styles.instructions}>Press the button and start speaking.</Text>
        <TouchableHighlight onPress={this._startRecognizing}>
          <Image style={styles.button} source={require('./button.png')} />
        </TouchableHighlight>  
        <View style={styles.boxButtons}>
          <TouchableHighlight onPress={this._stopRecognizing}>
            <Text style={styles.action}>Stop</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._destroyRecognizer}>
            <Text style={styles.action}>Clear</Text>
          </TouchableHighlight>
        </View>
        <Text style={styles.stat}>{`Started: ${this.state.started}`}</Text>
        <Text style={styles.stat}>{`Recognized: ${this.state.recognized}`}</Text>
        <Text style={styles.stat}>Result</Text>
        {this.state.partialResults.map((result, index) => {
          return (
            <Text key={`partial-result-${index}`} style={styles.stat}>
              {result}
            </Text>
          );
        })}
        <Text style={styles.stat}>{`End: ${this.state.end}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop:30,
    marginBottom:15,
    width: 80,
    height: 80,
   
  },
  boxButtons:{
    width:'100%', 
    flexDirection: 'row', 
    justifyContent: 'center',
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#8080ff',
    width: '100%',
    height: 50
  },
  action: {
    textAlign: 'center',
    color: 'white',
    margin: 5,
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
    height: 40,
    backgroundColor: '#0000b3',
    width: 100,
    marginBottom:20
  },
  instructions: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    color: '#333333',
    marginBottom: 5,
  },
  stat: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
    fontSize: 16
  }, 
});

export default VoiceTest;
