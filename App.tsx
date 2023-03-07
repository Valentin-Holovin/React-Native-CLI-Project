import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});

const App = () => {
  const { t } = useTranslation();

  return (
    <GestureHandlerRootView style={styles.layout}>
      <SafeAreaProvider>
        <View>
          <Text>{t('text')}</Text>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
