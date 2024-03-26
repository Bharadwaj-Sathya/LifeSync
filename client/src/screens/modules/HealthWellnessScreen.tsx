import React from 'react';
import {Text, View, StatusBar, SafeAreaView, ScrollView} from 'react-native';
import COLORS from '../../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../assets/css/Style';
import ListCategories from '../../components/CategoryIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const categoryIcons = [
  {
    icon: <FontAwesome6 name="weight-scale" size={25} color={COLORS.primary} />,
    name: 'Weight Scale',
    screen: 'OnBoardScreen',
  },
  {
    icon: <FontAwesome6 name="bottle-water" size={25} color={COLORS.primary} />,
    name: 'Hydration',
    screen: '',
  },
  {
    icon: <FontAwesome6 name="bowl-rice" size={25} color={COLORS.primary} />,
    name: 'Meal Planner',
    screen: '',
  },
  {
    icon: <Icon name="qr-code-scanner" size={25} color={COLORS.primary} />,
    name: 'Nutrition Scanner',
    screen: '',
  },
];

const HealthWellnessScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <Icon name="sort" size={28} color={COLORS.white} />
        <Icon name="account-circle" size={28} color={COLORS.white} />
      </View>
      <ListCategories categoryIcons={categoryIcons} />
    </SafeAreaView>
  );
};

export default HealthWellnessScreen;
