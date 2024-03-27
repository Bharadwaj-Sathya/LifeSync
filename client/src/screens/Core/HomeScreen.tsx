import React from 'react';
import {Text, View, StatusBar, SafeAreaView, ScrollView} from 'react-native';
import COLORS from '../../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../assets/css/Style';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <Icon name="sort" size={28} color={COLORS.white} />
        <Icon name="account-circle" size={28} color={COLORS.white} />
      </View>
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 120,
            paddingHorizontal: 20,
          }}>
          <View style={{flex: 1}}>
            <Text style={style.headerTitle}>Good Morning !</Text>
            <Text style={style.headerTitle}>Bharadwaj Sathya</Text>
          </View>
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
