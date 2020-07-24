import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings84123Navigator from '../features/Settings84123/navigator';
import UserProfile84121Navigator from '../features/UserProfile84121/navigator';
import BlankScreen182760Navigator from '../features/BlankScreen182760/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings84123: { screen: Settings84123Navigator },
UserProfile84121: { screen: UserProfile84121Navigator },
BlankScreen182760: { screen: BlankScreen182760Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
