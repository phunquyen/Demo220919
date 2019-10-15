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
            note:'',
            key:"",
            // count:0,
        };
    }
   
    // _onCount(){
    //     this.setState({count: this.state.count + 1})
    // }

    // onpen modal
    showAddModal = (key) => {
        this.setState({key:key})
        this.refs.myModal.open();
    }
    
    // luu note
    savenote(key){
        this.props.savenote(key);
        this.refs.myModal.close()
        console.log(key)
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
                    onPress={() => this.savenote(this.state.key)}>
                    Save
                </Button>
            </Modal>
        );
    }
}