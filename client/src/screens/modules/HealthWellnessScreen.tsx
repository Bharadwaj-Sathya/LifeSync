import React from 'react';
import {View, StatusBar, SafeAreaView, ScrollView} from 'react-native';
import COLORS from '../../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../assets/css/Style';
import ListCategories from '../../components/healthWellnss/CategoryIcons';

const CategoriesHW = [
  {
    id: '0',
    name: 'Weight Tracker',
    screenName: 'Mind Body Fit',
    image: 'https://cdn-icons-png.flaticon.com/128/822/822184.png',
  },
  {
    id: '1',
    name: 'Hydration',
    screen: ' ',
    image: 'https://cdn-icons-png.flaticon.com/128/8013/8013441.png',
  },
  {
    id: '2',
    name: 'Nutrition Scanner',
    screen: '',
    image: 'https://cdn-icons-png.flaticon.com/128/11592/11592106.png',
  },
  {
    id: '4',
    name: 'Meal Planner',
    screen: ' ',
    image: 'https://cdn-icons-png.flaticon.com/128/8302/8302686.png',
  },
];

const HealthWellnessScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.header}>
          <Icon name="sort" size={28} color={COLORS.white} />
          <Icon name="account-circle" size={28} color={COLORS.white} />
        </View>
        <ListCategories categoryIcons={CategoriesHW} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HealthWellnessScreen;
