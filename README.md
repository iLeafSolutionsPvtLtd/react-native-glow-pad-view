# react-native-glow-pad-view
A swiping component for React native for both android and ios

## Installation:

Install the component through npm using:

```
npm install react-native-glow-pad-view --save
```

<img src="https://user-images.githubusercontent.com/32927921/35317885-e48f175e-00fe-11e8-8b73-ca41f05a47e0.png" width="280"/>

## Example:
```js
import GlowPadView from 'react-native-glow-pad-view';


          <GlowPadView
            backgroundColor = null
            leftIcon = {true}
            rightIcon = {true}
            pulseColor = 'red'
            pulseCount = {4}
            pulseDiameter = {200}
            pulseSpeed = {15}
            pulseDuration = {2000}
            imageStyle = {{height:20,width:20}}
            imageSourcePath = {null}
            imageSourceUri = 'https://image.ibb.co/b1yygm/uncheck_2x.png'
            swipeActive = {(isActive)=>{alert(isActive);}}
          />
```

## Props:

  ` * ` - mandatory

Props Name | Description
---------- | -----------
`  backgroundColor` | background colour applied to the container view
`* swipeActive` | indicates the directional move of the swiper
`  leftIcon` | enables for true and disables for false
`  rightIcon` | enables for true and disables for false
`  pulseColor` | describes the color for the pulse
`  pulseCount` | describes the pulse count
`  pulseDiameter` | describes the pulse diameter
`  pulseSpeed` | describes the pulse speed
`  pulseDuration` | describes the pulse duration
`  imageStyle` | user could define styles for image
`  imageSourcePath` | describes image path
`  imageSourceUri` | describes image source uri
# react-native-glow-pad-view
