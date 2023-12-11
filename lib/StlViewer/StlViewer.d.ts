import React, { HTMLProps } from 'react';
import { SceneSetupProps } from './SceneSetup';
declare type DivProps = Omit<HTMLProps<HTMLDivElement>, 'color' | 'onError'>;
export interface StlViewerProps extends DivProps, SceneSetupProps {
    onError?: (err: Error) => void;
    canvasId?: string;
    wired?: boolean;
}
declare const StlViewer: React.FC<StlViewerProps>;
export default StlViewer;
