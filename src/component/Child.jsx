

const Child = ({onClickHandler,count}) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={onClickHandler}>CHILD INCREMENTING</button>
    </div>
  )
}

export default Child
