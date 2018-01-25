import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,Dimensions
} from 'react-native';
import images from '../components/images'
import Swipe from '../components/Swipe'
import styles from './styles'
const {width,height} =Dimensions.get('window');

export default class Swiper extends Component{
  constructor(){
    super()
    this.state = {
      isMoving:true
    }
     this.animatedValue = new Animated.Value(0)
  }

  componentDidMount(){
     this.animate();
   }

   animate () {
     this.animatedValue.setValue(0)
     Animated.timing(
       this.animatedValue,
       {
         toValue: 1,
         duration: 1500,
         easing: Easing.linear
       }
     ).start(() => this.animate())
   }

   onMove(isMoving){
     this.setState({isMoving:isMoving},()=>{
     })
   }

  render(){
    const opacity = this.animatedValue.interpolate({
       inputRange: [0, 0.5, 1],
       outputRange: [0, 1, 0]
     })
      console.log('isMoving',this.state.isMoving);
    return(
      <View style={[styles.container,{backgroundColor:this.props.backgroundColor}]}>
        <View style={styles.contents}>
        <Image source={images.close} style={{marginBottom:35}}/>
        <Animated.Image source={this.props.leftIcon===true?images.leftMove:null} style={this.state.isMoving?{opacity,height:20,width:22,bottom:20,left:width/4-15}:styles.opacityLeft}/>
         <Swipe
            pulseColor = {this.props.pulseColor}
            pulseCount = {this.props.pulseCount}
            pulseDiameter = {this.props.pulseDiameter}
            pulseSpeed = {this.props.pulseSpeed}
            pulseDuration = {this.props.pulseDuration}
            imageStyle = {this.props.imageStyle}
            imageSourcePath = {this.props.imageSourcePath}
            imageSourceUri = {this.props.imageSourceUri}
            onMove = {(isMoving)=>this.onMove(isMoving)}
            swipeActive = {(isActive)=>this.props.swipeActive(isActive)}
         />
         <Animated.Image source={this.props.rightIcon===true?images.rightMove:null} style={this.state.isMoving?{opacity,height:20,width:22,bottom:20,right:width/4-15}:styles.opacityRight}/>
         <Image source={images.tick} style={{marginBottom:35}}/>
         </View>
      </View>
    )
  }
}
