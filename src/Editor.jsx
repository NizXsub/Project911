import Quill from 'quill';
// import Container from 'quill/blots/container';
import "quill/dist/quill.core.css";
import { useRef } from 'react';
// import { useCallback } from 'react';

export default function Editor() {
    // const container = document.getElementById('editor')
    // const container = useRef(null);
    

    const quill = new Quill('editor', {
        theme: 'snow',
    });
//   const EditorRef = useCallback((wrapper) =>{
//     wrapper.innerHTML = '';
//     const editor = document.createElement('div');
//     wraper.current.append(editor);
//     new Quill(editor, {theme:"snow"})
//     return () =>{
//         EditorRef.innerHTML = "";
//     }
//   }, [])

    return (
        <>
    <div id='editor'>
        //
    </div>
    </>
    
    )
      
}