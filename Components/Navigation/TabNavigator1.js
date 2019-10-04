import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation'
import TabTopScreen from '../Navigation/TabTopNavigator'
import DateScreen from '../Date'
import FollowScreen from '../Follow'
import AccountScreen from '../Account'
import {Icon} from 'react-native-elements'


const TabNavigator = createMaterialBottomTabNavigator(
{
    TabTop:{
        screen: TabTopScreen,
        navigationOptions:{
            title:'Trang chu',
            tabBarIcon:(params) => {
                let {tiniColor} = params;
                return <Icon color={tiniColor} type='font-awesome' name='windows' size={22} />
            } 
        }
    },
    Date:{
        screen: DateScreen,
        navigationOptions:{
            title:'Lịch Khám',
            tabBarIcon:(params) => {
                let {tiniColor} = params;
                return <Icon color={tiniColor} type='font-awesome' name='calendar' size={24} />
            } 
        }
    },
    Follow:{
        screen: FollowScreen,
        navigationOptions:{
            title:'Theo doi',
            tabBarIcon:(params) => {
                let {tiniColor} = params;
                return <Icon color={tiniColor} type='font-awesome' name='users' size={23} />
            } 
        }
    },
    Account:{
        screen: AccountScreen,
        navigationOptions:{
            title:'Tai khoan',
            tabBarIcon:(params) => {
                let {tiniColor} = params;
                return <Icon color={tiniColor} type='font-awesome' name='user-secret' size={24} />
            } 
        }
    },
},
    {
        initialRouteName:'TabTop',
        activeColor:'blue',
        inactiveColor:'grey',
        barStyle:{backgroundColor:'#e1e3e6'},
    }
)
export default createAppContainer(TabNavigator)