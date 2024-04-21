import { Keypoint } from "@tensorflow-models/pose-detection";

export function angle(a : Keypoint, b : Keypoint, c : Keypoint){
    const v1 = [b.x - a.x, b.y - a.y, (b.z ?? 0) - (a.z ?? 0)];
    const v2 = [c.x - b.x, c.y - b.y, (c.z ?? 0) - (b.z ?? 0)];
    const crossProduct = [
        v1[1] * v2[2] - v1[2] * v2[1],
        v1[2] * v2[0] - v1[0] * v2[2],
        v1[0] * v2[1] - v1[1] * v2[0]
    ];

    const dotProduct = v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];

    const angleRad = Math.atan2(Math.sqrt(crossProduct[0] ** 2 + crossProduct[1] ** 2 + crossProduct[2] ** 2), dotProduct);

    const angleDeg = angleRad * (180 / Math.PI);

    return angleDeg;
}

export function mediumPos(a : Keypoint, b : Keypoint){
    return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, z: (a.z ?? 0) + (b.z ?? 0) / 2 } as Keypoint;
}