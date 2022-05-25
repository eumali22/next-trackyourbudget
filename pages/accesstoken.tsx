import useSWR from 'swr';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Link from 'next/link';

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
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <br />
      <Link href="/hello">
        <a>Hello World</a>
      </Link>
      <br />
      <div>Access Token:</div>
      <div>{data.protected}</div>
      <div>User ID:</div>
      <div>{data.id}</div>
    </>
  );
});