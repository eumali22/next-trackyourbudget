import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function myApiRoute(req, res) {
  const sess = getSession(req, res);
  const user = sess.user;
  
  res.json({ protected: sess.accessToken, id: user.sub });
});