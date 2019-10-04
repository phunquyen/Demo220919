import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'
import SapToiScreen from '../SapToi'
import TabNavigatorScreen2 from './TabNavigator2'

const TabNavigator = createMaterialTopTabNavigator (
{
    SapToi:{
        screen: SapToiScreen,
        navigationOptions:{
        title :'Sắp tới',
        }
        
    },
    TabNavigator2:{
        screen: TabNavigatorScreen2,
        navigationOptions:{
        title :'Đã xong',
        }
    },
    
},
{
    initialRouteName:'SapToi',
    tabBarOptions: {
        activeTintColor:'blue',
        inactiveTintColor:'#adaca8',
        style: {
          backgroundColor: 'white',
        },
      }
}
    
  
)
export default createAppContainer(TabNavigator)