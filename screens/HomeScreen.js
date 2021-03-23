import {
    Alert, FlatList,
    View, Image, Text, Button, StyleSheet, SafeAreaView, ScrollView, Dimensions,

    TouchableOpacity
} from 'react-native';
import { Card, Badge, Banner, Divider, List } from 'react-native-paper';
import React, { Component } from 'react';


var { width, height } = Dimensions.get('window');

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            expanded: true,
            data: [
                // { id: 1, title: "Home", color: "#87CEEB",route:"Home", members: 6, image: "https://img.icons8.com/color/48/000000/home.png" },
                { id: 1, title: "Material", color: "#00FFFF",route:"InputMaterial", members: 8, image: "https://img.icons8.com/dusk/70/000000/checklist.png" },
                { id: 2, title: "Report", color: "#191970",route:"ListMaterial", members: 45, image: "https://img.icons8.com/color/70/000000/to-do.png" },
                { id: 3, title: "Chart", color: "#20B2AA",route:"Catalog", members: 23, image: "https://img.icons8.com/color/100/000000/picture.png" },
                { id: 4, title: "Profile", color: "#FF4500",route:"Profile", members: 8, image: "https://img.icons8.com/color/70/000000/name.png" },
                { id: 5, title: "News",route:"News", color: "#6A5ACD", members: 5, image: "https://img.icons8.com/color/48/000000/news.png" },
                { id: 6, title: "Suggestion Box",route:"SuggestionBox", color: "#6A5ACD", members: 5, image: "https://img.icons8.com/color/48/000000/idea.png" },
                { id: 7, title: "Users", color: "#FF69B4",route:"InputMaterial", members: 6, image: "https://img.icons8.com/color/70/000000/groups.png" },
                { id: 8, title: "Training", color: "#00BFFF",route:"News", members: 7, image: "https://img.icons8.com/color/70/000000/classroom.png" },
               
            ],
            
        };
     
    }
    clickEventListener =(item) =>{
        const { navigation } = this.props;
    
        this.props.navigation.push(item.route)
        //Alert.alert(item.title)
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                    <FlatList style={styles.list}
                        contentContainerStyle={styles.listContainer}
                        data={this.state.data}
                        horizontal={false}
                        numColumns={2}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.card} onPress={() => { this.clickEventListener(item) }}>
                                    <View style={styles.cardFooter}></View>
                                    <Image style={styles.cardImage} source={{ uri: item.image }} />
                                    <View style={styles.cardHeader}>
                                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                                            <Text style={styles.title}>{item.title}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }} />

            </SafeAreaView>
        );
    }
}



export default HomeScreen;


const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        borderColor: 'black',
    },
    baseText: {
        fontFamily: "Cochin"
    },
    // container: {
    //     flex: 1,

    // },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    facilityMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,

    },
    caption: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 14,
        lineHeight: 14,
    },
    divider: {
        backgroundColor: 'black',
    },

    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 3,
    },
    text: {
        fontSize: 14,
        marginTop: 5,
        marginBottom: 5,
    },
    titleText: {
        fontSize: 16,
        fontWeight: "bold"
    },
    rateScore: {
        alignItems: 'center',
        // backgroundColor: 'yellow',
    },
    badge: {
        backgroundColor: 'yellow',
        alignItems: 'center',
    },
    // menu baru
    container: {
        flex: 1,
        marginTop: 20,
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: "#E6E6E6",
    },
    listContainer: {
        alignItems: 'center'
    },
    /******** card **************/
    card: {
        shadowColor: '#00000021',

        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginVertical: 10,
        backgroundColor: "white",
        flexBasis: '42%',
        marginHorizontal: 10,
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        height: 70,
        width: 70,
        alignSelf: 'center'
    },
    title: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#696969"
    },
});

// const styles = StyleSheet.create({
//     container:{
//       flex:1,
//       marginTop:20,
//     },
//     list: {
//       //paddingHorizontal: 5,
//       backgroundColor:"#E6E6E6",
//     },
//     listContainer:{
//       alignItems:'center'
//     },
//     /******** card **************/
//     card:{
//       marginHorizontal:2,
//       marginVertical:2,
//       flexBasis: '48%',
//     },
//     cardHeader: {
//       paddingVertical: 17,
//       paddingHorizontal: 16,
//       borderTopLeftRadius: 1,
//       borderTopRightRadius: 1,
//       flexDirection: 'row',
//       alignItems:"center", 
//       justifyContent:"center"
//     },
//     cardContent: {
//       paddingVertical: 12.5,
//       paddingHorizontal: 16,
//     },
//     cardFooter:{
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       paddingTop: 12.5,
//       paddingBottom: 25,
//       paddingHorizontal: 16,
//       borderBottomLeftRadius: 1,
//       borderBottomRightRadius: 1,
//     },
//     cardImage:{
//       height: 70,
//       width: 70,
//       alignSelf:'center'
//     },
//     title:{
//       fontSize:16,
//       flex:1,
//       color:"#FFFFFF",
//       fontWeight:'bold'
//     },
//     subTitle:{
//       fontSize:12,
//       flex:1,
//       color:"#FFFFFF",
//     },
//     icon:{
//       height: 20,
//       width: 20, 
//     }
//   });  