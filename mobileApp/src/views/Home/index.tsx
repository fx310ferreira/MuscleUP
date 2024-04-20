import { useNavigation } from '@react-navigation/native';
import RoundButton from '../../components/RoundButton';
import { Text, View } from 'react-native';
import FilterIcon from '../../components/icons/FilterIcon';
import ChevronIcon from '../../components/icons/ChevronIcon';
import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import useRequest from '../../hooks/useRequest';
import { Image } from 'react-native';

import mia from 'mia.png';

import { styles } from './styles';
import Button from '../../components/Button';


export default function Home() {
  const navigation = useNavigation();

  const [theme, setTheme] = useState('light' as 'light' | 'dark');

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
          onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
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
    </View>
  )
};
