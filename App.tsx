import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { RootNavigator } from 'navigation/RootNavigation';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});

const App = () => (
  <GestureHandlerRootView style={styles.layout}>
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

export default App;
