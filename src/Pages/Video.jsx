import React from 'react'
import Filtros from '../Components/Filtros'
import C_Video from '../Components/C_Video'

const Video = () => {
    return (
        <>
            <main className='flex flex-col gap-2'>
                <Filtros/>
                <span className='px-4 font-[500] text-[18px]'>Todos los videos</span>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
                <C_Video/>
            </main>
        </>
    )
}

export default Video
