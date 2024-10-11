import {View, Text, TouchableOpacity, Image} from 'react-native';     
import React, {useState} from 'react';       
import {launchCamera} from 'react-native-image-picker';  

const Image_Picker = () => {  
  const [captureImage, setCaptureImage] = useState('');  

  const open_Camera = async () => {  
    const result = await launchCamera({mediaType: 'photo', selectionLimit: 3});  
    console.log(result);  
  
    if (result) {  
      const img_Src = result.assets[0].uri;    
      setCaptureImage(img_Src);       
    }
  };    
  
  return (
    <View
      style={{
        gap: 13,
        paddingVertical: 300,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        {captureImage ? (
          <Image  
            source={{uri: captureImage}}
            width={200}
            height={200}
            resizeMode="cover"
          />
        ) : null}
      </View>    

      <TouchableOpacity  
        onPress={open_Camera}
        style={{
          backgroundColor: 'grey',  

          width: 200,
        }}>
        <Text
          style={{
            padding: 12,
            color: 'white',
            fontSize: 25,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Open Camera
        </Text>  
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'grey',

          width: 200,
        }}>
        <Text
          style={{
            padding: 12,
            color: 'white',
            fontSize: 25,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Open Library
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Image_Picker;
