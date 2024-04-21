import { Camera, CameraType } from 'expo-camera';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import { useEffect, useRef, useState } from "react";
import RoundButton from '../../components/RoundButton';
import { Image, Text, View } from 'react-native';
import FilterIcon from '../../components/icons/FilterIcon';
import ChevronIcon from '../../components/icons/ChevronIcon';
import { styles } from './styles';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import poseProcessor from '../../components/utils/posePrecessor';
import Button from '../../components/Button';
import HeartIcon from '../../components/icons/HeartIcon';
import FireIcon from '../../components/icons/FireIcon';
import StarIcon from '../../components/icons/StarIcon';
import pushUp from '../../assets/img.png';


const TensorCamera = cameraWithTensors(Camera);

export default function Train({ navigation }: { navigation: any }) {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.front);
  const [hide, setHide] = useState(false);

  const model = poseDetection.SupportedModels.BlazePose;
  const detectorConfig = {
    runtime: 'tfjs',
    enableSmoothing: true,
    modelType: 'lite'
  };

  useEffect(() => {
    tf.ready().then(() => {
      setReady(true);
    });
  }, []);

  const handleCameraStream = async (images, updatePreview, gl) => {
    let detector = await poseDetection.createDetector(model, detectorConfig);
    setLoading(false)
    const loop = async () => {
      if (detector) {
        const nextImageTensor = images.next().value;
        const pose = await detector.estimatePoses(nextImageTensor);
        const res = poseProcessor(pose, "pushUp");
        setErrors(res?.error ?? "");
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
            <Text style={styles.text}>Workout</Text>
            <RoundButton onPress={() => { setCameraType(Camera.Constants.Type.front == cameraType ? CameraType.back : Camera.Constants.Type.front) }}>
              <FilterIcon />
            </RoundButton>
          </View>
          {!hide &&
            <View style={styles.loading}>
              <View style={styles.card}>
                <Text style={styles.difficulty}>Difficulty</Text>
                <View style={styles.trainSelector}>
                  <View style={styles.buttonContainer}>
                    <RoundButton big active onPress={() => { }}>
                      <HeartIcon/>
                    </RoundButton>
                    <Text>Beginner</Text>
                  </View>
                  <View style={styles.buttonContainer}>
                    <RoundButton big onPress={() => { }}>
                      <FireIcon/>
                    </RoundButton>
                    <Text>Beginner</Text>
                  </View>
                  <View style={styles.buttonContainer}>
                    <RoundButton big onPress={() => { }}>
                      <StarIcon/>
                    </RoundButton>
                    <Text>Beginner</Text>
                  </View>
                </View>
                <Button loading={loading} onPress={() => { setHide(true) }}>
                  <Text style={styles.buttonContent}>Start</Text>
                </Button>
              </View>
            </View>
          }
          { hide && errors.length > 1 &&
            <View style={styles.loading}>
              <View style={styles.errorCard}>
                <Text style={styles.errorCardTitle}>{errors}</Text>
                <Image source={require('../../assets/img.png')} resizeMode="contain" style={{zIndex:101, position:'absolute', bottom:-170, width: '100%'}}/>
              </View>
            </View>
          } 
          <TensorCamera
            style={styles.camera}
            type={cameraType}
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
