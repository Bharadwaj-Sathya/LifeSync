/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Tabnavigator from './src/components/navigator/Tabnavigator';
import OnBoardScreen from './src/screens/OnBoardScreen';
import WeightTracker from './src/screens/modules/healthWellness/WeightTracker';
import Hydration from './src/screens/modules/healthWellness/Hydration';
import MealPlanner from './src/screens/modules/healthWellness/MealPlanner';
import NutritionScanner from './src/screens/modules/healthWellness/NutritionScanner';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen
          name="Tab"
          component={Tabnavigator}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen
          name="WeightTracker"
          component={WeightTracker}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen
          name="Hydration"
          component={Hydration}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen
          name="MealPlanner"
          component={MealPlanner}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen
          name="NutritionScanner"
          component={NutritionScanner}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
