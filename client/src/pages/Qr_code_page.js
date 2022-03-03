import React from 'react'
import QrCode from 'react.qrcode.generator'

function Qr_code_page() {
  return (
    <div> 
    <QrCode value='https://b41b-213-86-144-42.ngrok.io/homepage' size='300'/>
    </div>
  )
}

export default Qr_code_page