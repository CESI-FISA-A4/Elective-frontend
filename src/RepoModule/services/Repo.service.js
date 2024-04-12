import axiosInstance from "../../utils/constants/axios";
import React from "react";

export const getRepository = () => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                url: `/api/git`,
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}


export const getBranch = (repo) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                url: `/api/git/${repo}`,
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const getCompo = (repo, branch) => {
    return new Promise(async (res, rej) => {
        try {
            if (branch !== undefined) {
                branch = branch.replace("/", '%2F')
                const response = await axiosInstance({
                    url: `/api/git/${repo}/${branch}`,
                    headers: { "Authorization": localStorage.getItem('accessToken') }
                });
                res(response);
        }
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const getCode = (repo, branch, comp) => {
    return new Promise(async (res, rej) => {
        try {
            if (branch !== undefined) {
                branch = branch.replace("/", '%2F')
                const response = await axiosInstance({
                    url: `/api/git/${repo}/${branch}/${comp}`,
                    headers: { "Authorization": localStorage.getItem('accessToken') }
                });
                res(response);
            }
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const commitSynch = (repo, branch, code, path, commitMessage) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                method: "PUT",
                url: `/api/git/${repo}/${branch}/${path}`,
                headers: { "Authorization": localStorage.getItem('accessToken') },
                data: {
                    "message": commitMessage,
                    "content": code
                },
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}
