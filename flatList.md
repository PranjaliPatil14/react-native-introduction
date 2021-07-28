# Components

## FlatList

- Optional horizontal mode.
- Configurable viewability callbacks.
- Header support.
- Footer support.
- Separator support.
- Pull to Refresh.
- Scroll loading.
- ScrollToIndex support.
- Multiple column support.

### Props
- renderItem
- data
- ListEmptyComponent
- ListFooterComponent
- ListHeaderComponent
- ListFooterComponentStyle
- ListHeaderComponentStyle
- initialNumToRender
- onRefresh
- refreshing

```
<FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
            );
          }}
        />
```

### scrollView vs flatList

## SectionList