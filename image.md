# Components

## Image
- supported format: png, jpg, jpeg, bmp, gif, webp

### Props
- source : url, relative path
- onLoad
- onError
- onProgress


```
<Image
          source={{
            uri: 'https://placebear.com/640/360',
            method: 'GET',
            headers: {Accept: 'image/*'},
          }}
          style={{width: 400, height: 400}}
        />
```

### Image Background
- takes same props as Image
- can be implemented by using position: absolute
- Implementation details: https://github.com/facebook/react-native/blob/main/Libraries/Image/ImageBackground.js

```
 <ImageBackground
          source={TestImage}
          style={{
            backgroundColor: 'skyblue',
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.heading}>Hello World!</Text>
          <Text style={styles.heading}>Another World</Text>
        </ImageBackground>
```        