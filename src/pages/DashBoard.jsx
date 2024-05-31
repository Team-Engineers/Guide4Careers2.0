import React from 'react'
import MainProfile from '../components/Dashboard/MainProfile'
import Progress from '../components/Dashboard/Progress'
import AllResult from '../components/Dashboard/AllResult'

const DashBoard = () => {
    return (
        <div>
            <div className=' max-w-[1380px] min-h-screen gap-2 mx-auto flex max-lg:flex-wrap  justify-center lg:justify-between  items-center px-2'>
            <h1 className='lg:w-[23vw]'><MainProfile /></h1>
            <h1 className='lg:w-[43vw] w-[90vw]'><Progress /></h1>
            <h1 className='lg:w-[30vw] w-[90vw]'><AllResult /></h1>
        </div>
        </div>
    )
}

export default DashBoard