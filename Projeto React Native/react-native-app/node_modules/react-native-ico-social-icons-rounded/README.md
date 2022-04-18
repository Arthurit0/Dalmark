# Social Icons Rounded Icons for React Native

### react-native-ico-social-icons-rounded

204 Vector Icons for React Native

<img src="./static/56-social-logo.png" alt="56-social-logo" width="150" height="150"> <img src="./static/ads-of-the-world-logo.png" alt="ads-of-the-world-logo" width="150" height="150"> <img src="./static/ads-scuttlepad-logo.png" alt="ads-scuttlepad-logo" width="150" height="150">

## List of icons

- [List of Social Icons Rounded Icons](http://ico.simpleness.org/pack/social-icons-rounded)

## Usage

```
import Icon from 'react-native-ico-social-icons-rounded';


// Inside some view component
render() {
    return (
        <>
          <Icon name="56-social-logo" />
          <Icon name="ads-of-the-world-logo" height="40" width="40" />
          <Icon name="ads-scuttlepad-logo" color="red" />
          <Icon name="ads-of-the-world-logo" badge="10" />
          <Icon name="ads-of-the-world-logo" badge={{value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}}/>
          <Icon name="56-social-logo" background="circle" />
          <Icon name="56-social-logo" background={{ type: "button", color: 'green' }} />
        </>
    );
}

```

## Installation

#### yarn

```bash
yarn add react-native-ico-social-icons-rounded react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-social-icons-rounded react-native-svg
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
name | no |  | name of icon | "56-social-logo"
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
