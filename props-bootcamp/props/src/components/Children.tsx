const Children = ({ message, energy }: {message: string, energy: number}) => {
  return (
    <>
      <h1>{message}</h1>
      <p>
        {energy > 9000 ? 'Energy is full': ' Energy is low'}
      </p>
    </>
  )
  
}

export default Children

