import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Primary from "./src/pages/Primary";
import Second from "./src/pages/Second";
import UserProvider from "./src/context/provider";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <UserProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Primary" component={Primary} />
            <Tab.Screen name="Second" component={Second} />
          </Tab.Navigator>
        </NavigationContainer>
      </UserProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
