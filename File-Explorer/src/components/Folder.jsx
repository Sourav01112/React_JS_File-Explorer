import React, { useState } from 'react'
import { FcFolder, FcFile } from 'react-icons/fc';
import { BsFolderPlus } from 'react-icons/bs';
import { AiOutlineFileAdd } from 'react-icons/ai';

import '../App.css'


export const Folder = ({ explorerData }) => {

    // console.log(explorerData);

    const [expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState({
        visible: false, //initially false
        isFolder: false //as we are tracking if it is folder or a file
    })

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation() //making them stop clicking
        setExpand(true);
        setShowInput({
            visible: true,
            isFolder
        });
    }

    const handleADDFolder = (e) => {
        if (e.keyCode == 13 && e.target.value) {
            setShowInput({ ...showInput, visible: false })
        }
    }

    if (explorerData.isFolder) {
        return (
            <div style={{ marginTop: '5px' }}>
                <div
                    className='folder'
                    onClick={() => setExpand(!expand)}
                ><FcFolder />
                    <span>{explorerData.name}</span>
                    <div>
                        <button onClick={(e) => handleNewFolder(e, false)}
                            style={{ marginRight: '5px' }}><AiOutlineFileAdd /></button>
                        <button
                            onClick={(e) => handleNewFolder(e, true)}><BsFolderPlus /></button>
                    </div>
                </div>

                <div style={{ display: expand ? 'block' : 'none', paddingLeft: '25px' }}>
                    {
                        showInput.visible && (
                            <div className='inputContainer'>
                                <span>{showInput.isFolder ? <FcFolder /> : <FcFile />} </span>
                                <input className='inputContainer_input' type="text"
                                    autoFocus
                                    onBlur={() => setShowInput({
                                        ...showInput, visible: false
                                    })}
                                    onKeyDown={handleADDFolder}
                                />
                            </div>
                        )
                    }

                    {explorerData.items.map((ele) => {
                        return (
                            // <div key={ele.id}>
                            //     <span>{ele.name}</span>
                            // </div>
                            <Folder explorerData={ele} key={ele.id} />
                        )
                    })}</div>
            </div>
        )

    } else {
        return <span className='file'> <FcFile />{explorerData.name}</span>
    }

}
