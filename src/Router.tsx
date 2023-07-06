import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { AuthContextProvider } from "./state/Auth/Auth";
import Require from "./auth/Require";

const LazyChat = lazy(() => import("./components/Chat/Chat"));

const Router = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/chat'
          element={
            <Require>
              <Suspense fallback='Loading.....'>
                <LazyChat />
              </Suspense>
            </Require>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback='Loading.....'>
              <PageNotFound />
            </Suspense>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
};

export default Router;
