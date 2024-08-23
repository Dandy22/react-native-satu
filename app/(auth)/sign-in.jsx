import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { images } from "../../constants"
import { Link } from 'expo-router'
const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const submit = () => {

  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="justify-center w-full min-h-[75vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl mt-10 font-psemibold text-white">Log in Aora</Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(event) => setForm({ ...form, email: event })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(event) => setForm({ ...form, password: event })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyle="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">Don't have an Account?</Text>
            <Link href="./sign-up"><Text className="text-lg text-secondary-100 font-psemibold">
              Sign Up</Text></Link>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn