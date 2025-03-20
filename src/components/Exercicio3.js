import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Exercicio3 = () => {

    const [texto, setTexto] = useState('')

  return (
    <View>
        <TextInput 
        placeholder='Digite o texto'
        onChangeText={setTexto}
        value={texto} 
      />
        <Text>{texto}</Text>
    </View>
  )
}

export default Exercicio3