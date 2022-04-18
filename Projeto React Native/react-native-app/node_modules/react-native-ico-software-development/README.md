# Software Development Icons for React Native

### react-native-ico-software-development

32 Vector Icons for React Native

<img src="./static/docker.png" alt="docker" width="150" height="150"> <img src="./static/python.png" alt="python" width="150" height="150"> <img src="./static/react.png" alt="react" width="150" height="150">

## List of icons

- [List of Software Development Icons](http://ico.simpleness.org/pack/software-development)

## Usage

```
import Icon from 'react-native-ico-software-development';


// Inside some view component
render() {
    return (
        <>
          <Icon name="docker" />
          <Icon name="python" height="40" width="40" />
          <Icon name="react" color="red" />
          <Icon name="python" badge="10" />
          <Icon name="python" badge={{value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}}/>
          <Icon name="docker" background="circle" />
          <Icon name="docker" background={{ type: "button", color: 'green' }} />
        </>
    );
}

```

## Installation

#### yarn

```bash
yarn add react-native-ico-software-development react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-software-development react-native-svg
```

### Link react-native-svg

```bash
react-native link react-native-svg
```

### pod install ( for iOS )

```
cd ios && pod install && cd ..
```

## API

### <Icon name [color width height background badge ...rest] />

Returns a SvgXml icon by name and group.

 name | optional | default value | description | examples
------|----------|---------------|-------------|---------
name | no |  | name of icon | "docker"
color | yes | | line color, css style | "#00ff00", "#0f0", "green"
width | yes | 20 | width of the icon | 40
height | yes | 20 | height of the icon | 40
background | no | | background type | "circle"
background | no | | background object | {type: "circle", color: 'yellow'}
badge | no | | badge string | "10"
badge | no | | badge object | {value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}
...rest | no | | other props | style={{backgroundColor: "#00f"}}

## Icons Made by

[Dave Gandy](https://www.flaticon.com/authors/dave-gandy)

## Created by

Dimitry Ivanov <2@ivanoff.org.ua> # curl -A cv ivanoff.org.ua
