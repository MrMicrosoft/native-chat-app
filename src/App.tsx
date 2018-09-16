import {
  createBottomTabNavigator, createStackNavigator, createDrawerNavigator
} from 'react-navigation';
import Test from './Test';
import Home from './Home';
import Home2 from './Home2';

const HomeStack = createStackNavigator({
  HomeScreen: {screen: Home},
  Test: {screen: Test}
});

const App = createBottomTabNavigator({
  Home: { screen: HomeStack },
  Home2: { screen: createDrawerNavigator({Home2: {screen: Home2}}) }
});

export default App;