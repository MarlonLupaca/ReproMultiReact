import React from 'react'
import Caja_Archivos from "../Components/Caja_Archivos"
import Caja_Recientes from "../Components/Caja_Recientes"


const Home = () => {
    return (
        <>
            <main className="flex flex-col gap-10 py-4 mb-[120px]">
                <Caja_Recientes/> 
                <Caja_Archivos/>
            </main>
        </>
    )
}

export default Home
