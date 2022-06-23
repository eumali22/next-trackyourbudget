
// export default function Budget(props: { budgetId: string, budgetName: string }) {
//   return (<>
//     {props.budgetId && <BudgetRead {...props} />} 
//     {!props.budgetId && <BudgetEdit />}
//   </>);
// };


// function BudgetRead({ budgetId, budgetName }) {
//   return (<>
//     <div>Budget Id: {budgetId}</div>
//     <div>Budget Name: {budgetName}</div>
//   </>);
// }

export default function BudgetForm() {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Stop the form from submitting and refreshing the page.

    // Get data from the form.
    const data = {
      first: event.target.budget_name.value
    }

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
    alert(`Post result: ${result.data}`);
  }

  return (<>
    <form onSubmit={handleSubmit}>
      <label htmlFor="budget_name">Budget name:</label>
      <input required type="text" id="budget_name" name="budget_name" />
      <button type="submit">Submit</button>
    </form>
  </>);
}

