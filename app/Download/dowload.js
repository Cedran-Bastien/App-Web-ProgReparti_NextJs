import React from 'react';


// Button to dowload what we have
const DownloadHandler  = ({filePath}) => (
    <a href={filePath} target={"_blank"}> LOGO </a>
)

export const Download = () => (
    <div>
        <DownloadHandler filePath='test.zip' />
    </div>
)