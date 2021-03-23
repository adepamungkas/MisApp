import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, Image,TouchableOpacity, } from 'react-native';


class ProfileScreen extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }

  render() {
    const { navigation } = this.props;
    console.log("navigation",navigation)
      return (
        <View style={styles.container}>
            
        <View style={styles.header}>
        {/* <Button title="Go to Profile" onPress={() => this.props.navigation.navigate('Banner')} /> */}
          <View style={styles.headerContent}>
              <Image style={styles.avatar}  source={require('./asset/avatar.jpg')}/>
              <Text style={styles.name}>
                Ade Pamungkas
              </Text>
              
          </View>
        </View>

        <View style={styles.profileDetail}>
          <View style={styles.detailContent}>
            <Text style={styles.title}>NIK</Text>
            <Text style={styles.count}>12345</Text>
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.title}>Username</Text>
            <Text style={styles.count}>ade_pamungkas99</Text>
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.title}>Status</Text>
            <Text style={styles.count}>Active</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Opcion 1</Text>  
            </TouchableOpacity> 
            <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
          </View>
      </View>
    </View>
      );
  }
}

export default ProfileScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    
  },
  header:{
    backgroundColor: "#FFC300",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop:200,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#00CED1"
  },
  count:{
    fontSize:18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    marginTop:40
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00CED1",
  },
  description:{
    fontSize:20,
    color: "#00CED1",
    marginTop:10,
    textAlign: 'center'
  },
});
