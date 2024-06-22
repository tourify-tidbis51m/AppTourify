import Router from "./routes/Router";
import { AuthProvider } from "./providers/authProvider";

export default function App() {
  return ( 
  <AuthProvider>
    <Router />
  </AuthProvider>
  )
}
