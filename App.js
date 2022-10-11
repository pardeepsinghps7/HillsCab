import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decNumber, incNumber } from './src/redux/actions'

const App = () => {
  const dispatch = useDispatch()
  const number = useSelector((state) => state.changeTheNumber)
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        style={{ fontSize: 24, fontWeight: 'bold', color: 'grey' }}>
        Increment/Decrement counter
      </Text>
      <Text
        style={{ fontSize: 16, fontWeight: 'bold', color: 'grey', marginTop: 32 }}>
        using React Native and Redux
      </Text>
      <View
        style={{ borderColor: '#CFD8DC', borderWidth: 2, flexDirection: 'row', borderRadius: 8, marginTop: 32 }}>
        <TouchableOpacity
          onPress={() => dispatch(decNumber())}>
          <Text
            style={{ backgroundColor: '#CFD8DC', paddingVertical: 8, paddingHorizontal: 16 }}>-</Text>
        </TouchableOpacity>
        <Text
          style={{ backgroundColor: 'white', paddingVertical: 8, paddingHorizontal: 16 }}>{number}</Text>
        <TouchableOpacity
          onPress={() => dispatch(incNumber(7))}>
          <Text
            style={{ backgroundColor: '#CFD8DC', paddingVertical: 8, paddingHorizontal: 16 }}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default App