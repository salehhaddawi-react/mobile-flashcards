import * as React from "react";
import {View, StatusBar} from "react-native";
import {Constants} from "react-native-unimodules";

export default function AppStatusBar({ backgroundColor, ...props }) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    );
}
