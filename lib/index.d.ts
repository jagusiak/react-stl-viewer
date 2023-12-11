import React, { CSSProperties, HTMLProps } from 'react';
import { Mesh, BufferGeometry } from 'three';

interface ModelDimensions {
    boundingRadius: number;
    width: number;
    length: number;
    height: number;
}

interface CameraInitialPosition {
    latitude: number;
    longitude: number;
    distance: number;
}

interface FloorProps {
    gridWidth?: number;
    gridLength?: number;
}
interface ModelRef {
    model: Mesh;
    save: () => Blob;
}
interface ModelProps {
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
interface SceneSetupProps {
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

declare type DivProps = Omit<HTMLProps<HTMLDivElement>, 'color' | 'onError'>;
interface StlViewerProps extends DivProps, SceneSetupProps {
    onError?: (err: Error) => void;
    canvasId?: string;
    wired?: boolean;
}
declare const StlViewer: React.FC<StlViewerProps>;

export { CameraInitialPosition, FloorProps, ModelDimensions, ModelProps, ModelRef, StlViewer, StlViewerProps };
