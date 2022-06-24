import useSWR from 'swr';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import MainMenu from '../components/mainMenu';

const fetcher = async (uri: RequestInfo) => {
  const response = await fetch(uri);
  return response.json();
};

export default withPageAuthRequired(function AccessToken() {
  const { data, error } = useSWR('/api/protected', fetcher);
  if (error) return <div>oops... {error.message}</div>;
  if (data === undefined) return <div>Loading...</div>;
  return (
    <>
      <MainMenu />
      <div>Access Token:</div>
      <div>{data.protected}</div>
      <div>User ID:</div>
      <div>{data.id}</div>
    </>
  );
});