import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { icons } from '../constants'

import { useState } from 'react'

const FormField = ({ title, value, placeHolder, handleChangeText, otherStyles, ...props }) => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">
        {title}
      </Text>
      <View className="w-full h-16 px-4 bg-black-100 border-black-200 border-2 rounded-2xl focus:bg-secondary-100 items-center flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeHolder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {/* Untuk Password */}

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide} className="w-6 h-6"
              resizeMode='contain'
            />

          </TouchableOpacity>
        )}
      </View>
    </View >
  )
}

export default FormField