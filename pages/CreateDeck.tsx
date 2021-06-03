import * as React from "react";
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {saveDeckTitle} from "../utils/helpers";


export default function CreateDeck(props: any) {
    const [title, setTitle] = useState<string>('');

    const submit = () => {
        saveDeckTitle(title);

        setTitle('');

        props.navigation.navigate('View Deck');
    }

    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <View style={styles.outerOutline}>
                <View style={styles.outerOutline2}>
                    <View style={styles.innerOutline}>
                        <Text style={styles.text}>
                            What is the title of your new Deck?
                        </Text>
                        <TextInput value={title} onChangeText={(text => setTitle(text))} placeholder={'title'} style={styles.title}/>
                        <TouchableOpacity style={styles.btn} onPress={submit}>
                            <Text style={styles.text}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    outerOutline: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderColor: '#f3cba9',
        borderStyle: 'solid',
        borderWidth: 8,
        borderRadius: 20,
    },
    outerOutline2: {
        flex: 1,
        flexGrow: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderColor: '#f3cba9',
        borderStyle: 'solid',
        borderWidth: 4,
        borderRadius: 8,
        margin: 6
    },
    innerOutline: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        borderColor: '#91744c',
        borderStyle: 'solid',
        borderWidth: 4,
        borderRadius: 6,
        textAlign: 'center',
        margin: 16,
        padding: 6
    },
    text: {
        color: 'white',
        fontSize: 36,
        textAlign: 'center',
    },
    title: {
        color: 'black',
        fontSize: 36,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    btn: {
        color: 'white',
        fontSize: 24,
        backgroundColor: 'black',
        borderColor: '#f3cba9',
        borderStyle: 'solid',
        borderRadius: 20,
        borderWidth: 2,
    },

})
