import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation'
import HomeScreen from '../Home'
import DateScreen from '../Date'
import FollowScreen from '../Follow'
import AccountScreen from '../Account'


const TabNavigator = createMaterialBottomTabNavigator(
{
    Home:{
        screen: HomeScreen,
        HeaderTitle: 'he'
    },
    Date:{
        screen: DateScreen,
        HeaderTitle: 'he'
    },
    Follow:{
        screen: FollowScreen,
        HeaderTitle: 'he'
    },
    Account:{
        screen: AccountScreen,
        HeaderTitle: 'he'
    },
},
    {
        initialRouteName:'Home',
        activeColor:'red',
        inactiveColor:'black',
        barStyle:{backgroundColor:'#e1e3e6'},
    }
)
export default createAppContainer(TabNavigator)