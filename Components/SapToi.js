import React, { Component } from 'react'
import CustomItem from './CustomItem'
import {FlatList,View,Modal,Text,TouchableHighlight} from 'react-native'
import AddModal from './Data/AddModal'
import List from './Data/List'
export default class SapToi extends Component {
    constructor(props) {
        super(props);
        this.state = {
          countnote1:0,
          key:0,
          arrInfo:[]
        };
        this.onPressAdd1 = this.onPressAdd1.bind(this);
        this.onPressAdd2 = this.onPressAdd2.bind(this);
        this.Click = this.Click.bind(this)        
      }
      Click(item){
        let arrInfo = this.state.arrInfo
        
        for (let index = 0; index < arrInfo.length; index++) {
            const element = arrInfo[index];
            if(item.id === element.id ){
                element.key = !element.key;
                arrInfo [index] = element
                break;
            }
        }
        
        let temp = []
        for (let item of arrInfo) {

            temp.push(item)
            
        }
        console.log(temp)
        this.setState({ arrInfo:temp});
        }

        componentDidMount(){
            this.setState({
                arrInfo: List
            })
        }
    
    showName(name){
        alert(name);
    }
    showStatus(status){
        alert(status);
    }
    refreshFlatList = (activeKey) => {
        this.setState(() => {
            return {
                deletedRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }
    onPressAdd1() {
        this.refs.addModal.showAddModal();
        this.setState({countnote1: this.state.countnote1 + 1})

    }
    onPressAdd2() {
        // this.refs.addModal.showAddModal();
        this.setState({countnote2: this.state.countnote2 + 1})

    }
    clickOpen(){
        this.setState({
            showAddModal:true,
        })
        console.log('hello')
    }

    clickClose(){
        this.setState({
            showAddModal:false
        })
    }
    
    render() 
    {
        return (
            <View style={{flex:1}}>
            <FlatList 
            data={List}
            renderItem={({item}) =><CustomItem xxx={item} showName={this.showName.bind(this)} onPressAdd1={this.onPressAdd1.bind(this)}
            onPressAdd2={this.onPressAdd2.bind(this)}/>}

            />
                {/* FlatList */}

            <AddModal ref={'addModal'} parentFlatList={this} >
            </AddModal>
            {/*addModel*/}
            </View>
            

                )
            }
}



