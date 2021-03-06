import useSWR, { Fetcher } from 'swr';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import MainMenu from '../components/mainMenu';

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
    <MainMenu />
    <div>{
      data.map((budget) => {
        const id = budget.SK.split("budget_")[1];
        return <BudgetLine 
          budgetName={budget.budget_name}
          budgetId={id}
          key={id}
        />
      })}
    </div>
  </>);
});

function BudgetLine({ budgetId, budgetName }) {
  return (
    <div>
      <div>Budget Id: {budgetId}</div>
      <div>Budget Name: {budgetName}</div>
      <div>-------------------------------</div>
    </div>
  );
}
