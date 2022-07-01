import style from './Day.module.scss'

export const Day = ( { weather, temp } ) => {
  return (
    <li className={style.day}>
      <h2>{temp.max}</h2>
      <img src="" alt="image"></img>
      <h3>{weather[0].main}</h3>
    </li>
  )
}
