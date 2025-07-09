import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import TitleText from '../components/TitleText'

const DashBoard :React.FC = () => {
  return (
    <KeyboardAvoidingView>
        <ScrollView>
            <TitleText text='DashBoard'/>
            <Text>Welcome</Text>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default DashBoard