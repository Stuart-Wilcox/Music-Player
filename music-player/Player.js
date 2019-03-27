import React from 'react';
import { Text, StyleSheet,Slider, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Audio } from 'expo';

export default class Playing extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      playing: false,
    };
  }

  togglePlay(){
    // flip playing state
    if(this.state.playing){
      this.pause();
    }
    else {
      this.play();
    }
  }

  play(){
    this.setState({playing: true});
    if(this.props.onPlay){
      this.props.onPlay();
    }
    //this.state.sound.playAsync().then(() => console.log('Sound playing!!'));
  }

  pause(){
    this.setState({playing:false});
    if(this.props.onPause){
      this.props.onPause();
    }
    //this.state.sound.pauseAsync().then(() => console.log('Sound paused!!'));
  }

  render(){
    let song = { title: 'Welcome to Paradise', artist: 'Green Day', album: 'Dookie' };
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.subtitle}>{song.artist} - {song.album}</Text>
        </View>
        <View style={styles.coverContainer}></View>
        <View style={styles.controls}>
        <TouchableOpacity style={styles.previous}>
          <Icon name="skip-previous"></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.play} onPress={()=>this.togglePlay()}>
          {this.state.playing?<Icon name="pause"></Icon>:<Icon name="play-arrow"></Icon>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.next}>
          <Icon name="skip-next"></Icon>
        </TouchableOpacity>
        </View>
        <Slider maximumValue={10} minimumValue={0} style={styles.slider}></Slider>
        <View style={styles.time}>
          <Text>0:00</Text>
          <Text>3:23</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  info: {
    flex: 0,
    alignItems: 'center',
    paddingTop: 5,
    width: '100%',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 13,
    color: '#E5E5E5',
  },
  coverContainer: {
    borderColor: '#E5E5E5',
    borderWidth: 0.5,
    backgroundColor: 'red',
    width: '100%',
    flexGrow: 1,
    flexShrink: 0,
    marginTop: 10,
  },
  controls: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  previous: {
    height: 50,
    width: 50,
    borderColor: '#E5E5E5',
    borderWidth: 0.5,
    borderRadius: 25,
    alignItems: 'center',
    marginLeft: 10,
    justifyContent: 'center',
  },
  play: {
    height: 75,
    width: 75,
    borderColor: '#E5E5E5',
    borderWidth: 0.5,
    borderRadius: 37.5,
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
  },
  next: {
    height: 50,
    width: 50,
    borderColor: '#E5E5E5',
    borderWidth: 0.5,
    borderRadius: 25,
    alignItems: 'center',
    marginRight: 10,
    justifyContent: 'center',
  },
  slider: {
    width: '100%',
  },
  time: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
