# Components

## View
- Most fundamental UI component
- Container component

-- Each text is its own block

```
<View style={{backgroundColor: 'yellow', height: 200, width: '100%'}}>
<Text style={styles.heading}>Hello World!</Text>
<Text style={styles.heading}>Another World</Text>
</View>
```

- cannot add Text directly as children to View. The text must be wrapped in the Text Node
```
<View style={{backgroundColor: 'yellow', height: 200, width: '100%'}}>
Hello World ! 
</View>
```

### Props
- Accessibility Props
- onLayout: callback. Called on mount and on layout change of View. Example: bottom sheet

