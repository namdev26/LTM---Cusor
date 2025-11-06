import React, { useRef } from 'react';

/**
 * Create Version Form component - form for creating new version
 */
const CreateVersionForm = ({ onSubmit, onCancel }) => {
    const versionNameRef = useRef(null);

    const handleSubmit = () => {
        const versionName = versionNameRef.current?.value || '';
        onSubmit(versionName);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="create-version-form">
            <input
                ref={versionNameRef}
                type="text"
                placeholder="Tên version (để trống để dùng tên mặc định)"
                onKeyPress={handleKeyPress}
                autoFocus
            />
            <button onClick={handleSubmit}>Lưu</button>
            <button onClick={onCancel}>Hủy</button>
        </div>
    );
};

export default CreateVersionForm;

