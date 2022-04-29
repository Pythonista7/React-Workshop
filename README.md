# Basic React

## Setup

```sh
npx create-react-app web-react --template typescript
cd web-react
npm start
```

## Chakra UI
Install Chakra UI:
```
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
```
ref : https://chakra-ui.com/guides/getting-started/cra-guide

### Provider Setup
```jsx
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}
```

## Recoil
Install Recoil:
```
npm i recoil
```
ref : https://recoiljs.org/docs/introduction/installation

### Provider Setup
```jsx
import * as React from 'react'

// 1. import `RecoilRoot` component
import { RecoilRoot } from "recoil";

function App() {
  // 2. Wrap RecoilRoot at the root of your app
  return (
    <RecoilRoot>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </RecoilRoot>  
  )
}
```

## Konva
Install Konva
```
npm i konva react-konva
```
ref: https://konvajs.org/docs/react/index.html

### Basic setup
```jsx
import { Stage, Layer } from "react-konva";

function Canvas() {
  return(
    <Stage height={300} width={300}>
      <Layer>
        {...}
      </Layer>
    </Stage>
  )
}
```

## Contents/Branches
1. main (completed project)
2. basic/chakra-ui
3. basic/input-component
4. basic/shapes
5. manage-state/lifting-state-up
6. manage-state/recoiljs
7. final/add-canvas
