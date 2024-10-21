/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button'

function Header(props){

    const { index, title, description } = props
    return(
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className=' text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator(props) {
    const {muscles, setmuscles, poison, setPoison, goal, setGoal, updateWorkout} = props
    const [showModal, setShowModal] = useState(false)

    // let showModal = false

    function toggleModal() {
        setShowModal(!showModal)
    }

    function updatemuscles(musclesGroup){
        if (muscles.includes(musclesGroup)){
            setmuscles(muscles.filter(val => val !== musclesGroup))
            return
        }

        if (muscles.length > 2){
            return
        }

        if (poison !== 'individual'){
            setmuscles([musclesGroup])
            setShowModal(false)
            return
        }


        setmuscles([...muscles, musclesGroup])
        if (muscles.length === 2) {
            setShowModal(false)
        }
    }

  return (
    <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s ', 'Huge', 'o\'clock']}>
        <Header index={'01'} title={'pick you poison'} description={'Select the workout you wish to enjoy'}/>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
            {Object.keys(WORKOUTS).map((type, typeIndex) => {
                return (
                    <button onClick={() => {
                        setmuscles([])
                        setPoison(type)
                    }} key={typeIndex} className={'bg-slate-950 px-4 border py-3 duration-200 rounded-lg' + (type === poison ? ' border-blue-600' : ' border-blue-400')}>
                        <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                    </button>
                )
            })}
        </div>

        <Header index={'02'} title={'Lock on targets'} description={'Select the muscles judged for annihilation.'}/>
        <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>
            <button onClick={toggleModal} className='relative flex p-3 items-center justify-center'>
                <p className='capitalize'>{muscles.length === 0 ? 'Selet muscles groups' : muscles.join(' ')}</p>
                <i className="fa-solid fa-sort-down absolute right-3 top-1/2 -translate-y-1/2"></i>
            </button>
            {showModal && (
                <div className='flex flex-col px-3 pb-3'>
                    {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((musclesGroup, musclesGroupIndex) => {
                        return (
                            <button onClick={() => {
                                updatemuscles(musclesGroup)
                            }} key={musclesGroupIndex} className={'hover:text-blue-400 duration-200' + (muscles.includes(musclesGroup) ? ' text-blue-400' : ' ')}>
                                <p className='uppercase'>{musclesGroup.replaceAll('_', ' ')}</p>
                            </button>
                        )
                    })}
                </div>
            )}
        </div>

        <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective.'}/>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                return (
                    <button onClick={() => {
                        setGoal(scheme)
                    }} key={schemeIndex} className={'bg-slate-950 border px-4 duration-200 py-3 rounded-lg' + (scheme === goal ? ' border-blue-600' : ' border-blue-400')}>
                        <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                    </button>
                )
            })}
        </div>
        <Button func={updateWorkout} text={"Formulate"}/>
    </SectionWrapper>
 
)

}
