import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../features/counter/countesSlice'

export const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  
  // https://www.youtube.com/watch?v=dDZvNZ9kyvg&list=PLCKuOXG0bPi3AWYFJewb-UhN7Y2VjooJL&ab_channel=FernandoHerrera

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{ marginRight: '1.5rem', width: '10%', height: '60px', fontSize: '1.5rem' }}
        >
          Increment
        </button>
        <span style={{fontSize: '2.5rem'}}>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          style={{ marginLeft: '2rem', width: '10%', height: '60px', fontSize: '1.5rem' }}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}