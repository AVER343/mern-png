import React from 'react'
const DownloadButton = props => {
    const downloadFile = () => {
      window.location.href = "https://yoursite.com/src/assets/files/exampleDoc.pdf"
    }
    return (
              <button onClick={downloadFile} />
    )
  }
  export default DownloadButton;