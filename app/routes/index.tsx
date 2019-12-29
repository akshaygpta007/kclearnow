import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Home from '../screens/home';
import MyContent from '../screens/my-content';

const mainRoutes = createBottomTabNavigator(
  {
    Home,
    MyContent,
  }
);

const AppNavigator = createSwitchNavigator({
  mainRoutes,
});

const Routes = createAppContainer(AppNavigator);

export default Routes;
