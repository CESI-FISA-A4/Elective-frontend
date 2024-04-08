import axios from 'axios';

export const getRepository = () => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axios.get('http://localhost:3006/api/git');
    
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const getBranch = (repo) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axios.get('http://localhost:3006/api/git/'+repo);
    
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const getCompo = (repo, branch) => {
    return new Promise(async(res, rej) => {
        try {
            branch.replace("/", '%2F')
            const response = await axios.get('http://http://localhost:3006/api/git/'+repo+'/'+branch);
    
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const getCode = (repo, branch,comp) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axios.get('http://http://localhost:3006/api/git/'+repo+'/'+branch+'/'+comp);
    
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}


export const commitSynch = async (repo, branch, code, commitMessage) => {
    try {
        const response = await axios.post('http://http://localhost:3006/api/git/'+repo+'/branches/'+branch, {
            code,
            commitMessage
        });
        if (response.data === "Commit sync successfully") {
            window.location.href = '/gitrepos';
        }else{
            alert("Erreur lors de la synchronisation");
        }
    } catch (error) {
        console.error(error);
    }
}