import React from 'react'
import MainProfile from '../components/Dashboard/MainProfile'
import Progress from '../components/Dashboard/Progress'
import AllResult from '../components/Dashboard/AllResult'

const DashBoard = () => {
    return (
        <div>
            <div className=' max-w-[1380px] mx-auto flex justify-between items-center px-2'>
            <h1><MainProfile /></h1>
            <h1><Progress /></h1>
            <h1><AllResult /></h1>
        </div>
        </div>
    )
}

export default DashBoard