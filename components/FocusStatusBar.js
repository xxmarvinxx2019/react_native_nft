import { View, Text,StatusBar } from 'react-native'
import {useIsFocused} from '@react-navigation/core'
import React from 'react'

const FocusStatusBar = () => {
    const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true}/> : null;
}

export default FocusStatusBar