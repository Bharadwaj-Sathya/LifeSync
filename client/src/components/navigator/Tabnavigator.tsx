import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Modules
import HomeScreen from '../../screens/Core/HomeScreen';

// Health & Wellness
import HealthWellnessScreen from '../../screens/modules/healthWellness/HealthWellnessScreen';
import WeightTracker from '../../screens/modules/healthWellness/WeightTracker';
import Hydration from '../../screens/modules/healthWellness/Hydration';
import NutritionScanner from '../../screens/modules/healthWellness/NutritionScanner';
import MealPlanner from '../../screens/modules/healthWellness/MealPlanner';

// Mind Body Fit
import MindBodyFitScreen from '../../screens/modules/MindBodyFitScreen';

// Expenses
import ExpenseTracker from '../../screens/modules/ExpenseTracker';

// Savings
import SavingGoals from '../../screens/modules/SavingGoals';

import COLORS from '../../constants/Colors';

const Tab = createBottomTabNavigator();

const Tabnavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: false,
        tabBarShowLabel: true,
        tabBarStyle: style.tabBarStyle,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
          padding: 10,
          color: COLORS.primary,
        },
      }}>
      <Tab.Screen
        name="Health Wellness"
        component={HealthWellnessScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesome6
              name={'heart'}
              size={24}
              color={focused ? COLORS.primary : '#000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mind Body Fit"
        component={MindBodyFitScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name={'yoga'}
              size={24}
              color={focused ? COLORS.primary : '#000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name={'home'}
              size={24}
              color={focused ? COLORS.primary : '#000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Expense"
        component={ExpenseTracker}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesome6
              name={'money-bills'}
              size={24}
              color={focused ? COLORS.primary : '#000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Savings"
        component={SavingGoals}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name={'savings'}
              size={24}
              color={focused ? COLORS.primary : '#000'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    position: 'absolute',
    backgroundColor: '#fff',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
});

export default Tabnavigator;
