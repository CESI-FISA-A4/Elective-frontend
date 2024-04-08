import axiosInstance from "../../utils/constants/axios";

export const getRepository = () => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance.get('/api/git/');
    
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
            const response = await axiosInstance.get('/api/git/{repo}');
    
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
            const response = await axiosInstance.get('/api/git/{repo}/branches/{branch}');
    
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
            const response = await axiosInstance.get('/api/git/{repo}/branches/{branch}/{comp}');
    
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}


export const commitSynch = async (repo, branch, code, commitMessage) => {
    try {
        const response = await axiosInstance.post('/api/git/{repo}/branches/{branch}', {
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