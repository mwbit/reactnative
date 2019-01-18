import React from 'react'; 
import { Alert, Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles'

export default Item = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Alert.alert(props.name)}>
      <View style = {{flexDirection: 'row', alignItems: 'center'}}> 
      <Image
          style={{width: 50, height: 50,margin: 10}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          borderRadius={50}
        />
        <Text style={styles.textItem} >{props.name}</Text>
      </View>  
      </TouchableOpacity>
    </View>
  )
}