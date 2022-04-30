import { useUser } from '@auth0/nextjs-auth0';
import Profile from "../components/profile";

export default function Hello() {
  const { user } = useUser();
  
  return (<>
    <h1>Hello, World!</h1>
    {!user && <a href="/api/auth/login">Login</a>}
    {user && <a href="/api/auth/logout">Logout</a>}
    {user && <Profile />}
  </>);
}