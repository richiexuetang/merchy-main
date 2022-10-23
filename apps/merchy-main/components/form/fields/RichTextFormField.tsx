import { useState } from 'react';
import { convertToRaw, ContentState, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorProps } from 'react-draft-wysiwyg';
import dynamic from 'next/dynamic';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface ITextEditorProps {
  value: string;
  setFieldValue: (val: string) => void;
}

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

const RichTextField = ({ value, setFieldValue }: ITextEditorProps) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  if (typeof window === 'undefined') {
    return null; //return nothing on the server-side
  }

  const onEditorStateChange = (editorState: EditorState) => {
    const forFormik = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setFieldValue(forFormik);
    setEditorState(editorState);
  };

  //return only on the client-side
  return (
    <div>
      <Editor
        editorState={editorState}
        editorStyle={{
          height: 200,
          border: '1px solid #f1f1f1 !important',
          borderRadius: '2px !important',
          borderWidth: 0.5,
          padding: 10,
          overflow: 'hidden',
        }}
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
};

export default RichTextField;
