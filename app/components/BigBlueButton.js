import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function BigBlueButton(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 79,
        width: 343,
        backgroundColor: '#EAF4FE',
        borderRadius: 79,
        justifyContent: 'center',
        alignItems: 'center',alignItems: 'center',
        marginBottom: 10,
    },
    cardContent: {
        alignItems: 'center',
    },
})

export default BigBlueButton;