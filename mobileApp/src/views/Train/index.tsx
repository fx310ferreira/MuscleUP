import { Camera } from 'expo-camera';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import { useEffect, useRef, useState } from "react";
import RoundButton from '../../components/RoundButton';
import { Text, View } from 'react-native';
import FilterIcon from '../../components/icons/FilterIcon';
import ChevronIcon from '../../components/icons/ChevronIcon';
import { styles } from './styles';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';


const TensorCamera = cameraWithTensors(Camera);

export default function Train({ navigation }: { navigation: any }) {
  const [ready, setReady] = useState(false);

  const model = poseDetection.SupportedModels.BlazePose;
  const detectorConfig = {
    runtime: 'tfjs',
    enableSmoothing: true,
    modelType: 'full'
  };
  // make this be loaded async
  let detector = poseDetection.createDetector(model, detectorConfig);

  useEffect(() => {
    tf.ready();
    // Signal to the app that tensorflow.js can now be used.
    setReady(true);
  }, []);


  const handleCameraStream = ( images, updatePreview, gl) => {
    let i = 1;
    const loop = async () => {
      if (detector) {
        const nextImageTensor = images.next().value;

        // ctx.drawImage(nextImageTensor, 0, 0, 152, 200);
        // remove this await

        const pose = await ((await detector).estimatePoses(nextImageTensor));
        // console.log(nextImageTensor);
        updatePreview();
        gl.endFrameEXP();
      }
      requestAnimationFrame(loop);
    };
    loop();
  };


  return (
    ready ? (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <RoundButton onPress={() => { navigation.navigate('Home') }} >
              <ChevronIcon />
            </RoundButton>
            <Text style={styles.text}>Workouts</Text>
            <RoundButton onPress={() => {}}>
              <FilterIcon />
            </RoundButton>
          </View>
          <TensorCamera
            // Standard Camera props
            style={styles.camera}
            type={Camera.Constants.Type.front}
            // Tensor related props     cameraTextureHeight={textureDims.height}
            cameraTextureHeight={200}
            cameraTextureWidth={152}
            resizeHeight={200}
            resizeWidth={152}
            resizeDepth={3}
            onReady={handleCameraStream}
            autorender={false}
          />
        </View>
      </>
    ) : (<></>));
};
