import React, { useState, useEffect, useRef } from 'react'
import ReactQuill from 'react-quill';
import '../../../node_modules/react-quill/dist/quill.snow.css';
import Parser from 'html-react-parser';

const Editor = () => {
    const [value, setValue] = useState('');
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

    const onChange = (editor) => {
        let text = editor.getText()
        setValue(text)

    }

    useEffect(() => {

        console.log(value)
    }, [value])
    return (
        <div className='textEditor'>
            <ReactQuill theme="snow"
                style={{ height: '350px' }}
                // value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                ref={(el) => { editorRef = el }}
            ></ReactQuill>
            {Parser(value)}
        </div>

    )
}

export default Editor