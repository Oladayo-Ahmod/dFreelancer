import {ChannelList,Channel,ChannelSettings} from '@sendbird/uikit-react'
import { useState } from 'react'

function CustomizedChat({ }){
    const [currentChannel,setCurrentChannel] = useState(null)
    const currentChannelURL = currentChannel? currentChannel.url : "" 
    const [showSettings, setShowSettings] = useState(false)
    var channelChatDiv = document.getElementsByClassName('channel-chat')[0]

    return (
        <div className="channel-wrap">
            <div className="channel-list">
                <ChannelList
                onChannelSelect={(channel)=>{
                    setCurrentChannel(channel)
                }}
                > 
                </ChannelList>
            </div>
            <div className="channel-list">
                <Channel
                channelUrl={currentChannelURL}
                onChatHeaderActionClick={()=>{
                    setShowSettings(!showSettings)
                    // render
                }}
                />
            </div>
        </div>
    )
}
export default CustomizedChat