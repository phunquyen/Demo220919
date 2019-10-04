import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight, TouchableOpacity } from 'react-native';

export default class FlatListItem extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            activeRowKey: null
        };          
    }
      
    render() {   
                       
        return (  
                <View style={{
                flex: 1,
                flexDirection:'column',                                
                }}>            
                    <View style={{
                            flex: 1,
                            flexDirection:'row',
                            backgroundColor: this.props.index % 2 == 0 ? 'tomato': 'mediumaquamarine'                
                    }}>            
                        <View style={{
                                flex: 1,
                                flexDirection:'column',   
                                height: '100%'                 
                            }}>
                                <TouchableOpacity
                                 onPress={()=>{
                                     this.props.onPress2()
                                 }
                                }
                                 >            
                                <Text style={styles.flatListItem}>{this.props.item.ten_benhnhan}</Text>
                                <Text style={styles.flatListItem}>{this.props.item.loai_benh}</Text>
                                </TouchableOpacity>
                        </View>              
                    </View>

                    <View style={{
                        height: 1,
                        backgroundColor:'white'                            
                    }}>
                        {/* separator */}
                
                    </View>
                </View>   
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,  
    }
});