import trash from '../../../assets/trash.svg'
import download from '../../../assets/download.svg'
import edit from '../../../assets/edit.svg'

export default function RepoCard({onClickEdit, onClickDownload, composantName}){
    return (
        <div  className="flex bg-greenColor min-h-10 mx-3 my-1 px-2 py-1 rounded-md flex-row justify-between">
            <h1 onClick={onClickEdit} className='cursor-pointer'>{composantName}</h1>
            <div className='flex flex-row'>
                <img onClick={onClickEdit} className='cursor-pointer' src={edit} alt="edit" />
                <img onClick={onClickDownload} className='cursor-pointer' src={download} alt="download" />
            </div>
        </div>
    )
}