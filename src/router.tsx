import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

const AuthLayout = lazy(() => import("./layouts/AuthLayout"));
const SportsLayout = lazy(() => import("./layouts/SportsLayout"));
const Splash = lazy(() => import("./components/Splash/Splash"));
const AppLayout = lazy(() => import("@/layouts/AppLayout"));
const Home = lazy(() => import("./views/home/Home"));
const Sports = lazy(() => import("./views/Sports/Sports"));
const PrivateRoute = lazy(
  () => import("@/components/PrivateRoute/PrivateRoute")
);
// const MyPortfolio = lazy(() => import("./views/myPortfolio/MyPortfolio"));
const HistoryLayout = lazy(() => import("./layouts/HistoryLayout"));
const StatsLayout = lazy(() => import("./layouts/StatsLayout"));
const Stats = lazy(() => import("./views/Stats/Stats"));
// const Instructions = lazy(
//   () => import("@/views/InstructionsPortfolios/InstructionsPortfolios")
// );
const History = lazy(
  () => import("@/views/HistoryPortfolios/HistoryPortfolios")
);

const Error404 = lazy(() => import("@/views/Error404/Error404"));

// fondos
import ImgHistory from "@/assets/img/details-ball-sport.jpg";
import WIP from "./views/WIP/WIP";

const ImgSports =
  "https://s3.mx-central-1.amazonaws.com/portfolio.pool/epl/login/log_in_girl_back.png";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta raíz para EPL standalone */}
        <Route
          path="/"
          element={<Splash />}
        />
        {/* Ruta con userId para compatibilidad */}
        <Route
          path="/:userId"
          element={<Splash />}
        />
        {/* Rutas EPL con prefijo */}
        <Route
          path="/epl/:userId"
          element={<Splash />}
        />
        <Route element={<SportsLayout ImgSports={ImgSports} />}>
          <Route
            path="/epl/sports/:userId"
            element={<Sports />}
          />
          <Route
            path="/sports/:userId"
            element={<Sports />}
          />
        </Route>
        <Route
          path="/epl/wip/:userId"
          element={<WIP />}
        />
        <Route
          path="/wip/:userId"
          element={<WIP />}
        />

        <Route element={<AppLayout />}>
          <Route
            path="/epl/home/:userId"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/home/:userId"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/epl/myPortfolio/:userId"
            element={
              <PrivateRoute>
                {/* <MyPortfolio /> */}
                <WIP />
              </PrivateRoute>
            }
          />
          <Route
            path="/myPortfolio/:userId"
            element={
              <PrivateRoute>
                {/* <MyPortfolio /> */}
                <WIP />
              </PrivateRoute>
            }
          />
          <Route
            path="/epl/instructions/:userId"
            element={
              <PrivateRoute>
                {/* <Instructions /> */}
                <WIP />
              </PrivateRoute>
            }
          />
          <Route
            path="/instructions/:userId"
            element={
              <PrivateRoute>
                {/* <Instructions /> */}
                <WIP />
              </PrivateRoute>
            }
          />
        </Route>
        <Route element={<HistoryLayout ImgHistory={ImgHistory} />}>
          <Route
            path="/epl/history/:userId"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          <Route
            path="/history/:userId"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
        </Route>
        <Route element={<StatsLayout />}>
          <Route
            path="/epl/stats/:userId"
            element={
              <PrivateRoute>
                <Stats />
              </PrivateRoute>
            }
          />
          <Route
            path="/stats/:userId"
            element={
              <PrivateRoute>
                <Stats />
              </PrivateRoute>
            }
          />
        </Route>
        <Route element={<AuthLayout />}>
          <Route
            path="*"
            element={<Error404 />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
