import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Player from './Player';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Player></Player>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    height: '100%',
    width: '100%',
  },
});
