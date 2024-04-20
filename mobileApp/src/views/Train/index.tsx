import { Camera, CameraType } from 'expo-camera';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import { useEffect, useRef, useState } from "react";
import RoundButton from '../../components/RoundButton';
import { Alert, Text, View } from 'react-native';
import FilterIcon from '../../components/icons/FilterIcon';
import ChevronIcon from '../../components/icons/ChevronIcon';
import { styles } from './styles';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import poseProcessor from '../../components/utils/posePrecessor';


const TensorCamera = cameraWithTensors(Camera);

export default function Train({ navigation }: { navigation: any }) {
  const [ready, setReady] = useState(false);
  const [errors, setErrors] = useState("");
  const [cameraType, setCameraType] = useState(CameraType.front);

  const model = poseDetection.SupportedModels.BlazePose;
  const detectorConfig = {
    runtime: 'tfjs',
    enableSmoothing: true,
    modelType: 'lite'
  };
  // make this be loaded async

  useEffect(() => {
    tf.ready();
    // Signal to the app that tensorflow.js can now be used.
    setReady(true);
  }, []);


  const handleCameraStream = async ( images, updatePreview, gl) => {
    let detector = await poseDetection.createDetector(model, detectorConfig);
    const loop = async () => {
      if (detector) {
        const nextImageTensor = images.next().value;
        const pose = await detector.estimatePoses(nextImageTensor);
        const err = poseProcessor(pose, "pushUp")?.error;
        if (errors !== err) {
          setErrors(err ?? "");
        }
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
            <Text style={styles.text}>{errors}</Text>
            <RoundButton onPress={() => {setCameraType(CameraType.front == cameraType ? CameraType.back : CameraType.front)}}>
              <FilterIcon />
            </RoundButton>
          </View>
          <TensorCamera
            // Standard Camera props
            style={styles.camera}
            type={cameraType}
            // Tensor related props     cameraTextureHeight={textureDims.height}
            cameraTextureHeight={200}
            cameraTextureWidth={152}
            resizeHeight={200}
            resizeWidth={152}
            resizeDepth={3}
            onReady={handleCameraStream}
            autorender={true}
          />
        </View>
      </>
    ) : (<></>));
};
