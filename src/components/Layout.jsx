import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export function Layout() {
  return (
    <>
      <header className="header">
        <Navigation />
      </header>
      <main className="wrapper">
        <Outlet />
      </main>
    </>
  );
}
