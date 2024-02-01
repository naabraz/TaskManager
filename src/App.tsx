import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = (): React.JSX.Element => (
  <NavigationContainer>
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Initial Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  </NavigationContainer>
);

export default App;
