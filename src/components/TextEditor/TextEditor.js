import React, { useState, useEffect, Component } from 'react'
import { Editor } from "react-draft-wysiwyg";
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { EditorState } from 'draft-js';
import './TextEditor.css'
import { convertToRaw } from 'draft-js'
import draftjsToMarkdown from 'draftjs-to-markdown';


const TextEditor = () => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const [convertedContent, setConvertedContent] = useState(null);
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    useEffect(() => {

        setConvertedContent(draftjsToMarkdown(convertToRaw(editorState.getCurrentContent())))

    }, [editorState])


    return (
        <div className='textEditor'>
            <Editor
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}

                hashtag={{
                    separator: ' ',
                    trigger: '#',
                }}
                mention={{
                    separator: ' ',
                    trigger: '@',
                    suggestions: [
                        { text: 'JavaScript', value: 'javascript', url: 'js' },
                        { text: 'Golang', value: 'golang', url: 'go' },
                    ],
                }}

            />
            <textarea value={convertedContent} />
        </div>

    )
}

export default TextEditor