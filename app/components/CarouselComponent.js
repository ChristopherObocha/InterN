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

export default class CarouselComponent extends React.Component {


constructor(props){
  super(props);
  this.state = {
    activeIndex:0,
    carouselItems:[
      {
        title:"Item 1",
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
        text: "HWEICS 5",
      },
    ]
  }
}

_renderItem({item,index}){
return (
  <View style={{
    backgroundColor: colors.primary,
    borderRadius: 20,
    height: 200,
    padding: 50,
    marginLeft: 25,
    marginRight: 25, }}>
    <Text style={styles.header}>{item.title}</Text>
    <Text style={styles.paragraph}>{item.text}</Text>
  </View>

)
}

render() {
return (
//   <Screen style={styles.screen}>
    <View style={styles.screen}>
      <Carousel
        layout={"default"}
        ref={ref => this.carousel = ref}
        data={this.state.carouselItems}
        sliderWidth={300}
        itemWidth={300}
        renderItem={this._renderItem}
        onSnapToItem = { index => this.setState({activeIndex:index}) } />
    </View>
//   </Screen>
);
}
}

const styles = StyleSheet.create({
    header: {
      fontSize: 30,
      color: colors.white,      
    },
    paragraph: {
      color: colors.white,
    },
    screen: {
    backgroundColor: colors.white,
    // flex: 1, 
    flexDirection:'row', 
    // justifyContent: 'center',
    marginVertical: 15,
  }
})


// export default CarouselComponent;