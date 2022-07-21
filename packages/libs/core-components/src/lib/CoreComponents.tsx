import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
/* eslint-disable-next-line */
export interface CoreComponentsProps {}

export function CoreComponents(props: CoreComponentsProps) {
  return (
    <div className="h-screen w-full p-8 text-center font-bold">
      <BrowserRouter>
        <h1 className="text-primary py-12 text-5xl">
          Welcome to CoreComponents!
        </h1>

        <ul>
          <li className="text-blue-500 hover:text-blue-900 hover:underline hover:underline-offset-2">
            <Link to="/">Navigate to core-components route</Link>
          </li>
        </ul>
        <Routes>
          <Route
            path="/"
            element={<div>This is the core-components root route.</div>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default CoreComponents;
