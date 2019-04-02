import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles'
import Item from './Item'

renderSeparator = (props) => {
  return (
    <View style={styles.separator} />
  );
};

export default ListItem = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data = {props.data.sort((a, b) => a.name.localeCompare(b.name))}
        renderItem={({ item }) => <Item name={item.name} img={item.img}/>}
        ItemSeparatorComponent={this.renderSeparator}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

