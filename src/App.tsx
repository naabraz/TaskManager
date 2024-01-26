import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Button } from 'react-native';

import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Initial Screen</Text>
          <Button title="Crash" onPress={() => crashlytics().crash()} />
          <Button
            title="Event"
            onPress={async () =>
              await analytics().logEvent('add_task', {
                name: 'buy bread',
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
