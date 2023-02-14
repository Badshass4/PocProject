import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useGetMatchesQuery } from '../redux/api/matches.api';
import { MATCH_TYPE, TYPE } from '../utils/constant';
import Home from '../screens/HomeScreen/Home';
import Loader from '../components/Loader';
import tw from '../lib/tailwind';
import { theme } from '../../tailwind.config';
import useMatchesQueries from '../navigation/hooks/useMatchesQueries';

const Tab = createMaterialTopTabNavigator();
const HomeTabNavigation = () => {
  const getMatches = useGetMatchesQuery(TYPE.RECENT);
  const { data, error, isLoading } = getMatches;
  const matchType = data?.filters?.matchType;

  if (isLoading) return <Loader />;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 150 },
        tabBarStyle: { backgroundColor: theme.extend.colors.SKY_300 },
        tabBarScrollEnabled: true,
      }}>
      {matchType.map((type: keyof typeof MATCH_TYPE) => (
        <Tab.Screen key={type} name={type}>
          {({ navigation }) => {
            const { getMatchListByMatchType } = useMatchesQueries(data, type);
            const seriesMatches = getMatchListByMatchType();
            return <Home seriesMatches={seriesMatches} />;
          }}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};

export default HomeTabNavigation;
