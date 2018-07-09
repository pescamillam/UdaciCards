import { AsyncStorage } from 'react-native'

export function submitEntry({ entry, key }) {
  return AsyncStorage.mergeItem("s", JSON.stringify({
    [key]: entry
  }))
}

