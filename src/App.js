import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './App.css';
import devices from './Components/devices';
import home from './Components/home';
import notFound from './Components/notFound';
import signIn from './Components/signIn';
import signUp from './Components/signUp';
import { CustomRoute, AuthRoute, UnauthRoute } from './Helpers/CustomRouter';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute path="/" exact component={home}></CustomRoute>
        <AuthRoute path="/devices" exact component={devices}></AuthRoute>
        <UnauthRoute path="/sign-up" exact component={signUp}></UnauthRoute>
        <UnauthRoute path="/sign-in" exact component={signIn}></UnauthRoute>
        <CustomRoute path="/not-found" component={notFound}></CustomRoute>
        <Redirect to='/not-found'></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
