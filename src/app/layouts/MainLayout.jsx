import { Outlet } from 'react-router-dom';
import { Navbar } from '../../shared/components/navbar';

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
