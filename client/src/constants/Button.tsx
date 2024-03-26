import React, {ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import Font from './Font';
import FontSize from './FontSize';
import Spacing from './Spacing';
import Colors from './Colors';

interface Props extends TouchableOpacity {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<Props> = ({style, children, textStyle}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: Colors.accent,
          paddingHorizontal: Spacing.padding.xl,
          paddingVertical: Spacing.padding.base,
          borderRadius: Spacing.borderRadius.base,
          alignItems: 'center',
        },
        style, // This is where the style prop is being applied
      ]}>
      <Text
        style={[
          {
            fontSize: FontSize.base,
            fontFamily: Font['poppins-regular'],
            color: Colors.primary,
          },
          textStyle,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Button;
