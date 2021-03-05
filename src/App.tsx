import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Wrapper, StyledButton } from './app.styles'
import { useQuery } from 'react-query';
import Item from './Item/item'
import { useState } from 'react';
import { CartStyle } from './Cart/cart.styles'

export interface CartItemsType {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
  amount: number;
}

const getProducts = async () : Promise<CartItemsType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json()
}

const App: React.FC = () : JSX.Element => {
  const [openCart, setOpenCart] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState([] as CartItemsType[])
  const { data, isLoading, error } = useQuery<CartItemsType[]>('products', getProducts);
  if(isLoading) return <LinearProgress />
  if(error) return <div>Something went wrong</div>
  const handleAddtoCart =(clickedItem: CartItemsType): void => {};
  const getTotalItems = (items: CartItemsType[]): number => {
    return items.reduce((acc:number, item) => acc + item.amount, 0);
  }

  return (
    <Wrapper>
      <Drawer anchor='right' open={openCart} onClose={() => setOpenCart(false)}>
        Cart items goes here
      </Drawer>
      <StyledButton onClick={() => setOpenCart(true)}>
        <Badge color='error' badgeContent={() =>getTotalItems(cartItems)}>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map ((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddtoCart={handleAddtoCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
