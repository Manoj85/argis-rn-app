import React from "react";
import {SafeAreaView, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

const MapWebView = () => {

    const webviewRef = React.useRef(null);
    const data = [
        "Javascript",
        "React",
        "React Native",
        "graphql",
        "Typescript",
        "Webpack",
        "Node js",
    ];
    const runFirst = `
      document.body.style.backgroundColor = 'green';
      setTimeout(function() { window.alert(JSON.stringify([
             'Javascript',
             'React',
             'React Naitve',
             'graphql',
             'Typescript',
             'Webpack',
             'Node js',
          ])) }, 1000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;

    const onMessage = (data: any) => {
        console.log(data)
    }

    return (
        <>
            <SafeAreaView style={styles.flexContainer}>
                <WebView
                    source={{ uri: 'https://manoj85.github.io/arcgis-react-ui/' }}
                    ref={webviewRef}
                    startInLoadingState={true}
                    onMessage={onMessage}
                    injectedJavaScript={runFirst}
                />
            </SafeAreaView>
        </>

    );
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
    },
});

export default MapWebView
