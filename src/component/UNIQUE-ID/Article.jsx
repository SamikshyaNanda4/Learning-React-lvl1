import { useId } from 'react'
import UniqueID from './UniqueID'

const Article = () => {
    const id=useId()
  return (
    <div>
    <UniqueID/>
      <p id={`${id}-paragraph`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum reprehenderit cum maiores velit rem aliquam provident, quo totam aspernatur!</p>
      <UniqueID/>
      
    </div>
  )
}

export default Article
