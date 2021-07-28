# Components

## ScrollView

### Props
- horizontal
- keyboardDismissMode : determine should keyboard dismissed on drag
- keyboardShouldPersistTaps: 'always', 'never', 'handled'
- onScroll
- refreshControl

```
<ScrollView 
style={{flex: 1}} 
keyboardShouldPersistTaps='never'  
<RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />>
          </ScrollView>
```