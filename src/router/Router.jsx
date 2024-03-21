import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageNotFind from "../pages/404";
import Dashboard from "../pages/Dashboard";
import AuthPages from "../pages/AuthPages";
import Admin from "../pages/Admin";
import { getProfile } from "../services/user";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/modules/Loader";
import Ditails from "../pages/DitailsPage";
import PostList from "../components/templates/PostList";
import CategoryPage from "../pages/CategoryPage";

const Router = () => {
  const { data, isLoading } = useQuery(["profile"], getProfile);
  // console.log({ data});

  if (isLoading) return <Loader />;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/ditails/:id" element={<Ditails />} />
      <Route path="*" element={<PageNotFind />} />
      <Route
        path="/dashboard"
        element={data ? <Dashboard /> : <Navigate to="/auth" />}
      />
      <Route
        path="/my-posts"
        element={!!data ? <PostList /> : <Navigate to="/" />}
      />
      <Route
        path="/auth"
        element={data ? <Navigate to="/dashboard" /> : <AuthPages />}
      />
      <Route
        path="/admin"
        element={
          data && data.data.role == "ADMIN" ? <Admin /> : <Navigate to="/" />
        }
      />
      <Route path="/category/:slug" element={<CategoryPage />} />
    </Routes>
  );
};

export default Router;
