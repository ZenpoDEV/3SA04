import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import Forecast from './Forecast'
import ZipCodeScreen from './ZipCodeScreen'

export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      forecast: {
        main: '-', description: '-', temp: 0
      }
    }
  }
  fetchData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipPlace},th&units=metric&APPID=423c20d0fa6eeb49cf27367ee4ebd7e9`)
      .then((response) => response.json())
      .then((json) => {
        this.setState(
          {
            forecast: {
              name: json.name,
              main: json.weather[0].main,
              description: json.weather[0].description,
              temp: json.main.temp
            }
          })
      })
      .catch((error) => {
        console.warn(error);
      });
  }
  componentDidMount = () => this.fetchData()
  componentDidUpdate = (prevProps) => {
    if (prevProps.zipPlace !== this.props.zipPlace) {
      this.fetchData()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./bg.jpeg')} style={styles.backdrop}>
          <Forecast {...this.state.forecast} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: .5
  },

  backdrop: {
    width: '100%',
    height: '100%'
  },

  Headline: {
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 10,
    color: 'white'
  },
  notiName: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    paddingTop: 120,
},
})