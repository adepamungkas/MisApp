
import { FlatList, View, Text, Button, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import React, { Component } from 'react';
import { Caption, DataTable, Title } from 'react-native-paper';
import Service from './data/Service';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import moment from 'moment';
var { width, height } = Dimensions.get('window');
export default class InputMaterialScreen extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();

  }
  state = {
    selectedDate: new Date(),
    tableData: [],
    name: "",

    data: [
      { id: 1, image: "https://bootdey.com/img/Content/avatar/avatar6.png", username: "johndoe1" },
      { id: 2, image: "https://bootdey.com/img/Content/avatar/avatar2.png", username: "johndoe2" },
      { id: 3, image: "https://bootdey.com/img/Content/avatar/avatar3.png", username: "johndoe3" },
      { id: 4, image: "https://bootdey.com/img/Content/avatar/avatar4.png", username: "johndoe4" },
      { id: 5, image: "https://bootdey.com/img/Content/avatar/avatar1.png", username: "johndoe5" },
      { id: 6, image: "https://bootdey.com/img/Content/avatar/avatar6.png", username: "johndoe6" },
    ],
    types: [
      { value: "finish", label: "finish" },
      { value: "semi-finish", label: "semi-finish" },
      { value: "raw", label: "raw" },
    ],
    isShowDate: false,
    Size: 0,
    name: "",
    color: "",
    vendor: "",
    trademark: "",
    description: "",
    type: "",
    inputBy: ""
  }
  componentDidMount() {
    this.setData();

  }

  setData = () => {
    const params = {
      // startDate: moment(this.state.startDate).format('YYYY-MM-DD'),
      // endDate: moment(this.state.endDate).format('YYYY-MM-DD')
    };

    this.setState({ loadingData: true })

  }

  handleCreate = () => {
    const { navigation } = this.props;
    
        

    let params = {
      Color: this.state.color,
      Date: moment(this.state.selectedDate).format(),
      Description: this.state.description,
      IsBroken: false,
      InputBy: this.state.inputBy,
      Name: this.state.name,
      Size: this.state.size,
      Type: this.state.type,
      Trademark: this.state.trademark,
      Vendor: this.state.vendor,
    }
    const myObjStr = JSON.stringify(params);

    this.service
      .createMaterial(params)
      .then((result) => {
        Alert.alert(
          "Success",
          "data has ben succesfully created",
          [
            { text: "OK", onPress: () => this.props.navigation.navigate("Home") }
          ]
        );
      
      });
  }
  showDatepicker = (value) => {
    this.setState({ isShowDate: value })
  }

  render() {
    console.log(this.props.navigation)
    const { tableData } = this.state;


    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

          <View>
            <Text>Material</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="Name"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({ name })} />

          </View>
          <Text>Color</Text>
          <View style={styles.inputContainer}>

            <TextInput style={styles.inputs}
              placeholder="Color"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(color) => this.setState({ color })} />

          </View>
          <Text>Size</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="Size"
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              onChangeText={(size) => this.setState({ size })} />

          </View>
          <Text>Vendor</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="Vendor"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(vendor) => this.setState({ vendor })} />

          </View>
          <Text>Trademark</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="Trademark"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(trademark) => this.setState({ trademark })} />

          </View>

          {/* <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View> */}


          <Text>Date</Text>
          <View>
            <TouchableOpacity style={styles.inputContainer} onPress={() => {
              this.showDatepicker(true)
            }} >
              <Text style={styles.inputs}>{moment(this.state.selectedDate).format('YYYY-MM-DD')}</Text>

            </TouchableOpacity>
          </View>
          {this.state.isShowDate === true ? (<DateTimePicker
            testID="dateTimePicker"
            value={this.state.selectedDate}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={(e) => {
              console.log("e adalah", e.nativeEvent.timestamp)
              this.setState({ selectedDate: e.nativeEvent.timestamp, isShowDate: false })

            }}
            style={styles.inputs}
          />) : (<TouchableOpacity></TouchableOpacity>)}

          <View>
            <Text>Description</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputsTexarea}
              multiline={true}
              numberOfLines={4}
              placeholder="Description"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(description) => this.setState({ description })} />

          </View>
          <View>
            <Text>Choose type</Text>
          </View>
          <View style={styles.inputContainer}>
            <Picker
              style={styles.inputs}
              selectedValue={this.state.type}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({type:itemValue})
           
              }>
              <Picker.Item label="raw" value="raw" />
              <Picker.Item label="semi finish" value="semi finish" />
              <Picker.Item label="finish" value="finish" />
            </Picker>

          </View>

          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.handleCreate()}>
            <Text style={styles.loginText}>Submit</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //  alignItems: 'center',
    // backgroundColor: '#DCDCDC',
    marginLeft: 10,
    marginRight: 10,
  },

  buttonDate: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderBottomWidth: 1,
    // width: 300,

    // height: 45,
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    paddingTop: 1,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputsTexarea: {
    height: 90,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    // width: 300,
    borderRadius: 5,
    backgroundColor: 'transparent'
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent'
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText: {
    color: "white",
    fontWeight: 'bold'
  },
  scrollView: {
    // backgroundColor: 'white',
    //marginHorizontal: 3,
  },
});