import * as Expo from "expo";
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Constants } from 'expo';
import { Container, Header, Left, Body, Right, Button, Icon, Title, StyleProvider, Content, Form, Input, Item } from 'native-base';

let status_bar_height = 25;

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Image style={styles.image}
              source={require('./assets/logosvg.png')}
            />
          </Body>
          <Right/>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Email Address" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
          <Button primary style={styles.button}>
            <Text style={styles.buttontext}>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: status_bar_height,
    height: 54 + status_bar_height,
  },
  button: {
    margin: 10,
    padding: '10%',
    alignSelf: 'center',
  },
  buttontext: {
    color: 'white',
  },
  image: {
    height: 70,
    aspectRatio: 1.5, 
    resizeMode: 'contain'
  }
});