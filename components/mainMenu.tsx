import Link from 'next/link';

export default function MainMenu() {
  return (<div>
    <Link href="/">
      <a>Back to Home</a>
    </Link>
    <br />
    <Link href="/accesstoken">
      <a>Access Token</a>
    </Link>
    <br />
    <Link href="/hello">
      <a>Hello World</a>
    </Link>
    <br />
    <Link href="/budgets">
      <a>All Budgets</a>
    </Link>
    <br />
    <Link href="/budget">
      <a>Create Budget</a>
    </Link>
    <br />
    <br />
  </div>);
}