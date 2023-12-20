import '@sendbird/uikit-react'
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider'
import CustomizedChat from '../../../components/CustomizedChat'

function Chat(){
    const APP_ID = process.env.SENDBIRD_APP_ID 
    const USER_ID = process.env.SENDBIRD_USER_ID
    const USERNAME = process.env.SENDBIRD_USERNAME
    const ACCESS_TOKEN = process.env.SENDBIRD_ACCESS_TOKEN

    return (
        <SendbirdProvider 
        appId={APP_ID}
        userId={USER_ID}
        >
            <CustomizedChat />
        </SendbirdProvider>
    )
}

export default Chat