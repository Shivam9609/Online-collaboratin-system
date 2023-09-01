import React from 'react'
import './videocalling.css'
const VideoCalling = () => {
    return (
        <>
            <div class="header">
                <div class="logo">
                    <h3>Video Chat</h3>
                </div>
            </div>
            <div class="main">
                <div class="main__left">
                    <div class="videos__group">
                        <div id="video-grid">

                        </div>
                    </div>
                    <div class="options">
                        <div class="options__left">
                            <div id="stopVideo" class="options__button">
                                <i class="fa fa-video-camera"></i>
                            </div>
                            <div id="muteButton" class="options__button">
                                <i class="fa fa-microphone"></i>
                            </div>
                        </div>
                        <div class="options__right">
                            <div id="inviteButton" class="options__button">
                                <i class="fas fa-user-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main__right">
                    <div class="main__chat_window">
                        <div class="messages">

                        </div>
                    </div>
                    <div class="main__message_container">
                        <input id="chat_message" type="text" autocomplete="off" placeholder="Type message here..." />
                            <div id="send" class="options__button">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoCalling