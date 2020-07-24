import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial84160Navigator from '../features/Tutorial84160/navigator';
import NotificationList84132Navigator from '../features/NotificationList84132/navigator';
import Settings84131Navigator from '../features/Settings84131/navigator';
import Settings84123Navigator from '../features/Settings84123/navigator';
import UserProfile84121Navigator from '../features/UserProfile84121/navigator';
import BlankScreen182760Navigator from '../features/BlankScreen182760/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial84160: { screen: Tutorial84160Navigator },
NotificationList84132: { screen: NotificationList84132Navigator },
Settings84131: { screen: Settings84131Navigator },
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
