import { AppRoutes } from './routes';
import Header from '../components/organisms/Header';
import BottomNav from '../components/organisms/BottomNav';
import Navbar from '../components/organisms/Navbar';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main role="main" className="container">
        <AppRoutes />
      </main>
      <BottomNav />
    </div>
  );
}