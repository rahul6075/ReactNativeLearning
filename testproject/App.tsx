import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCrad from './src/componenets/FlatCard';
import ElevatedCards from './src/componenets/ElevatedCards';
import FancyCard from './src/componenets/FancyCard';
import ActionCard from './src/componenets/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCrad />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
