import React from 'react';
import { View, StyleSheet,ScrollView,Text} from 'react-native';
import { Icon,} from 'react-native-elements';

export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let tabBarLabel = 'Date'
    let tabBarIcon = () => (
        <Icon
            name ='calendar'
            type ='font-awesome'
        />
    );
    return { tabBarLabel, tabBarIcon, };
    //tab bottom
}
  render() {
    return (
      <View style ={styles.container}>
      <View style = {styles.view0}>
        <View style ={styles.view1}>
        </View>
        {/* view1 */}
        
        <View style={styles.view2}>
        </View>
        {/* view2 */}

        <View style={styles.view3}>
        </View>
        {/* view3 */}

        <View style={styles.view4}>
        </View>

        {/* view4 */}
      </View>

       {/* view0 */}
      </View>
      // container
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#5493eb',
  },
  view0: {
    height:300,
    width:'100%'
    // backgroundColor: '#5493eb',
  },
  
  view1:{
    flex: 15,
    height:'100%',
    // backgroundColor: 'red',
  },

  view2:{
    flex: 25,
    // backgroundColor: 'blue',
    height:'100%',
  },
  view3:{
    flex: 45,
    backgroundColor: 'orange',
    height:'100%',
  },
  
  view4:{
    flex: 15,
    height:'100%',
    backgroundColor: 'tomato',
  }

 
});
