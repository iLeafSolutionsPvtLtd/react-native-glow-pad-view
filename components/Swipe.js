import React, {Component} from 'react';
import {
          View,
          Text,
          StyleSheet,
          Image,
          PanResponder,
          Animated,
          Dimensions
        } from 'react-native';
import Pulses from './Pulses'
import * as Animatable from 'react-native-animatable';
const {width,height} =Dimensions.get('window');
let imageObj={}

export default class FlexDirectionBasics extends Component{
    constructor(props){
        super(props);
        this.state = {
                      pan: new Animated.ValueXY(0),
                      scale: new Animated.Value(1),
                      color:'red',
                      animatingKey: true
                    };
                    imageObj ={
                      style: props.imageStyle,
                      source:props.imageSourcePath || {uri:props.imageSourceUri}
                    }
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => false,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderGrant: (e, gestureState) => {
              this.setState({animatingKey:false},()=>{
                this.props.onMove(this.state.animatingKey)
              })
                console.log("ON_RESPONDER_GRANT",gestureState);
                if(gestureState.vx == 0 && gestureState.vy == 0){
               this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
               this.state.pan.setValue({x:0, y:0});
               Animated.spring(
                  this.state.scale,
                    { toValue: 1.1, friction: 0, tension:0,  stiffness:0 }
                  ).start();
                }

            },
            onPanResponderMove:
          //    console.log('gestureState: ',gestureState,evt);
            Animated.event([null,{
                dx  : this.state.pan.x,
                dy  : null
            }
          ]),
            onPanResponderRelease: (e, gestureState) => {
                console.log("ON_RESPONDER_RELEASE",gestureState);
                this.setState({animatingKey:true},()=>{
                  this.props.onMove(this.state.animatingKey)
                })
                //this.state.pan.setValue({x:80});
                Animated.spring(this.state.pan, {
                   toValue: { x: 0, y: 0 },
                   friction: 5
                 }).start();
                this.state.pan.flattenOffset();

                if(gestureState.moveX<50){
                  this.props.swipeActive('No')
                }
                if(gestureState.moveX>50){
                  this.props.swipeActive('Yes')
                }
            }
          });

      }


      renderView(){

         let imageStyle = {transform: [{translateX:this.state.pan.x}, {translateY:this.state.pan.y}]};
        return(
          <Animatable.View ref={(c) => this.swipe = c} style={imageStyle}{...this._panResponder.panHandlers}>
            <Animated.View>
              <View style={styles.container}>
              <Pulses
              color= {this.props.pulseColor}
              numPulses={this.props.pulseCount}
              diameter={this.props.pulseDiameter}
              speed={this.props.pulseSpeed}
              duration={this.props.pulseDuration}
              image={
                imageObj
              }
              />
              </View>
            </Animated.View>
          </Animatable.View>
        )
      }

      renderPosition(gestureState){
          console.log('gestureState',gestureState);
          if(gestureState.dx>0 || gestureState.dy>0){
            this.state.pan.setValue({x:-5,y:-5});
          }
          if(gestureState.dx<0 || gestureState.dy<0){
          this.state.pan.setValue({x:5,y:-5});
          }
      }

  render(){
    let imageStyle = {transform: [{translateX:this.state.pan.x}]};
    return(
            <View style={styles.main}>
            {this.renderView()}
            </View>
    )}
}
const styles = StyleSheet.create({
container:{
      height:height/2,
      width:height/2,
      borderRadius:80,
      marginBottom:40
},
main:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
     },
})
