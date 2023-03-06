import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const MenuExamples = ({data}) => {
    console.log(data)
  return (
    <View>
      <Text style={style.textName}> {data.name} </Text>
      <Image style={style.img} source={{uri: data.img}} />
    </View>
  )
}

const style = StyleSheet.create({
    textName: {
        fontSize: 20,
        color: '#fff'
    },
    img: {
        width: 100,
        height: 100
    }
})

export default MenuExamples
