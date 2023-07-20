import {states} from '../../../mocks/states'
const InstagramStates = () => {
  return (
    <div className='py-[50px]'>
        <ul className='flex items-center gap-2 p-3'>
            {states.map(state => {
             return(
              <li className='' key={state.userName}>
                <img src={state.image} width={50} height={50} className='border-[3px] border-indigo-500/100 rounded-full' alt={`user image of ${state.userName}`} />
                <span className='text-xs'>{state.userName}</span>
              </li>
             )
            })}
        </ul>
    </div>
  )
}

export default InstagramStates