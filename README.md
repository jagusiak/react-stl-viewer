# react-gcode-viewer

React component for visualizing GCodes using Three.js.

<p align="center">
    <img src="docs/demo.gif">
</p>

## Install

```shell
npm install --save react-stl-viewer
```
or
```shell
yarn install react-stl-viewer
```

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {StlViewer} from "react-stl-viewer";

const url = "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl"

const style = {
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
}

function App() {
    return (
        <StlViewer
            style={style}
            url={url}
        />
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## Props

| Prop                       | Type                       | Required     | Notes                                                                                                                                                                                       |
| ----------------------     | :------------------------: | :----------: | :----------------------------------------------------------:                                                                                                                                |
| `url`                      | `string`                   | `?true`      | url of the GCode file, required if no "file" parameter is specified |
| `file`                     | `string or File`           | `?true`      | string or File object, required if no "url" parameter is specified |
| `color`                    | `string`                   | `false`      | (default "grey") model color |
| `extraHeaders`             | `Record<string, string>`   | `false`      | custom headers for making the http query |
| `onFinishLoading`          | `() => any`                | `false`      | callback triggered when GCode is fully loaded |
| `onError`                  | `(err: Error) => any`      | `false`      | callback triggered when an error occurred while loading GCode|
The component also accepts ```<div/>``` props
