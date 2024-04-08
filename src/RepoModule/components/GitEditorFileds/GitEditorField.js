import React, { useState, useEffect } from 'react';
import {commitSynch, getCode} from '../../services/Repo.service';

const GithubCodeEditor = ({ repo, branch }) => {
  const [code, setCode] = useState('');
  const [commitMessage, setCommitMessage] = useState('');

  function handleCommit  (repo, branch, commitMessage, code) {
    commitSynch();
  };

  useEffect(() => {
      const fetchCode = async() => {
          setCode({data: [], loading: false});
          let response = await getCode();
          setCode({data: response.data, loading: true});
      } 
      fetchCode();
  }, []); 

  return (
    <div>
      <textarea
        className='rounded-lg border border-black'
        value={code.value}
        onChange={(e) => setCode(e.target.value)}
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