import {Editor, EditorState} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React, {FC, useState} from 'react';

export const Wysiwyg: FC = () => {
  const [content, setContent] = useState<EditorState>();

  const onEditorStateChange = (e: EditorState) => {
    setContent(e);
  };

  return (
    <Editor
      editorState={content}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={onEditorStateChange}
    />
  );
};
