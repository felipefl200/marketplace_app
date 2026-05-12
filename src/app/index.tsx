import { Redirect } from 'expo-router'

export default function App() {
  // const userData = {
  //   token: 'asdpoj324nlkwsdf0',
  //   name: 'Felipe',
  // }

  const userData = null

  if (userData) {
    return <Redirect href="(private)/home" />
  }

  return <Redirect href="/login" />
}
