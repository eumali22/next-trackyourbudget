import useSWR from 'swr';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const fetcher = async (uri: RequestInfo) => {
  const response = await fetch(uri);
  return response.json();
};

export default withPageAuthRequired(function Budgets() {
  const { data, error } = useSWR('/api/budgets', fetcher);
  if (error) return <div>oops... {error.message}</div>;
  if (data === undefined) return <div>Loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
});