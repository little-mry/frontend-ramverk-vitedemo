import Parent from "./Parent"

const Grandparent = () => {
  const greeting: string = 'hejsvej barn barn!';
  const energyLevel: number = 901;

  return (
    <Parent message={greeting} energy={energyLevel} />
  )
}

export default Grandparent