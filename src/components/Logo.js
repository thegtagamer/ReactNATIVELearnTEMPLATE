import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';



export default class Logo extends Component<{}> {

	render(){
		return(

	<View style={styles.container}>

		<Image style={{width: 50, height: 50}}
          source={require('../images/logo.png')}/>
			<Text style={styles.logoText}>Portigo.</Text>
	<Text>Connect now</Text>
	</View>


			)
	}
}

const styles = StyleSheet.create({
  container : {

    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText : {
  	marginVertical: 15,
  	fontSize:18,
  	color:'rgba(255,255,255,0.7)'
  }
 
});
