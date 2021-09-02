import React, { useState } from "react";
import {View, Text, TouchableOpacity} from 'react-native'

import { Input } from 'react-native-elements';

export default function InputBar({ submitHandler }) {
    const [value, setValue] = useState("");
    const onChangeText = (text) => {
        setValue(text);
    };

    return (
        <View>
            <View>
                <Input
                placeholder='Saisir une ville...'
                onChangeText={onChangeText}
                clearButtonMode="always"
                value={value}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    setValue(submitHandler(value));
                    // reset de l'input après onpress
                    setValue('')
                }}
            >
                <Text>Ajouter</Text>
            </TouchableOpacity>
        </View>
    );
}