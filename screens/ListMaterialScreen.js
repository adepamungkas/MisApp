
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import React, { Component } from 'react';
import { Caption, DataTable, Title } from 'react-native-paper';
import Service from './../screens/data/Service';

export default class ListMaterialScreen extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();

  }
  state = {
    tableData: [],
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
    this.service
      .getMaterials(params)
      .then((result) => {
        console.log(result);
        this.setState({ activePage: result.page, total: result.total, tableData: result.data })
      });
  }

  render() {
    console.log(this.props.navigation)
    const { tableData } = this.state;
    const items = tableData.map((item, index) => {

      return (
        <DataTable.Row key={index}>
          <DataTable.Cell>{item.Name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.Description}</DataTable.Cell>
          <DataTable.Cell numeric>{item.Color}</DataTable.Cell>
        </DataTable.Row>
      );
    });

    return (
      <View style={styles.container}>
       
        <DataTable>
          <DataTable.Header sortDirection='descending'>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title numeric>Description</DataTable.Title>
            <DataTable.Title numeric>Color</DataTable.Title>
          </DataTable.Header>
          <ScrollView>
            {items}
          </ScrollView>
          <DataTable.Pagination
            page={1}
            numberOfPages={5}
            onPageChange={page => {
              console.log(page);
            }}
            label="1-2 of 6"
          />
        </DataTable>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
});