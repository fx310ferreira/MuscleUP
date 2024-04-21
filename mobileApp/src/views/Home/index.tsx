import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Image } from 'react-native';
import { useEffect } from 'react';

import { api } from '../../api/api';
import Button from '../../components/Button';
import FilterIcon from '../../components/icons/FilterIcon';
import mia from './mia.png'; // sorry about that
import RoundButton from '../../components/RoundButton';
import Statistics from '../../components/Statistics';
import useRequest from '../../hooks/useRequest';

import { styles } from './styles';

export default function Home() {
  const { data: data, doRequest: getUser } = useRequest(api.getUsers);

  useEffect(() => {
    getUser()
  }, [])

  console.log(data)

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image
            source={mia}
            style={{ width: 50, height: 50 }}
          />
          <View style={styles.nameAndSub}>
            <Text style={styles.name}>Hello, {data?.data?.name}!</Text>
            <Text style={styles.sub}>Pro</Text>
          </View>
        </View>
        <RoundButton
          onPress={() => {}}
        >
          <FilterIcon />
        </RoundButton>
      </View>
      <View style={styles.today}>
        <Text style={styles.today__date}>Today, {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</Text>
        {/* TODO */}
        <Text style={styles.today__cals}>1 883 Kcal</Text>
      </View>
      <Button onPress={() => {}} text='Track your activity' />
      <Statistics />
    </View>
  )
};
