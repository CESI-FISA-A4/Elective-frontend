import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GithubCodeEditor = ({ owner, repo, path }) => {
  const [code, setCode] = useState('');
  const [commitMessage, setCommitMessage] = useState('');

  useEffect(() => {
    fetchCode();
  }, []);

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

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={handleCodeChange}
        rows={25}
        cols={130}
      />
      <br />
      <input
        type="text"
        placeholder="Commit message"
        value={commitMessage}
        onChange={(e) => setCommitMessage(e.target.value)}
      />
      <br />
      <button onClick={handleCommit}>Commit</button>
    </div>
  );
};

export default GithubCodeEditor;