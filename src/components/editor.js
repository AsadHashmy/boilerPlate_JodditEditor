import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

export default function Editor() {
  const editor = useRef(null);
  const [content, setContent] = useState("Start writing");
  const [files, setFiles] = useState([]);
  const config = {
    readonly: false,
    enableDragAndDropFileToEditor: true,
    height: 400,
  };
  const handleUpdate = (event) => {
    const editorContent = event.target.innerHTML;
    setContent(editorContent);
  };

  return (
    <div className="App">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={handleUpdate}
        onChange={(newContent) => {
          console.log(newContent);
        }}
      />
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
    </div>
  );
}
