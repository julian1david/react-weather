export const Day = ( { weather } ) => {
  return (
    <li>
      <h2></h2>
      <h3>{weather[0].main}</h3>
    </li>
  )
}
