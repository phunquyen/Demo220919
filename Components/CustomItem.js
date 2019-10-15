import React, { Component } from 'react';
import {
  Text, Image, StyleSheet, View, Alert,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

class CustomItem extends Component {
  constructor(props){
    super()
  }

  handlePress(){
    this.setState(() =>( this.props.xxx.isShowing =! this.props.xxx.isShowing))
  }

  onPressOpenModal(){
    this.props.onPressOpenModal(this.props.xxx.key)
  }

  render() {
    return (
      <View style = {styles.view0}>
        {/* view0 */}
        <View style ={styles.view1}>
              <Text style={{fontWeight:'bold',fontSize:16,width:350}}>{this.props.xxx.ngay_homnay}</Text>
              <Text style={{color:'grey',fontSize:12,}}>{this. props.xxx.so_lich}</Text>
        </View>
        {/* view1 */}         
        <View style={styles.view2}>
              <View >
                <Image style={{width:60,height:60,borderRadius:5}} source={require('./Data/avatar.jpg')}></Image>
              </View>
              {/* image */}
              <View style={{width:220,marginLeft:15}}>
                  <Text style={{fontSize:14,color:'red'}}>{this.props.xxx.ngay_kham}</Text>
                  <Text style={{fontWeight:'bold',fontSize:16,width:150}} onPress={()=>this.props.showName(this.props.xxx.ten_benhnhan)}>{this.props.xxx.ten_benhnhan}</Text>
                  <Text style={{fontSize:14}}>{this.props.xxx.kieu_kham}</Text>
              </View>
              {/* 3 */}
              <View style={{width:80,}}>
                  <Text style={{fontSize:20,fontWeight:'bold',marginBottom:30,marginLeft:60}}>...</Text>
                  <Text style={{fontSize:14,backgroundColor:'red',borderRadius:20,paddingLeft:10,marginBottom:15}}>{this.props.xxx.trang_thai}</Text>
              </View>
        </View>
        {/* view2 */}

        <View style={styles.view3}>
          <View style={{flexDirection:'row'}}>
              <Icon name='map-marker' type='font-awesome' size={16} marginTop={3} />
              <Text style={{fontSize:16,marginLeft:10}}>{this.props.xxx.dia_diem}</Text>
          </View>

          <Text style={{fontSize:12,marginLeft:21}}>{this.props.xxx.dia_chi}</Text>

          <View style={{flexDirection:'row'}}>
              <Icon name='book' type='font-awesome' size={14} marginTop={10} />
              <Text style={{fontSize:14,marginTop:8,marginLeft:7}}>{this.props.xxx.loai_benh}</Text>
          </View>
          {/* ============= */}
        <TouchableOpacity onPress={()=>{this.handlePress()}}>

          <View style={{backgroundColor:'red',width:15,height:15}}>
                <Text style={{color:'white', fontSize:10,paddingLeft:5}}>{this.props.xxx.countnote}</Text>
          </View>
          <View style={this.props.xxx.isShowing? {width:'100%', height:30}: {width:0, height:0}}>
                                    <Text>{this.props.xxx.note}</Text>
          </View>
        </TouchableOpacity>
          
          {/*  ===================*/}
        </View>
        {/* view3 */}

        <View style={styles.view4}>
        <View style={{flexDirection:'row',width:100}}>
              <Icon name='check' type='font-awesome' size={14} marginTop={10} color='blue'/>
              <Text style={{fontSize:14,marginTop:8,marginLeft:7}}>Xong</Text>
          </View>
          <View style={{flexDirection:'row',width:100,marginTop:10}}>
            
              <Icon name='bookmark' type='font-awesome' size={14}   />
              <Text style={{fontSize:14,marginLeft:7,marginBottom:5}} onPress={()=>{this.props.onPressOpenModal()}}>Ghi chú</Text>
              
          </View>
          <View style={{flexDirection:'row',width:100}}>
              <Icon name='adjust' type='font-awesome' size={14} marginTop={10} />
              <Text style={{fontSize:14,marginTop:8,marginLeft:7}}>Thuốc</Text>
          </View>
          <View style={{flexDirection:'row',width:100}}>
              <Icon name='ban' type='font-awesome' size={14} marginTop={10} color='red' />
              <Text style={{fontSize:14,marginTop:8,marginLeft:7}}>Hủy</Text>
          </View>
        </View>

        {/* view4 */}
        {/* </View> */}
        {/* viewX */}
        </View>
        // view0
       
    );
  }
}
CustomItem.propTypes = {
      ngay_homnay: PropTypes.string.isRequired,
      so_lich: PropTypes.string.isRequired,
      ten_benhnhan: PropTypes.string.isRequired,
      kieu_kham: PropTypes.string.isRequired,
      chokham: PropTypes.string.isRequired,
      dia_diem: PropTypes.string.isRequired,
      dia_chi: PropTypes.string.isRequired,
      loaibenh: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      trang_thai: PropTypes.string.isRequired
};


const styles = StyleSheet.create({
  view0: {
    height:270,
    width:'100%',
    marginBottom:10,
  },

  view1:{
    height: 40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#adb1b8',
  },

  view2:{
    width:385,
    height: 80,
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:0.3,
    marginLeft: 5,
    // backgroundColor: 'blue',
  },
  view3:{
    height: 120,
    justifyContent:'center',
    flexDirection:'column',
    borderBottomWidth:0.3,
    marginLeft: 5,

    // backgroundColor: 'orange',
  },
  
  view4:{
    height: 30,
    flexDirection:'row',
    marginLeft:10,
    // backgroundColor: 'tomato',
  }

 
});
export default CustomItem;