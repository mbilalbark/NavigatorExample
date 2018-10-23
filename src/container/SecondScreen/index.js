import React from 'react'
import {View, Text} from 'react-native'

class SecondScreen extends React.Component {

    static navigationOptions = {
        title:'Second Screen'
    }
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
                <Text>
                    SecondScreen
                </Text>
            </View>
        )
    }
}

export default SecondScreen