import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MenuExamples from './MenuExamples';

const MenuItems = ({data}) => {
  return (
    <View>
      <Text style={styles.text}> {data.titulo} </Text>
        <Text style={styles.subText}> {data.subtitulo} </Text>
      {data.examples.map(example => <MenuExamples key={example.id} data={example} />)}
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: '35px',
      },
      subText: {
        color: '#fff',
        fontSize: '25px'
      }
})

export default MenuItems
