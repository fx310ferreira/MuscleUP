import { Keypoint, Pose } from "@tensorflow-models/pose-detection";
import { angle, mediumPos } from "./vectorUtils";

let i = 0;

export default function poseProcessor(pose: Pose[], exercise: string) {
    // let middleMouth = { x: (pose[0]?.keypoints[9].x + pose[0]?.keypoints[10].x) / 2,
    //  y:(pose[0]?.keypoints[9].y + pose[0]?.keypoints[10].y) / 2,
    //  score: (pose[0]?.keypoints[9].score + pose[0]?.keypoints[10].score) / 2
    // } as Keypoint;
    let rightShoulder = pose[0]?.keypoints[11];
    let leftShoulder = pose[0]?.keypoints[12];
    let rightHip = pose[0]?.keypoints[23];
    let leftHip = pose[0]?.keypoints[24];
    let rightKnee = pose[0]?.keypoints[25];
    let leftKnee = pose[0]?.keypoints[26];
    // console.log({ rightShoulder, leftShoulder, rightHip, leftHip, rightKnee, leftKnee});
    if (exercise === "pushUp") {
        return pushUpProcessor(rightShoulder, leftShoulder, rightHip, leftHip, rightKnee, leftKnee);
    }
}

function pushUpProcessor(rightShoulder: Keypoint, leftShoulder: Keypoint, rightHip: Keypoint, leftHip: Keypoint, rightKnee: Keypoint, leftKnee: Keypoint) {
    const response = {
        error : "",
    }
    if (((!rightShoulder || !rightShoulder.score || rightShoulder.score < 0.5) && (!leftShoulder || !leftShoulder.score || leftShoulder.score < 0.5)) ||
    ((!rightHip || !rightHip.score || rightHip.score < 0.5) && (!leftHip || !leftHip.score || leftHip.score < 0.5)) ||
    ((!rightKnee || !rightKnee.score || rightKnee.score < 0.5) && (!leftKnee || !leftKnee.score || leftKnee.score < 0.5))){
        response.error = "Please reposition the camera for you to be visible";
        return response;
    }
    const mediumShoulder = mediumPos(rightShoulder, leftShoulder);
    const mediumHip = mediumPos(rightHip, leftHip);
    const mediumKnee = mediumPos(rightKnee, leftKnee);
    const shoulderHipAngle = angle(mediumShoulder, mediumHip, mediumKnee);
    if( shoulderHipAngle > 90){
        response.error = "WRONG POSTURE DETECTED";
    }
    console.log(response);
    return response;
}