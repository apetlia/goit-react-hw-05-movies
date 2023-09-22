import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col">
              <nav className="nav  nav-tabs ">
                <NavLink
                  className="nav-link layout-link"
                  to="/"
                  aria-current="page"
                >
                  Home
                </NavLink>
                <NavLink className="nav-link layout-link" to="/movies">
                  Movies
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main className="py-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SharedLayout;
