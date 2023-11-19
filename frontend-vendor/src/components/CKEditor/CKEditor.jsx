// CKEditorComponent.jsx
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditorComponent = ({ value, onChange }) => {
    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        onChange(data);
    };

    return (
        <CKEditor
            editor={ClassicEditor}
            data={value}
            onChange={handleEditorChange}
            config={{
                height: '300px', // Đặt chiều cao tùy ý
            }}
        />
    );
};

export default CKEditorComponent;