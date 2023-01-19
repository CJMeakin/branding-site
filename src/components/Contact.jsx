import { useState } from 'react'
import qrCode from '/resources/qr-contactInfo.svg'

function Contact() {
    const [count, setCount] = useState(0)
  
    return (
      <div className="Contact">        
        <img src={qrCode} className="qrcode" alt="Contact Information for Connor Meakin" />
      </div>
    )
  }
  
  export default Contact