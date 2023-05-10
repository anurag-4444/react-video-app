import React from 'react'
import {AiOutlineCloudUpload} from 'react-icons/ai'
import '../styles/upload.css'

const Upload = () => {
  return (
    <div className='upload'>
        <AiOutlineCloudUpload size={'10vmax'}/>
        <form>
            <input type="file"/>
            <button>Upload</button>
        </form>
    </div>
  )
}

export default Upload