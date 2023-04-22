# # 😸 About the project Your Feeling App

Application that aims to choose your mood based on emoticons.

## Run and clone this project
* git clone (ssh or HTTPS)
* yarn (android)
* cd ios && pod install && cd .. (install lib in ios)
* yarn android or yarn ios

## Clearing Android
* del %appdata%\Temp\react-native- & cd android & gradlew clean & cd .. & del node_modules/ & npm cache clean --force & npm install & npm start -- --reset-cache
* rm -rf node_modules && yarn cache clean --force && yarn install --force
* cd android && rm -rf build/ && cd app/ && rm -rf build/ && cd .. && ./gradlew clean && cd ..

## Clearing Ios
* cd ios && rm -rf assets Pods Podfile.lock && pod cache clean --all && pod install && cd ..

## Requirements
* Implement the following design using React Native
* Request HTTP
* Clicking on any emotion opens the second screen. Clicking next on second screen leads back to first screen

## Features
* Splachscreen
* App icon
* Sreen Welcome
* Modal Success

## Technologies
* React Native
* React-native-linear-gradient
* Modal
* Hooks
* Routes
* Axios
* React navigation


## Interface
<p align="center">

</p>
