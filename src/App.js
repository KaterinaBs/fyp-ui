import Home from './components/pages/Home.js';
import signIn from './components/pages/SignIn.js';
import pageNotFound from './components/pages/404.js';
import contactUs from './components/pages/ContactUs.js';
import './App.css';
import Layout from './components/layout/Layout.js';


function App() {
  return (
    <Layout>
      <contactUs />
    </Layout>

   
  );
}

export default App;
