import {states} from '../../../mocks/states'
import {IoIosArrowDroprightCircle} from 'react-icons/io'
const InstagramStates = () => {
  return (
    <div className='my-[50px]'>
        <ul className='flex items-center gap-2 p-3 w-[530px] relative overflow-hidden'>
            {states.map(state => {
             return(
              <li className='' key={state.userName}>
                <img src={state.image} width={50} height={50} className='border-[3px] border-indigo-500/100 rounded-full' alt={`user image of ${state.userName}`} />
                <span className='text-xs'>{state.userName}</span>
              </li>
             )
            })}
            <li className='absolute right-0'>
              <span className='text-2xl text-white'><IoIosArrowDroprightCircle/></span>
            </li>
        </ul>
    </div>
  )
}

export default InstagramStates