import { useState } from "react"
import CustomButton from "../../utils/components/CustomButton";
import RepoCard from "./RepoCard";
import CodeEditor from "./GitEditorField";
import {MenuItem, InputLabel, Select} from "@mui/material"

export default function GitRepos(){


    return(
        <div className="w-screen h-screen flex">
            <div className="bg-greyColor w-1/4 h-96 mt-24 ml-24">
            <div className="flex justify-center mt-3">
            <div>
            <InputLabel id="label">Repository</InputLabel>
            <Select labelId="label" id="select" value="20">
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
            </Select>
            </div>
            <div className="ml-5">
            <InputLabel id="label">Branche</InputLabel>
            <Select labelId="label" id="select" value="20">
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
            </Select>
            </div>
            </div>
                <div className="mt-3">Ajouter barre de recherche</div>
                <RepoCard composantName='nom de mon composant' className="mt-5"/>
            </div>
            <div className="mt-24 ml-24 ">
            <CodeEditor owner='estebanLavaux' repo='' path=''/>
            </div>
        </div>
    )
}
