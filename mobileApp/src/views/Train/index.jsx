import { Camera } from 'expo-camera';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import { useEffect, useState } from "react";
import RoundButton from '../../components/RoundButton';
import { Text, View } from 'react-native';
import FilterIcon from '../../components/icons/FilterIcon';
import ChevronIcon from '../../components/icons/ChevronIcon';
import { styles } from './styles';

import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';

const TensorCamera = cameraWithTensors(Camera);

export default function Train({ navigation }) {
  const [ready, setReady] = useState(false);
  const model = poseDetection.SupportedModels.BlazePose;
  const detectorConfig = {
    runtime: 'tfjs',
    enableSmoothing: true,
    modelType: 'full'
  };
  let detector = poseDetection.createDetector(model, detectorConfig);

  useEffect(() => {
    tf.ready();
    // Signal to the app that tensorflow.js can now be used.
    setReady(true);
  }, []);


  const handleCameraStream = (images, updatePreview, gl) => {
    console.log("bruhhh");
    const loop = async () => {
      const estimationConfig = {flipHorizontal: true};
      const timestamp = performance.now();
      const poses = await detector.estimatePoses(image, estimationConfig, timestamp);
      console.log(poses);
      requestAnimationFrame(loop);
    };
    loop();
  };


  return (
    ready ? (
      <>
      <View style={styles.container}>
        <View style={styles.header}>
          <RoundButton onPress={() => { navigation.navigate('Home')}} >
            <ChevronIcon/>
          </RoundButton>
          <Text style={styles.header.text}>Workouts</Text>
          <RoundButton>
            <FilterIcon/>
          </RoundButton>
        </View>
        <TensorCamera
          // Standard Camera props
          style={styles.camera}
          type={Camera.Constants.Type.front}
          // Tensor related props
          onReady={handleCameraStream}
          autorender={true}
        />
      </View>
      </>
  ) : ( <></> ));
 };
