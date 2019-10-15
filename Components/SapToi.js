import React, { Component } from 'react'
import CustomItem from './CustomItem'
import {FlatList,View,Modal,Text,TouchableHighlight} from 'react-native'
import AddModal from './Data/AddModal'
import DATA from './Data/List'
export default class SapToi extends Component {
    constructor(props) {
        super(props);
        this.state = {
          countnote1:0,
          key:0,
          data:[]
        };
        this.onPressOpenModal = this.onPressOpenModal.bind(this);
        this.savenote = this.savenote.bind(this)
      }
    
    showName(name){
        alert(name);
    }
    onPressOpenModal(key) {
        this.refs.addModal.showAddModal(key);
    }
    componentDidMount(){
        this.setState({
            data: DATA
        })
    }
     // luu so luong note
     savenote(key){
        let data = this.state.data
        for(let i =  0 ; i< data.length;i++)
        {
            if(key === data[i].key){
                data[i].countnote = data[i].countnote  + 1;
                 break;
            }
        }
        let arr_tmp = [];
        for(let i =  0 ; i< data.length;i++)
        {
            arr_tmp.push(data[i])
        }
        this.setState({data: arr_tmp})
    }
    
    render() 
    {
        return (
            <View style={{flex:1}}>
            <FlatList 
            data={this.state.data}
            renderItem={({item}) =><CustomItem xxx={item} showName={this.showName.bind(this)} onPressOpenModal={this.onPressOpenModal.bind(this)}
            />}

            />
                {/* FlatList */}

            <AddModal ref={'addModal'} savenote = {this.savenote} >
            </AddModal>
            {/*addModel*/}
            </View>
            

                )
            }
}



