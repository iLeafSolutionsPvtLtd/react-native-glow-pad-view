import {
  StyleSheet,
  Dimensions
} from 'react-native';
const {width,height} =Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#A3E1C0'
  },
  contents: {
  flexDirection:'row',
  alignItems:'center',
  padding:15
  },
  opacityLeft:{
    height:0,
    width:0,
    bottom:22,
    left:40
  },
  opacityRight:{
    height:0,
    width:0,
    bottom:22,
    right:40
  },
  viewpager:{
    flex:1
  },
});

export default styles;
