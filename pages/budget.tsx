
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import BudgetForm from '../components/budgetForm';

export default withPageAuthRequired(function Budget() {
  return (<>
    <BudgetForm />
  </>);
});