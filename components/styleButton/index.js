import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './style';
const Cars = ({ type }) => {
  const backgroundColor = type === 'primary' ? 'black' : 'white';

  const textColor = type === 'primary' ? 'white' : 'black';
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button , {backgroundColor: backgroundColor}]}
        onPress={() => console.warn('Lol')}
      >
        <Text style={[styles.text, {color: textColor}]}>
          Customize Orders
        </Text>
      </Pressable>
    </View>
  );
};

export default React.memo(Cars);
