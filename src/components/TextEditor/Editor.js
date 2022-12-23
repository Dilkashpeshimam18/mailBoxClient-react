import React, { useState, useEffect, useRef } from 'react'
import ReactQuill from 'react-quill';
import '../../../node_modules/react-quill/dist/quill.snow.css';

const Editor = ({ value, setValue, onChange }) => {
    let editorRef = useRef()

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



    useEffect(() => {

        console.log(value)
    }, [value])
    return (
        <div className='textEditor'>
            <ReactQuill theme="snow"
                style={{ height: '300px' }}
                // value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                ref={(el) => { editorRef = el }}
            ></ReactQuill>
        </div>

    )
}

export default Editor