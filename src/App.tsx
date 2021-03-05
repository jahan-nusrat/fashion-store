import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Wrapper } from './app.styles'
import { useQuery } from 'react-query';

interface CartItems {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

const getProducts = async () : Promise<CartItems[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json()
}

const App: React.FC = () : JSX.Element => {
  const { data, isLoading, error } = useQuery<CartItems[]>('products', getProducts);
  if(isLoading) return <LinearProgress />
  if(error) return <div>Something went wrong</div>
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        Hello
      </header>
    </div>
  );
}

export default App;
