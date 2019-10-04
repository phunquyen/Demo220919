import React, { Component } from 'react';
import {
   Text, View, TouchableHighlight, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import List from './List';

var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // ten_benhnhan: '',
            note:'',
            // count:0,
        };
    }
   
    // _onCount(){
    //     this.setState({count: this.state.count + 1})
    // }
    showAddModal = () => {
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});        
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }
    
    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    shadowRadius: 10,
                    width:  280,
                    height: 280
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>New note's information</Text>
                {/* <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}           
                    onChangeText={(text) => this.setState({ ten_benhnhan: text })}
                    placeholder="name"
                    value={this.state.ten_benhnhan}                 
                /> */}
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}
                    
                    onChangeText={(text) => this.setState({ note: text })}
                    placeholder="content"
                    value={this.state.note}
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        marginBottom: 20,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                        // this._onCount()
                        //  if (this.state.ten_benhnhan.length == 0 || this.state.loai_benh.length == 0) {
                        //     alert("Mission Fail");
                        //     return;
                        // }       
                        const newKey = this.generateKey();
                        const newNote = {
                            key: newKey,
                            // ten_benhnhan: this.state.ten_benhnhan,
                            note: this.state.note,

                        };    
                        List.update(newNote);    
                        // this.props.refreshFlatList(newKey);                                
                        this.refs.myModal.close();                                                                       
                    }}>
                    {/* <View style={{backgroundColor:'red',width:15,height:15}}>
                            <Text style={{color:'white', fontSize:10,paddingLeft:5}}>{this.state.count}</Text>
                    </View> */}
                    Save
                </Button>
            </Modal>
        );
    }
}