import { View, Button, FlatList } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import type { RootState } from '../../redux/store';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { RootStackParamList } from '../../navigation/RootNavigation';
import FontText from '../../components/FontText';
import tw from '../../lib/tailwind';
import { useGetMatchesQuery } from '../../redux/api/matches.api';
import { MATCH_TYPE, TYPE } from '../../utils/constant';

type HomeProps = StackNavigationProp<RootStackParamList, 'Home'>;
const Home = () => {
  const navigation = useNavigation<HomeProps>();
  const dispatch = useAppDispatch();

  const getMatches = useGetMatchesQuery(TYPE.RECENT);
  const { data, error, isLoading } = getMatches;

  const renderItem = ({ item }: { item: keyof typeof MATCH_TYPE }): JSX.Element => {
    return <Button title={item} />;
  };

  if (isLoading) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <FontText title="Loading..." />
      </View>
    );
  }
  return (
    <View>
      <FlatList
        keyExtractor={(index: Number) => index.toString()}
        data={data?.filters?.matchType}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
