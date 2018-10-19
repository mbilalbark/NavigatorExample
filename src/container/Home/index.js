import React from 'react';
import {Text, View,TouchableOpacity } from 'react-native';

class Home extends React.Component {

    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    Home Screen
                </Text>
                <TouchableOpacity style={{marginTop:20,backgroundColor: '#DDDDDD'}} onPress={()=>this.props.navigation.navigate('Second')}> 
                   <Text>Go to Second Screen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Home