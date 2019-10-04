import React, { Component } from 'react';
import { FlatList,Text, View, Image, Alert, TouchableHighlight, TouchableOpacity } from 'react-native';
import List from './Data/List';
import AddModal from './Data/AddModal';
import FlatListItem from './Data/FlatListItem'


export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);     
        this.state = ({
            deletedRowKey: null,            
        });
        this.onPressAdd = this.onPressAdd.bind(this);        
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }

    onPressAdd () {
        this.refs.addModal.showAddModal();
    }

    getListViewItem = (item) => {  
        Alert.alert(item.xxx);  
    }
      //handling onPress action
      
    render() {
      return (
        <View style={{flex: 1}}>
            <View style={{
                backgroundColor: 'mediumaquamarine', 
                flexDirection: 'row',
                justifyContent:'flex-end',                
                alignItems: 'center',
                height: 44}}>
                <TouchableHighlight 
                    style={{marginRight: 10}}
                    underlayColor='tomato'
                    onPress={this.onPressAdd}
                    >
                <Image
                    style={{width: 35, height: 35}}
                    source={require('./Data/add.png')}
                />
            </TouchableHighlight>
            </View>
            {/*Button */}

            <FlatList 
                ref={"flatList"}
                data={List}
                renderItem={({item, index})=>{
                    return (
                    <FlatListItem 
                    onPress2={this.getListViewItem.bind(this, item)} 
                    item={item} 
                    index={index} 
                    parentFlatList={this}
                    onClick= {(a) => console.log(a) }
                    />);
                }}
                
                >
                {/* flatList */}

            </FlatList>
            <AddModal ref={'addModal'} parentFlatList={this} >
            </AddModal>
            {/*addModel*/}

        </View>
      );
    }
}