import React from 'react';
import {Text, View, StatusBar, SafeAreaView, ScrollView} from 'react-native';
import COLORS from '../../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../assets/css/Style';

const ExpenseTracker = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <Icon name="sort" size={28} color={COLORS.white} />
        <Icon name="account-circle" size={28} color={COLORS.white} />
      </View>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

export default ExpenseTracker;
