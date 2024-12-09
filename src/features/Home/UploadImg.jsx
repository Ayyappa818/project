import React from 'react'

function UploadImg() {
  return (
    <div>
      <form action="http://localhost:6000/abc" method='POST' encType='multipart/form-data'>
        <input type="file" name="file" id="" />
        <br />
        <input type="text" name="username" id="" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UploadImg
