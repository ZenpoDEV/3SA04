import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'

export default class Forecast extends React.Component {
    render() {
        let { name, main, description, temp } = this.props
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 200,

            }}>
                <Text style={styles.notiName}>{name}</Text>
                <Text style={styles.notiMain}>{main}</Text>
                <Text style={styles.notiDesc1}>{description}</Text>
                <Text style={styles.notiTemp}>{temp + " " + "°C"}</Text>
                <Text style={styles.notiDesc3}>Krittamet Petchkor</Text>
                <Text style={styles.notiDesc2}>5935512001 , Computer Engineering</Text>
                <Text style={styles.notiDesc2}>Prince of Songkal University , Phuket Campsu</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    notiName: {
        fontSize: 50,
        color: 'white',
        paddingTop: 180,
    },
    notiTemp: {
        fontSize: 50,
        color: 'white'
    },
    notiMain: {
        fontSize: 25,
        color: 'white',
        paddingBottom: 5,
    },
    notiDesc1: {
        fontSize: 16,
        color: 'white',
        paddingBottom: 10,
    },
    notiDesc2: {
        fontSize: 10,
        color: 'white',
    },
    notiDesc3: {
        fontSize: 14,
        color: 'white',
        paddingTop: 35,
    },

})