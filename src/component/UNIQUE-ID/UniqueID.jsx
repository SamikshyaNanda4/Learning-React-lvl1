import { useId } from "react"

const UniqueID = () => {
    const id=useId()
  return (
    <div>
        <label htmlFor={`${id}-email`}>Email:
            <input type="email" id={`${id}`}  />
        </label>

        <br />

        <label htmlFor={`${id}-password`}>Password:
            <input type="password" id={`${id}`}  />
        </label>

    </div>
  )
}

export default UniqueID
