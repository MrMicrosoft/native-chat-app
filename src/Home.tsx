import * as React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationScreenProp, NavigationScreenOptions } from 'react-navigation';
import Store from './Store';

export interface IHomeScreenProps {
  navigation: NavigationScreenProp<any, any>
}

export default class Home extends React.Component<IHomeScreenProps, {}> {
  static navigationOptions: NavigationScreenOptions = {
    title: 'Home'
  };
  constructor(props) {
      super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Home View</Text>
        <FlatList
          data={Store.list}
          extraData={Store.list.length}
          renderItem={({item}) => <Text>{item}</Text>}
        />
        <Button
          title='Move to Test Profile'
          onPress={
            () => {navigate('Test'); }
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
