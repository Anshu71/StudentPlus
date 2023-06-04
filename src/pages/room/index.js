import React from 'react';
import { useParams } from 'react-router-dom';
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const {roomId} = useParams()

    const myMeetings = async(element) => {
        const appID = 156322451;
        const serverSecret = "cc4b309eb5049a8d324731034305b6f1";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(),"Harsh")
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [{
                name:"Copy Link",
                url: `http://localhost:3000/room/${roomId}`,
            }],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall,
            }
        })
    }

    return(
        <div>
            <div ref={myMeetings} />
        </div>
    );
};

export default RoomPage;