# Phones And Mobiles Icons for React Native

### react-native-ico-phones-and-mobiles

120 Vector Icons for React Native

<img src="./static/4g.png" alt="4g" width="150" height="150"> <img src="./static/4g plus.png" alt="4g plus" width="150" height="150"> <img src="./static/4g.png" alt="4g" width="150" height="150">

## List of icons

- [List of Phones And Mobiles Icons](http://ico.simpleness.org/pack/phones-and-mobiles)

## Usage

```
import Icon from 'react-native-ico-phones-and-mobiles';


// Inside some view component
render() {
    return (
        <>
          <Icon name="4g" />
          <Icon name="4g plus" height="40" width="40" />
          <Icon name="4g" color="red" />
          <Icon name="4g plus" badge="10" />
          <Icon name="4g plus" badge={{value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}}/>
          <Icon name="4g" background="circle" />
          <Icon name="4g" background={{ type: "button", color: 'green' }} />
        </>
    );
}

```

## Installation

#### yarn

```bash
yarn add react-native-ico-phones-and-mobiles react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-phones-and-mobiles react-native-svg
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
name | no |  | name of icon | "4g"
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
