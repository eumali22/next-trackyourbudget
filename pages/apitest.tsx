import Link from "next/link";

export default function ApiTest() {
  return (
    <>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <br />
      <Link href="/api/budgets">
        <a>Budgets JSON</a>
      </Link>
      <br />
      <Link href="/accesstoken">
        <a>Access Token</a>
      </Link>

      <ul>
        <li>
          <button onClick={() => { alert(`hey`) }}>Click Me</button>
        </li>
      </ul>
    </>
  );
}

