import useSWR, { Fetcher } from 'swr';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Link from 'next/link';

type BudgetData = { budget_name: string, SK: string };

const fetcher: Fetcher<BudgetData[], string> = async (uri) => {
  const response = await fetch(uri);
  return response.json();
};

export default withPageAuthRequired(function Budgets() {
  const { data, error } = useSWR('/api/budgets', fetcher);
  if (error) return <div>Error: {error.message}</div>;
  if (data === undefined) return <div>Loading...</div>;

  return (<>
    <Link href="/">
      <a>Back to Home</a>
    </Link>
    <br />
    <Link href="/hello">
      <a>Hello World</a>
    </Link>
    <br />
    <div>{
      data.map((budget) => {
        return <Budget budgetName={budget.budget_name} budgetId={budget.SK.split("budget_")[1]} />
      })}
    </div>
  </>);
});

function Budget({ budgetId, budgetName }) {
  return (
    <div>
      <div>Budget Id: {budgetId}</div>
      <div>Budget Name: {budgetName}</div>
      <div>-------------------------------</div>
    </div>
  );
}
