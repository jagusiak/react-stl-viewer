import React, { HTMLProps } from 'react'
import { Canvas } from '@react-three/fiber'
import SceneSetup, { SceneSetupProps } from './SceneSetup'
import ErrorBoundary from './ErrorBoundary'
import { PCFSoftShadowMap } from 'three'

type DivProps = Omit<HTMLProps<HTMLDivElement>, 'color' | 'onError'>

export interface StlViewerProps extends DivProps, SceneSetupProps {
  onError?: (err: Error) => void
  canvasId?: string
  wired?: boolean
}

const StlViewer: React.FC<StlViewerProps> = (
  {
    url,
    modelProps,
    floorProps,
    children,
    onError,
    extraHeaders,
    onFinishLoading,
    canvasId,
    shadows,
    showAxes,
    orbitControls,
    cameraInitialPosition,
    wired,
    ...otherProps
  }
) => {
  const sceneProps: SceneSetupProps = {
    url,
    modelProps,
    floorProps,
    extraHeaders,
    onFinishLoading,
    shadows,
    showAxes,
    orbitControls,
    cameraInitialPosition
  }

  return (
        <div {...otherProps}>
            <ErrorBoundary onError={onError}>
                <React.Suspense fallback={null}>
                    <Canvas
                        shadows
                        gl={{
                          preserveDrawingBuffer: true,
                          shadowMapType: PCFSoftShadowMap,
                          antialias: true,
                          useLegacyLights: true
                        }}
                        id={canvasId}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <SceneSetup wired={wired} {...sceneProps}/>
                        {children}
                    </Canvas>
                </React.Suspense>
            </ErrorBoundary>
        </div>
  )
}

export default StlViewer
