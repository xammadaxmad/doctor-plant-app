import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ChooseImageScreen = () => {
    const [photo, setPhoto] = React.useState(null);
    const navigation = useNavigation()
    let options = {
        title: 'Select Image',
        mediaType:'image',
        customButtons: [
          { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

  const handleChoosePhoto =async () => {
    const result = await launchCamera(
        {
            mediaType:'photo',
            maxWidth:400,
            maxHeight:400,
            saveToPhotos:true
        }
    );
    if(!result.didCancel){
        let file = result.assets?.at(0)
        setPhoto(file?.uri)
        console.log("File has been choosen. moving to next screen")
    }
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {photo && (
        <Image
          source={photo}
          style={{ width: 200, height: 200, marginBottom: 20 }}
        />
      )}
      <Button title="Select Image" onPress={handleChoosePhoto} />
    </View>
  );
};

export default ChooseImageScreen;
