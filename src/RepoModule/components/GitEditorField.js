import React, { useState } from 'react';
import axios from 'axios';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

const CodeEditor = ({ owner, repo, path }) => {
  const [code, setCode] = useState('');
  const [commitMessage, setCommitMessage] = useState('');

  const fetchCode = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
      );
      setCode(atob(response.data.content));
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommit = async () => {
    try {
      const response = await axios.put(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
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
      <button onClick={fetchCode}>Fetch Code</button>
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript', // Change this according to your file type
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />
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

