import React from 'react'
import WeatherScreen from './components/WeatherScreen'
import ZipCodeScreen from './components/ZipCodeScreen'
import { createStackNavigator } from 'react-navigation'

const RootStack = createStackNavigator({
  Weather: WeatherScreen,
  ZipCode: ZipCodeScreen
},{
  initialRouteName: 'Weather',
  initialRouteParams: {zipPlace: 'Phuket'}
})


export default class App extends React.Component {  
  render() {
    return (
      <RootStack/>
    )
  }
}