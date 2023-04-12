
export const Square = ({children, updateBoard, index, isSelected}) => {
  const className =  isSelected ? "square selected": "square"; 
  
  const handleClick = () => {
    updateBoard(index)
  }
 
  return (
    <div className= {className} onClick = {handleClick}>
      {children}
    </div>
  )
}