import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/Admin-Dashboard" element={(<Ecommerce />)} />
                <Route path="/Admin-Dashboard/ecommerce" element={(<Ecommerce />)} />

                {/* pages  */}
                <Route path="/Admin-Dashboard/orders" element={<Orders />} />
                <Route path="/Admin-Dashboard/employees" element={<Employees />} />
                <Route path="/Admin-Dashboard/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/Admin-Dashboard/kanban" element={<Kanban />} />
                <Route path="/Admin-Dashboard/editor" element={<Editor />} />
                <Route path="/Admin-Dashboard/calendar" element={<Calendar />} />
                <Route path="/Admin-Dashboard/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/Admin-Dashboard/line" element={<Line />} />
                <Route path="/Admin-Dashboard/area" element={<Area />} />
                <Route path="/Admin-Dashboard/bar" element={<Bar />} />
                <Route path="/Admin-Dashboard/pie" element={<Pie />} />
                <Route path="/Admin-Dashboard/financial" element={<Financial />} />
                <Route path="/Admin-Dashboard/color-mapping" element={<ColorMapping />} />
                <Route path="/Admin-Dashboard/pyramid" element={<Pyramid />} />
                <Route path="/Admin-Dashboard/stacked" element={<Stacked />} />

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
