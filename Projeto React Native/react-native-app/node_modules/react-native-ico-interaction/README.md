# Interaction Icons for React Native

### react-native-ico-interaction

560 Vector Icons for React Native

<img src="./static/archive-12.png" alt="archive-12" width="150" height="150"> <img src="./static/archive-13.png" alt="archive-13" width="150" height="150"> <img src="./static/archive-14.png" alt="archive-14" width="150" height="150">

## List of icons

- [List of Interaction Icons](http://ico.simpleness.org/pack/interaction)

## Usage

```
import Icon from 'react-native-ico-interaction';


// Inside some view component
render() {
    return (
        <>
          <Icon name="archive-12" />
          <Icon name="archive-13" height="40" width="40" />
          <Icon name="archive-14" color="red" />
          <Icon name="archive-13" badge="10" />
          <Icon name="archive-13" badge={{value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}}/>
          <Icon name="archive-12" background="circle" />
          <Icon name="archive-12" background={{ type: "button", color: 'green' }} />
        </>
    );
}

```

## Installation

#### yarn

```bash
yarn add react-native-ico-interaction react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-interaction react-native-svg
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
name | no |  | name of icon | "archive-12"
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
