import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { Loader } from './components/common/Loader';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Students = lazy(() => import('./pages/Students'));
const Applications = lazy(() => import('./pages/Applications'));
const SearchCourses = lazy(() => import('./pages/SearchCourses'));
const Wallet = lazy(() => import('./pages/Wallet'));
const Commission = lazy(() => import('./pages/Commission'));
const Services = lazy(() => import('./pages/Services'));
const Resources = lazy(() => import('./pages/Resources'));

const routeConfig = [
    { path: ROUTES.DASHBOARD, element: <Dashboard /> },
    { path: ROUTES.STUDENTS, element: <Students /> },
    { path: ROUTES.APPLICATIONS, element: <Applications /> },
    { path: ROUTES.COURSES, element: <SearchCourses /> },
    { path: ROUTES.WALLET, element: <Wallet /> },
    { path: ROUTES.COMMISSION, element: <Commission /> },
    { path: ROUTES.SERVICES, element: <Services /> },
    { path: ROUTES.RESOURCES, element: <Resources /> },
];

export const AppRouter = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {routeConfig.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
        </Suspense>
    );
};
