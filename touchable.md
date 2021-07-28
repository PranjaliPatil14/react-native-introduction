# Components

## Touchables

### Button
- A basic button component 
- Supports a minimal level of customization.

```
<Button
          title="click me"
          onPress={() => console.log('on click called')}
        />
```

### TouchableOpacity
- wrapper for making it's children respond to touch event
- On press down, the opacity of the wrapped view is decreased

### Props
- Accessibility Props
- disabled
- onPress
- onLongPress

```
<TouchableOpacity
          style={{backgroundColor: 'yellow', height: 30}}
          onPress={() => console.log('hi')}>
          <Text style={{textAlign: 'center'}}>Click Me</Text>
        </TouchableOpacity>
```

### TouchableWithoutFeedback
same as TouchableOpacity. There is no visual feedback to user on click

```
<TouchableWithoutFeedback
          style={{backgroundColor: 'yellow', height: 30}}
          onPress={() => console.log('hi')}>
          <Text>Click Me</Text>
        </TouchableWithoutFeedback>
```

### Pressable

- offers more extensive api
- intended to replace touchables in future

```
<Pressable onPress={() => console.log('on click')}>
          <Text>This is Pressable</Text>
        </Pressable>
```