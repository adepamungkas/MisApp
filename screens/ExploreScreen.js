import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';

export default class ExploreScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword:"",
      data: [
        {id:1, icon:"https://img.icons8.com/fluent/48/000000/big-parcel.png", description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"},
        {id:2, icon:"https://img.icons8.com/fluent/48/000000/food.png", description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
        {id:3, icon:"https://img.icons8.com/fluent/48/000000/kitchenwares.png", description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
        {id:4, icon:"https://img.icons8.com/fluent/48/000000/souvenirs.png", description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
        {id:5, icon:"https://img.icons8.com/fluent/48/000000/fruit-bag.png", description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
        {id:6, icon:"https://img.icons8.com/fluent/48/000000/oat-milk.png", description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
        {id:7, icon:"https://img.icons8.com/fluent/48/000000/teaser.png", description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
        {id:8, icon:"https://img.icons8.com/flat_round/70/000000/cow.png", description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"},
        {id:9, icon:"https://img.icons8.com/fluent/48/000000/cola.png", description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"},
      ],
    };
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://img.icons8.com/search/androidL/100/2ecc71'}}/>
            <TextInput style={styles.inputs}
                ref={'txtPassword'}
                placeholder="Search"
                value={this.state.keyword}
                underlineColorAndroid='transparent'
                onChangeText={(keyword) => this.setState({keyword})}/>
          </View>

          <TouchableHighlight style={styles.saveButton} onPress={() => this.onClickListener('search')}>
           
            <Image style={[styles.icon, styles.iconBtnSearch]} source={{uri: 'https://img.icons8.com/fluent/48/000000/search.png'}}/>
          </TouchableHighlight>
        </View>

        <FlatList 
          style={styles.notificationList} 
          enableEmptySections={true}
          data={this.state.data}
          renderItem={({item}) => {
            return (
              <View style={styles.notificationBox}>
                <Image style={styles.image}
                  source={{uri: item.icon}}/>
                
                <Text style={styles.description}>{item.description}</Text>
              </View>
            )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  formContent:{
    flexDirection: 'row',
    marginTop:10,
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:10,
      borderBottomWidth: 1,
      height:45,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      margin:10,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  saveButton: {
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
    width:70,
    alignSelf: 'flex-end',
    backgroundColor: '#F3F7F9',
    borderRadius:10,
  },
  saveButtonText: {
    color: 'white',
  },
  notificationList:{
    padding:10,
  },
  notificationBox: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius:10,
  },
  image:{
    width:45,
    height:45,
  },
  description:{
    fontSize:14,
    color: "#3498db",
    padding:5,
    marginLeft:10,
  },
});
  