import { useRouter } from "next/router";
import MainMenu from "./mainMenu";


export default function BudgetForm() {
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Stop the form from submitting and refreshing the page.

    // Get data from the form.
    const data = { 'budget_name': event.target.budget_name.value }

    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/budget';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    const result = await response.json();
    alert(`Record created: ${JSON.stringify(result)}`);
    router.push('/budgets');
  }

  return (<>
    <MainMenu />
    <form onSubmit={handleSubmit}>
      <label htmlFor="budget_name">Budget name:</label>
      <input required type="text" id="budget_name" name="budget_name" />
      <button type="submit">Submit</button>
    </form>
  </>);
}

