# Components

## Text
```
<Text>Hello World!</Text>
```
### Basic Styling

```
<Text style={{
    fontSize: 24,
    fontWeight: '900',
    color: 'purple',
  }}>Hello World!</Text>
```

### Props
- Accessibility Props
- numberOfLines and ellipsizeMode
```
<Text numberOfLines={2} ellipsizeMode="head">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</Text>

<Text numberOfLines={1} ellipsizeMode="tail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</Text>

<Text numberOfLines={1} ellipsizeMode="middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</Text>

<Text numberOfLines={1} ellipsizeMode="clip">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</Text>
```


- Add one more Text
```
<>
<Text style={{
    fontSize: 24,
    fontWeight: '900',
    color: 'purple',
  }}>Hello World!</Text>
<Text style={{
    fontSize: 20,
    fontWeight: '500',
    color: 'purple',
  }}>Another World</Text>
  </>
```
#### Create Style sheets for cleaner use of styles

```
const styles = StyleSheet.create({
  testText: {
      margin: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: '900',
    color: 'purple',
  },
  subHeading: {
      fontSize: 20,
      fontWeight: '500',
      color: 'purple',
  }
});
```

```
<>
<Text style={styles.heading}>Hello World!</Text>
<Text style={styles.heading}>Another World</Text>
</>
```

### Supports
- Nesting
- styling
- touch handling

```
<>
<Text style={styles.heading}>Hello World! 
<Text>from India</Text>
</Text>
<Text style={styles.heading}>Another World</Text>
</>
```

-- Text Container: the text will be inline if the space allowed it. no longer using the Flexbox layout


