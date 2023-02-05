import { View, Button } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import type { RootState } from '../../redux/store';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { RootStackParamList } from '../../navigation/RootNavigation';
import { decrement, increment, incrementAsync, incrementByAmount } from '../../redux/slices/counter.slice';
import FontText from '../../components/FontText';
import tw from '../../lib/tailwind';

type HomeProps = StackNavigationProp<RootStackParamList, 'Home'>;
const Test = () => {
  const navigation = useNavigation<HomeProps>();
  const dispatch = useAppDispatch();

  const { value } = useAppSelector((state: RootState) => state.counter);

  return (
    <View>
      <FontText title="Screen A" style={tw`text-lg text-red-500`} />
      <FontText title={`Count : ${value}`} style={tw`text-lg text-red-500`} />

      <Button onPress={() => navigation.navigate('Detail')} title="Hello" />
      <Button onPress={() => dispatch(increment())} title="Increment" />
      <Button onPress={() => dispatch(incrementByAmount(2))} title="Increment By 2" />
      <Button onPress={() => dispatch(incrementAsync(2))} title="Increment Async" />
      <Button onPress={() => dispatch(decrement())} title="Decrement" />
    </View>
  );
};

export default Test;
