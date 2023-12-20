import '@sendbird/uikit-react'
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider'

function Chat(){
    const APP_ID = process.env.SENDBIRD_APP_ID
    const USER_ID = process.env.SENDBIRD_USER_ID
    const USERNAME = process.env.SENDBIRD_USERNAME
    const ACCESS_TOKEN = process.env.SENDBIRD_ACCESS_TOKEN

    return (
        <SendbirdProvider >

        </SendbirdProvider>
    )
}

export default Chat