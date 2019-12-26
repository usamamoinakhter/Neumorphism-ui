# neumorphism-ui
 React Native components based on the concept of Neumorphism (iOS only)
 ![NPM Version](https://img.shields.io/npm/v/neumorphism-ui.svg?style=popout-square&color=blue)  ![Repo Size](https://img.shields.io/github/repo-size/usamamoinakhter/neumorphism-ui.svg?style=popout-square&color=blue)  ![Downloads](https://img.shields.io/npm/dw/neumorphism-ui.svg?color=blue&style=popout-square)
![roundCube Labs](https://img.shields.io/badge/Package%20By-roundCubeLabs-blue.svg?style=popout-square)

![ Neumorphism-ui Demo](https://i.postimg.cc/wjR3xsQx/Neumorphism-ui.gif)


## Setup
This package is available on npm, install it with: 
`npm install --save neumorphism-ui`

## Usage
1.  Import **neumorphism-ui** to your project:
    `import { NeuButton , NeuView} from  'neumorphism-ui'`

2. Set background color of container to **#e0e5ec**, other colors are not supported yet but you can modify it on your own by passing the background and shadow colors with **style** prop 


## Complete Example NeuView

    import React, { Component } from "react";
    import { View, Text, TouchableOpacity } from "react-native";
    import { NeuView } from "neumorphism-ui";
    export default class App extends Component {
      render() {
        return (
            <View style={{width:'100%',height:'100%',backgroundColor:'#e0e5ec'}}>

                  {/*NeuView Unpressed with containerStyles*/}
                  <NeuView pressed={false} containerStyle={{ marginTop: 30 }} >
                    <Text style={{ opacity: 0.4 }}>UNPRESSED</Text>
                  </NeuView>
                  
                  {/*NeuView pressed with viewStyles*/}
                  <NeuView pressed={true}  style={{ height: 100, width: 100, borderRadius: 50 }}>
                    <Text style={{ opacity: 0.4 }}>PRESSED</Text>
                  </NeuView>
                  
                  {/*NeuView pressed with contentStyles*/}
                  <NeuView pressed={true}  style={{ height: 400,}} contentStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ opacity: 0.4 }}>PRESSED</Text>
                  </NeuView>  
          </View>
        );
      }
    }
For a much detailed example take a look at the  `/example`  directory.

## Complete Example NeuButton

    import React, { Component } from "react";
    import { View, Text, TouchableOpacity ,Image,Alert} from "react-native";
    import { NeuButton } from "neumorphism-ui";
    export default class App extends Component {
      render() {
        return (
          <View style={{width:'100%',height:'100%',backgroundColor:'#e0e5ec',justifyContent:'center',alignItems:'center'}}>

              {/* Circle NeuButton that stays pressed once clicked */}
                <NeuButton style={{ height: 150, width: 150, borderRadius: 75 }}
                    onPress={() => {
                      Alert.alert("I was pressed")
                    }}
                    onUnpress={() => {
                      Alert.alert("I was unpressed")
                    }}
                  >
                    <Text style={{ opacity: 0.4, textAlign: 'center' }}>NeuButton with listeners</Text>
                </NeuButton>
                
                {/* Rectangular NeuButton that doesn't stay pressed once clicked */}
                <NeuButton style={{ height: 70, width: 120, borderRadius: 50 }} noPressedState={true}
                    onPress={() => {
                      Alert.alert("I was pressed")
                    }}
                  >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '60%' }}>
                      <Image
                        resizeMode="contain"
                        style={{ height: 30, width: 30 }}
                        source={{ uri: "https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png" }} />
                      <Text style={{ fontWeight: 'bold', opacity: 0.4 }}>LIKE</Text>
                    </View>
                </NeuButton>

          </View>
        );
      }
    }
For a much detailed example take a look at the  `/example`  directory.

## Feedback
PRs, suggestions and feedbacks are welcome!


## Links
[Our Website](http://www.roundcubelabs.com)
[Our Facebook](http://www.facebook.com/roundCubeLabs)
[Our Linkedin](https://www.linkedin.com/company/roundcubelabs/)
[Our Instagram](https://www.instagram.com/roundcubelabs/)
