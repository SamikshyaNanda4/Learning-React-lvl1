

const DayGreeting = ({timeOfDay}) => {
  return timeOfDay==="morning"? (
    <div>
        Good Morning
    </div>
  ):(
    <div>
        Good {timeOfDay}
    </div>
  )
}

export default DayGreeting
