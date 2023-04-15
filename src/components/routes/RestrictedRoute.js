import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { routes } from './routes';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({
  component: Component,
  redirectTo = routes.home,
}) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
