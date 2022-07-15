import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

/* eslint-disable-next-line */
export interface CoreComponentsProps {}

export function CoreComponents(props: CoreComponentsProps) {
  return (
    <div className="h-screen w-full bg-slate-100 p-8 text-center font-bold">
      <BrowserRouter>
        <h1 className="py-12 text-4xl">Welcome to CoreComponents!</h1>

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
