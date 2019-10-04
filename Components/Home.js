import React from 'react';
import { View, StyleSheet,ScrollView,Text} from 'react-native';
import { Icon,} from 'react-native-elements';

export default class Home extends React.Component {
  
  render() {
    return (
      <View style = {styles.container}>
        <View style ={styles.Header}>
        </View>
        {/* Header */}
        
        <View style={styles.Mid1}>
        </View>
        {/* Mid */}

        <View style={styles.Mid2}>
        </View>
        {/* Mid */}

        <View style={styles.Footer}>
        </View>
        {/* Footer */}
        
      </View>
      // container1
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#5493eb',
  },
  
  Header:{
    flex: 15,
    height:'100%',
    // backgroundColor: 'red',
  },

  Mid1:{
    flex: 25,
    // backgroundColor: 'blue',
    height:'100%',
  },
  Mid2:{
    flex: 45,
    backgroundColor: 'orange',
    height:'100%',
  },
  
  Footer:{
    flex: 15,
    height:'100%',
    backgroundColor: 'white',
  }

 
});
