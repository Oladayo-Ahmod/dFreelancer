import {ChannelList,Channel,ChannelSettings} from '@sendbird/uikit-react'
import { useState } from 'react'

function CustomizedChat({ }){
    const [currentChannel,setCurrentChannel] = useState(null)
    const currentChannelURL = currentChannel? currentChannel.url : "" 
    const [showSettings, setShowSettings] = useState(false)
    var channelChatDiv = document.getElementsByClassName('channel-chat')[0]

    const renderSettingsBar=()=>{
        channelChatDiv.style.width = "52%"
        channelChatDiv.style.cssFloat = "left"
    }

    const hideSettingsBar =()=>{
        channelChatDiv.style.width = "76%"
        channelChatDiv.style.cssFloat = "right"
    }

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
                    renderSettingsBar()
                }}
                />
            </div>
            {showSettings && (
                <div className="channel-settings">
                    <ChannelSettings
                        channelUrl={currentChannelURL}
                        onCloseClick={()=>{
                            setShowSettings(false)
                            hideSettingsBar()
                        }}
                    >

                    </ChannelSettings>
                </div>
            )}
        </div>
    )
}
export default CustomizedChat