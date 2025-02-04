import React from "react";
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

export default function RTE({name, control, label, defaultValue = ""}){
    return(
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}
        
        <Controller
        // it take name from parameter
        name= {name || "content"}
        control={control}
        render={ ({field : {onchange}}) => (
            <Editor
            initialValue={defaultValue}
            init = {{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                  ],
                  toolbar: 'undo redo | blocks | bold italic strikethrough backcolor | mergetags | link image | align bullist numlist | code '
            }}
            onEditorChange={onchange}
            
            />
        )}
        />

        
        </div>
    )
}

