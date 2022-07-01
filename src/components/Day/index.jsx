import style from './Day.module.scss'
import { getCurrentDay } from '../../utilities/CurrentDay'
export const Day = ( { weather, temp, dayNumber } ) => {

  const date = getCurrentDay()
  

  return (
    <li className={style.day}>
      <h2>{temp.max}</h2>
      <img src="" alt="image"></img>
      <h3>{weather[0].main}</h3>
      <p>{date.toDateString()}</p>
    </li>
  )
}
