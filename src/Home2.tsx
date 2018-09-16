import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp, NavigationScreenOptions } from 'react-navigation';

export interface IHome2ScreenProps {
  navigation: NavigationScreenProp<any, any>
}

export default class Home2 extends React.Component<IHome2ScreenProps, {}> {
  static navigationOptions: NavigationScreenOptions = {
    title: 'Home2'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Home2 View</Text>
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
