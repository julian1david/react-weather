import { Day } from '../Day'

export const ListDays = ( { days }) => {
  return (
    <ul>{days.map( day => <Day  key={day.dt} {...day}/> )}</ul>
  )
}
