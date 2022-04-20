import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function ResourceCard(props) {
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
        height: 111,
        width: 343,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#37C6F7',
        borderRadius: 30,
        borderBottomLeftRadius: 0,
        padding: 10,
        alignItems: 'center',
    },
    cardContent: {
        alignItems: 'center',
        paddingBottom: 10,
    },
})

export default ResourceCard;