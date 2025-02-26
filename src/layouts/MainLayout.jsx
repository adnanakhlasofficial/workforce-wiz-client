import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <header className='bg-errigalWhite/70 backdrop-blur-lg shadow-lg sticky top-0 z-10'>
        {/* navbar */}
        <Navbar />
      </header>
      <main className='min-h-[calc(100vh-14.5rem)]'>
        <Outlet />
      </main>
      <footer className='bg-errigalWhite min-h-44'>
        {/* footer */}
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
