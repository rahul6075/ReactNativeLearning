import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Scrollable Crads</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap Me</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap To</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>More..</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  elevated: {
    backgroundColor: '#EF5358',
    borderRadius: 10,
    margin: 8,
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#0033ff',
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
});
