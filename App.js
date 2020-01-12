import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import AuthLoading from './src/screens/AuthLoading';
import Login from './src/screens/Auth/Login';
import Signup from './src/screens/Auth/Signup';
import Category from './src/screens/user/category';
import Viewproduct from './src/screens/user/Viewproduct';
import Product from './src/screens/user/Product';
import Cart from './src/screens/component/Cart';  
import Dashboard from './src/screens/user/Dashboard'
import Checkout from './src/screens/user/Checkout';
import Remove from './src/screens/Admin/Remove';
import Info from './src/screens/Admin/Info';
import Adminp from './src/screens/Admin/Adminp';
import AViewProduct from './src/screens/Admin/AViewProduct';
import AProduct from './src/screens/component/AProduct';
import Add from './src/screens/Admin/Add';
import Payment from './src/screens/user/Payment';
import Chatbot from './src/screens/user/Chatbot';
import Statistics from './src/screens/Admin/Statistics';  
import {createDrawerNavigator} from 'react-navigation'

  
const AuthStack = createStackNavigator({ 
    
  Login:Login,

   
 Dashboard:{ 
    screen: Dashboard, 
    navigationOptions: ({ navigation }) => ({
     header: null,
    }),
 },

 Statistics:{ 
    screen: Statistics, 
    navigationOptions: ({ navigation }) => ({
     header: null,
    }), 
 },
 
 Chatbot:{
    screen: Chatbot, 
    navigationOptions: ({ navigation }) => ({
     header: null,
    }),
 },
  Info:{
    screen: Info, 
    navigationOptions: ({ navigation }) => ({
     header: null,
    }),
 },

 Payment:{
    screen: Payment, 
    navigationOptions: ({ navigation }) => ({
     header: null,
    }),
 },
  Adminp:{
    screen: Adminp, 
    navigationOptions: ({ navigation }) => ({
     header: null,
    }),
 }, 
  AViewProduct:{
    screen: AViewProduct, 
    navigationOptions: ({ navigation }) => ({
     header: null,
    }),
 },
  AProduct:{
    screen: AProduct, 
    navigationOptions: ({ navigation }) => ({
     header: null,
    }),
 }, 
  Add:{
    screen: Add, 
    navigationOptions: ({ navigation }) => ({
     header: null,
    }),
 },
  Signup: {
    screen: Signup, 
    navigationOptions: ({ navigation }) => ({
     header: null,
    }),
 },
  Category: {
    screen: Category, 
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  Viewproduct: {
    screen: Viewproduct,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  Product: {
    screen: Product,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  Cart: {
    screen: Cart,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
Checkout: { 
    screen: Checkout,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),   
  },
Remove: { 
    screen: Remove, 
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },

});
export default createAppContainer(
  createSwitchNavigator(
    {
      
      AuthLoading: AuthLoading,
      Auth: AuthStack,
      
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
