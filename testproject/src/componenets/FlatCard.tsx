import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlatCrad = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Crads</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card1</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Card2</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Card3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding: 8,
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOne: {
    backgroundColor: '#EF5358',
  },
  cardTwo: {
    backgroundColor: '#64c5b1',
  },
  cardThree: {
    backgroundColor: '#ff8000',
  },
});

export default FlatCrad;
