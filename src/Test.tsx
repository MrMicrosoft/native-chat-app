import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationScreenOptions } from '../node_modules/@types/react-navigation';

export default class Test extends React.Component<{}, {}> {
  static navigationOptions: NavigationScreenOptions = {
    title: 'Test Screen'
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
