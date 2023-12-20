"use client"

import '../../../styles/chat.css'

import SBProvider from '@sendbird/uikit-react/SendbirdProvider'
import '@sendbird/uikit-react/dist/index.css'
import CustomizedApp from '../../../components/CustomizedChat'

import { APP_ID, USER_ID, NICKNAME } from '../../../constants/chat'

function ChatApp() {
  if (!APP_ID) {
    return (
      <p>Set APP_ID in chat.js</p>
    )
  }
  return (
    <SBProvider appId={APP_ID} userId={USER_ID} nickname={NICKNAME}>
      <CustomizedApp />
    </SBProvider>
  )
}

export default ChatApp