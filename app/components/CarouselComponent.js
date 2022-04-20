import * as React from 'react';
import {
  Text, 
  View,
  StyleSheet,
  SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import Screen from "./Screen";
import colors from "../config/colors";
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { LinearGradient } from 'expo-linear-gradient';

export default class CarouselComponent extends React.Component {


constructor(props){
  super(props);
  this.state = {
    activeIndex:0,
    carouselItems:[
      {
        title:"Item1",
        text: "Text 1",
      },
      {
        title:"Item 2",
        text: "Text 2",
      },
      {
        title:"Item 3",
        text: "Text 3",
      },
      {
        title:"Item 4",
        text: "Text 4",
      },
      {
        title:"Item 5",
        text: "Text 5",
      },
    ]
  }
}

_renderItem({item,index}){
return (
  <View style={{
    backgroundColor: colors.primary,
    borderRadius: 30,
    height: 130,
    paddingTop: 15,
    alignItems: 'center', 
    marginHorizontal: 10,
    }}>
    <LinearGradient 
      colors={['#4EA3FF', '#007AFE]']}>
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.paragraph} numberOfLines={2}>{item.text}</Text>
    </LinearGradient>

  </View>
)
}

render() {
return (
    <View style={styles.screen}>
      <Carousel
        layout={"default"}
        ref={ref => this.carousel = ref}
        data={this.state.carouselItems}
        sliderWidth={250}
        itemWidth={250}
        renderItem={this._renderItem}
        onSnapToItem = { index => this.setState({activeIndex:index}) } />
    </View>
);
}
}

const styles = StyleSheet.create({
    header: {
      fontSize: 21,
      fontWeight: 'bold',
      color: colors.white,      
    },
    paragraph: {
      color: colors.white,
      fontSize: 16,
      // fontWeight: 'bold',
    },
    screen: {
    backgroundColor: colors.light,
    flexDirection:'row', 
    marginVertical: 15,
  }
})


// export default CarouselComponent;