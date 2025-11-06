import React from 'react';

/**
 * Editor component - main text editing area
 */
const Editor = ({ value, onChange }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            rows="20"
            cols="80"
            placeholder="Bắt đầu chỉnh sửa tài liệu..."
        />
    );
};

export default Editor;

