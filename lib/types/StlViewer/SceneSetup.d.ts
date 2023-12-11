import React, { CSSProperties } from 'react';
import { BufferGeometry, Mesh } from 'three';
import { ModelDimensions } from './SceneElements/Model3D';
import { CameraInitialPosition } from './SceneElements/Camera';
export interface FloorProps {
    gridWidth?: number;
    gridLength?: number;
}
export interface ModelRef {
    model: Mesh;
    save: () => Blob;
}
export interface ModelProps {
    ref?: {
        current?: null | ModelRef;
    };
    scale?: number;
    positionX?: number;
    positionY?: number;
    rotationX?: number;
    rotationY?: number;
    rotationZ?: number;
    color?: CSSProperties['color'];
    geometryProcessor?: (geometry: BufferGeometry) => BufferGeometry;
}
export interface SceneSetupProps {
    url: string;
    cameraInitialPosition?: Partial<CameraInitialPosition>;
    extraHeaders?: Record<string, string>;
    shadows?: boolean;
    showAxes?: boolean;
    orbitControls?: boolean;
    onFinishLoading?: (ev: ModelDimensions) => any;
    modelProps?: ModelProps;
    floorProps?: FloorProps;
    wired?: boolean;
}
declare const SceneSetup: React.FC<SceneSetupProps>;
export default SceneSetup;
