import {
    Alert, FlatList,
    View, Image, Text, Button, StyleSheet, SafeAreaView, ScrollView, Dimensions,

    TouchableOpacity
} from 'react-native';
import { Card, Badge, Banner, Divider, List } from 'react-native-paper';
import React, { Component } from 'react';
import {
    getBranchName,
    getRating_score,
    getFacilities,
    getPrice_min,
    getPrice_max,
    getOperational_hours
} from './data/MockDataAPI';
import Icon from 'react-native-vector-icons/Ionicons';

var { width, height } = Dimensions.get('window');

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            // branchName: getBranchName(),
            // facilities: getFacilities(),
            // priceMin: getPrice_min(),
            // priceMax: getPrice_max(),
            // operational_hours: getOperational_hours(),
            // rating: getRating_score(),
            expanded: true,
            // data: [
            //     { id: 1, title: "Option 1", image: "https://img.icons8.com/color/70/000000/cottage.png" },
            //     { id: 1, title: "Option 2", image: "https://img.icons8.com/color/70/000000/administrator-male.png" },
            //     { id: 2, title: "Option 3", image: "https://img.icons8.com/color/70/000000/filled-like.png" },
            //     { id: 3, title: "Option 4", image: "https://img.icons8.com/color/70/000000/facebook-like.png" },
            //     { id: 4, title: "Option 5", image: "https://img.icons8.com/color/70/000000/shutdown.png" },
            //     { id: 5, title: "Option 6", image: "https://img.icons8.com/color/70/000000/traffic-jam.png" },
            //     { id: 6, title: "Option 7", image: "https://img.icons8.com/dusk/70/000000/visual-game-boy.png" },
            //     { id: 8, title: "Option 8", image: "https://img.icons8.com/flat_round/70/000000/cow.png" },
            //     { id: 9, title: "Option 9", image: "https://img.icons8.com/color/70/000000/coworking.png" },
            //     { id: 9, title: "Option 10", image: "https://img.icons8.com/nolan/70/000000/job.png" },
            // ]

            data: [
                { id: 1, title: "Home", color: "#87CEEB",route:"Home", members: 6, image: "https://img.icons8.com/office/70/000000/home-page.png" },
                { id: 2, title: "Material", color: "#00FFFF",route:"InputMaterial", members: 8, image: "https://img.icons8.com/dusk/70/000000/checklist.png" },
                { id: 3, title: "Report", color: "#191970",route:"ListMaterial", members: 45, image: "https://img.icons8.com/color/70/000000/to-do.png" },
                { id: 4, title: "Chart", color: "#20B2AA",route:"InputMaterial", members: 23, image: "https://img.icons8.com/dusk/70/000000/globe-earth.png" },
                { id: 5, title: "Profile", color: "#FF4500",route:"Profile", members: 8, image: "https://img.icons8.com/color/70/000000/name.png" },
                { id: 6, title: "Users", color: "#FF69B4",route:"InputMaterial", members: 6, image: "https://img.icons8.com/color/70/000000/groups.png" },
                { id: 7, title: "Training", color: "#00BFFF",route:"InputMaterial", members: 7, image: "https://img.icons8.com/color/70/000000/classroom.png" },
                { id: 8, title: "Family Gathering",route:"InputMaterial", color: "#6A5ACD", members: 5, image: "https://img.icons8.com/color/70/000000/family.png" },
               
               
                
               
            ],
            
        };
     
    }
    clickEventListener =(item) =>{
        const { navigation } = this.props;
    // console.log("navigation",navigation)
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



                    {/* <Card>
                        <Card.Cover source={require('./asset/sample-house.png')}/>
                    </Card>
                    <Text style={styles.headerText}>
                        {this.state.branchName}
                    </Text>


                    <Divider style={styles.divider}/>
                    <View style={styles.rateScore}>
                        <Badge
                            style={styles.badge}>Rating: {this.state.rating}</Badge>
                    </View>
                    <Divider style={styles.divider}/>
                    <View style={styles.titleText}>
                        <View>
                            <Text style={styles.titleText}>Jam Operasional</Text>
                        </View>
                                {this.state.operational_hours.map((item) => {
                                    var hari

                                    switch (item.day) {
                                        case 0:
                                            hari="minggu"
                                            break;
                                        case 1:
                                            hari="Senin"
                                            break;
                                        case 2:
                                            hari="Selasa"
                                            break;
                                        case 3:
                                            hari="Rabu"
                                            break;
                                        case 4:
                                            hari="Kamis"
                                            break;
                                        case 5:
                                            hari="Jumat"
                                            break;
                                        case 6:
                                            hari="Sabtu"
                                    }
                                    return (
                                        <Text key={item.id}>
                                            {hari} : {item.hour_start} WIB - {item.hour_end} WIB </Text>

                                    );
                                })}



                    </View>
                    <Divider style={styles.divider}/>
                    <View style={styles.fixToText}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => Alert.alert('Left button pressed')}
                        >
                            <Text style={styles.titleText}>Tentang</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => Alert.alert('Left button pressed')}
                        >
                            <Text style={styles.titleText}>Menu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => Alert.alert('Left button pressed')}
                        >
                            <Text style={styles.titleText}>Ulasan</Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={styles.divider}/>
                    <View style={styles.caption}>
                        <Text>Rata-Rata Harga</Text>

                    </View>
                    <View style={styles.text}>
                        <Text>Rp. {this.state.priceMin} - Rp. {this.state.priceMax}</Text>

                    </View>
                    <Divider style={styles.divider}/>
                    <View style={styles.caption}>
                        <Text>Facilitas</Text>
                    </View>
                    <View style={styles.facilityMenu}>

                        {this.state.facilities.map((item) => {
                            return (

                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => Alert.alert('Left button pressed')}
                                    key={item.id}
                                >
                                    <Image source={{uri: `${item.image_url}`}} style={{width: 20, height: 20}}/>

                                </TouchableOpacity>
                            );
                        })}
                    </View>
                    <Divider style={styles.divider}/>
                    <Text style={styles.text}>
                        Masuk ke halaman "My Booking" dan pilih Deals yang ada pada "Upcoming Booking"

                    </Text>
                    <Text style={styles.text}>
                        Buka dan perlihatkan Booking Code kamu kepada staff restoran.

                    </Text>
                    <Text style={styles.text}>
                        Hanya berlaku terhadap timeslot yang ada dan produk yang telah dipesan.

                    </Text>
                    <Text style={styles.text}>
                        User harus hadir pada saat redemption
                    </Text> */}
                {/* </ScrollView> */}
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