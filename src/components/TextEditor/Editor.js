import React, { useState, useEffect, useRef } from 'react'
import ReactQuill from 'react-quill';
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { Quill } from 'react-quill';
const Editor = ({ onChange, }) => {
    let quillRef = useRef()
    // editor.deleteText(setValue)
    // let editorRef = quillRef.current.getEditor()
    // console.log(editorRef)
    // const unprivilegedEditor = quillRef.current.makeUnprivilegedEditor(editorRef);
    const modules = {
        toolbar: [
            [{ 'font': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ],
    }


    const formats = [
        'font',
        'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'color', 'background',
        'list', 'bullet', 'indent',

    ]


    return (
        <div className='textEditor'>

            <ReactQuill theme="snow"
                style={{ height: '300px' }}
                onChange={onChange}
                modules={modules}
                formats={formats}
                ref={quillRef}
                id='editor'
            ></ReactQuill>
        </div>

    )
}

export default Editor