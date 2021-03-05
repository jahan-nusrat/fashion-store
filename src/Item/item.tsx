import { Button } from '@material-ui/core';
import { CartItemsType } from '../App';
import { Wrapper } from './item.styles'

interface Props {
  item: CartItemsType;
  handleAddtoCart: (clickedItem: CartItemsType) => void;
}

const Item: React.FC<Props> = ({item, handleAddtoCart}): JSX.Element => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
      </div>
      <Button onClick={() => handleAddtoCart(item)}>Add to cart</Button>
    </Wrapper>
  )
}

export default Item
