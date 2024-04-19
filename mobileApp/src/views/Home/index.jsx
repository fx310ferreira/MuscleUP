import { Camera } from 'expo-camera';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import { useEffect, useState } from "react";
import * as tf from '@tensorflow/tfjs';
import RoundButton from '../../components/RoundButton';
import { Text, View } from 'react-native';
import FilterIcon from '../../components/icons/FilterIcon';
import ChevronIcon from '../../components/icons/ChevronIcon';
import { styles } from './styles';


export default function Home() {
  return(
    <Text>Home</Text>
  )
};
