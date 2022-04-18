# Universalicons Icons for React Native

### react-native-ico-universalicons

343 Vector Icons for React Native

<img src="./static/arrow-pointing-to-left.png" alt="arrow-pointing-to-left" width="150" height="150"> <img src="./static/arrow-turning-to-right.png" alt="arrow-turning-to-right" width="150" height="150"> <img src="./static/arrows-circle.png" alt="arrows-circle" width="150" height="150">

## List of icons

- [List of Universalicons Icons](http://ico.simpleness.org/pack/universalicons)

## Usage

```
import Icon from 'react-native-ico-universalicons';


// Inside some view component
render() {
    return (
        <>
          <Icon name="arrow-pointing-to-left" />
          <Icon name="arrow-turning-to-right" height="40" width="40" />
          <Icon name="arrows-circle" color="red" />
          <Icon name="arrow-turning-to-right" badge="10" />
          <Icon name="arrow-turning-to-right" badge={{value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}}/>
          <Icon name="arrow-pointing-to-left" background="circle" />
          <Icon name="arrow-pointing-to-left" background={{ type: "button", color: 'green' }} />
        </>
    );
}

```

## Installation

#### yarn

```bash
yarn add react-native-ico-universalicons react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-universalicons react-native-svg
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
name | no |  | name of icon | "arrow-pointing-to-left"
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
