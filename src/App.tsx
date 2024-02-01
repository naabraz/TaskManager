import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';
import perf from '@react-native-firebase/perf';

async function getRequest(url: string) {
  // Define the network metric
  const metric = await perf().newHttpMetric(url, 'GET');

  // Define meta details
  metric.putAttribute('user', 'abcd');

  // Start the metric
  await metric.start();

  // Perform a HTTP request and provide response information
  const response = await fetch(url);
  metric.setHttpResponseCode(response.status);
  metric.setResponseContentType(response.headers.get('Content-Type'));
  metric.setResponsePayloadSize(Number(response.headers.get('Content-Length')));

  // Stop the metric
  await metric.stop();

  return response.json();
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
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
            <Button
              title="Perf Request"
              onPress={() =>
                getRequest('https://cadiesart.com/api/home/').then(json => {
                  console.log(json);
                })
              }
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
