export const login = async ({auth, email, password}) => {
    await auth.loginWith('local', {
        data: {
          'email': email,
          'password': password,
        }
      })

      if (auth.loggedIn) {
        return '/home'
      }

      throw ('Veuillez retenter')
}
