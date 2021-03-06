<h1 align="center">react d3 ggplot</h1>
<p align="center">Using React.js and D3.js to build simple and reusable components for data visualizations on the web.</p>

<p align="center">
  <img src="https://img.shields.io/npm/l/react-d3-ggplot.svg?color=%230f82bc&style=popout-square">
  <img src="https://img.shields.io/travis/ll2nz/react-d3-ggplot.svg?style=popout-square">
  <img src="https://img.shields.io/npm/v/react-d3-ggplot.svg?style=popout-square">
  <img src="https://img.shields.io/codecov/c/github/ll2nz/react-d3-ggplot.svg?style=popout-square">
</p>

# Demos

<p align="center">
  <img src="./demos/barplot.png">
  <img src="./demos/linechart.png">
  <img src="./demos/scatterplot.png">
  <img src="./demos/barplot-n.png">
</p>

# Getting Started

## Install

```zsh
# yarn
yarn add react-d3-ggplot

# npm
npm install react-d3-ggplot
```

## Quick Start

| Props            | Description                       |
| ---------------- | --------------------------------- |
| data             | An array of objects               |
| aes (aesthetics) | An array with two strings         |
| dimensions       | An object: width, height, padding |

```js
import React from 'react';
import { useState } from 'react';
import { GEOMS } from 'react-d3-ggplot';
import { XAxis } from 'react-d3-ggplot';
import { YAxis } from 'react-d3-ggplot';
import { Line } from 'react-d3-ggplot';

const LineChart = () => {
  const [state, setState] = useState({
    data: [{ x: 0, y: 0 }, { x: 10, y: 10 }],
    aes: ['x', 'y'],
    dimensions: { width: 500, height: 300, padding: 50 }
  });

  return (
    <GEOMS {...state}>
      <XAxis />
      <YAxis />
      <Line />
    </GEOMS>
  );
};
```

# Live Example

- https://codesandbox.io/s/p9wrv4moz7
