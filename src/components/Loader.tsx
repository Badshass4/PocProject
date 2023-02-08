import { View, Text } from 'react-native';
import React from 'react';
import FontText from './FontText';
import tw from '../lib/tailwind';

const Loader = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <FontText title="Loading..." />
    </View>
  );
};

export default Loader;
