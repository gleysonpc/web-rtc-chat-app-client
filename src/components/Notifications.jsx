import { Button } from '@material-ui/core'
import { useContext } from 'react'

import { SocketContext } from '../SocketContext'

export default function Notifications() {
    const { answerCall, call, callAccepted } = useContext(SocketContext)
    return (
        <>
            {
                call.isReceivingCall && !callAccepted && (
                    <div style={{ display: 'flex', justifyContent: 'center' }} >
                        <h1>{call.name} Está Ligando</h1>
                        <Button variant='contained' color='primary' onClick={answerCall} >
                            Atender
                        </Button>
                    </div>
                )
            }
        </>
    )
}