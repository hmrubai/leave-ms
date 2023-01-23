import React, { useRef, useState } from 'react'
import JoditEditor from 'jodit-react';

function TextEditor() {
    const [description,setDescription]=useState()
    const editor = useRef(null);
  return (
      <div>TextEditor
          
          <JoditEditor
                ref={editor}
                value={description}
                // config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setDescription(newContent)} // preferred to use only this option to update the content for performance reasons
                // onChange={(newContent) => {setDescription(newContent.target.value)}}
          />
          
          {/* view file */}
          <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      

  )
}

export default TextEditor