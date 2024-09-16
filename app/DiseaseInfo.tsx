import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const DiseaseInfo = () => {
    const route = useRoute();
    const [image, setImage] = useState(route.params.image_path); // State for image URI
    const [createdAt, setCreatedAt] = useState(route.params.created_at); // Example date
    const [diseaseName, setDiseaseName] = useState(route.params.disease); // Example disease name
    const [probability, setProbability] = useState(route.params.probability); // Example disease name

    return (
        <View style={styles.container}>
            {/* Image section */}
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            
            {/* Labels section */}
            <View style={styles.labelsContainer}>
                <View style={styles.labelRow}>
                    <FontAwesome name="calendar" size={18} color="#333" style={styles.icon} />
                    <Text style={styles.labelText}>Date: {createdAt}</Text>
                </View>
                <View style={styles.labelRow}>
                    <FontAwesome name="heartbeat" size={18} color="#333" style={styles.icon} />
                    <Text style={styles.labelText}>Disease: {diseaseName}</Text>
                    <Text style={styles.labelText}>Probability: {probability}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginVertical: 10, // Added margin for spacing around image
    },
    image: {
        width: '100%',
        height: 250, // Adjusted height for the image
        borderRadius: 10,
    },
    labelsContainer: {
        marginVertical: 10,
        flex:1,
        alignItems:'center'
    },
    labelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    labelText: {
        fontSize: 16,
        marginLeft: 10,
    },
    icon: {
        marginRight: 10,
    },
});

export default DiseaseInfo;
