import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

// export default handleAuth();

export default handleAuth({
  async login(req, res) {
    try {
      // Add your own custom logger
      // console.log('Logging in');
      // Pass custom parameters to login
      await handleLogin(req, res, {
        authorizationParams: {
          audience: 'https://trackyourbudget/api', // or AUTH0_AUDIENCE
          // Add the `offline_access` scope to also get a Refresh Token
          scope: 'openid profile email read:budgets create:budgets', // or AUTH0_SCOPE
          // permissions: '' 
        },
        returnTo: '/hello'
      });
    } catch (error) {
      // Add your own custom error handling
      console.error(error);
      res.status(error.status || 400).end(error.message);
    }
  }
});