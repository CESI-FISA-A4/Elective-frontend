import React, { useState } from 'react';
import axios from 'axios';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [fileName, setFileName] = useState('');
  const [commitMessage, setCommitMessage] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      setCode(e.target.result);
    };
    reader.readAsText(file);
  };

  const handleCommit = async () => {
    try {
      const response = await axios.put(
        `https://api.github.com/repos/{owner}/{repo}/contents/{path}`,
        {
          message: commitMessage,
          content: Buffer.from(code).toString('base64'),
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <textarea value={code} onChange={(e) => setCode(e.target.value)} />
      <input
        type="text"
        placeholder="Commit message"
        value={commitMessage}
        onChange={(e) => setCommitMessage(e.target.value)}
      />
      <button onClick={handleCommit}>Commit</button>
    </div>
  );
};

export default CodeEditor;