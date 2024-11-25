import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Main/Home";
import ErrorPage from "./../Pages/ErrorPage/ErrorPage";
import MainLayout from "./../Layout/MainLayout/MainLayout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "donationRequests",
      //   element: <DonationRequest />,
      // },
      // {
      //   path: "donationDetails/:id",
      //   element: (
      //     <PrivateRoute>
      //       <DonationsDetails />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "funding",
      //   element: (
      //     <PrivateRoute>
      //       <Funding />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "searchPage",
      //   element: <SearchPage />,
      // },
      // {
      //   path: "allBlogs",
      //   element: <AllBlogs />,
      // },
      // {
      //   path: "blogDetails/:id",
      //   element: <BlogDetails />,
      // },
      {
        path: "/registration",
        errorElement: <ErrorPage />,
        element: <Register />,
      },
      {
        path: "/login",
        errorElement: <ErrorPage />,
        element: <Login />,
      },
    ],
  },
  // {
  //   path: "/dashboard",
  //   errorElement: <ErrorPage />,
  //   element: (
  //     <PrivateRoute>
  //       <DashboardLayout />
  //     </PrivateRoute>
  //   ),
  //   children: [
  //     {
  //       path: "userHome",
  //       element: <UserHome />,
  //     },
  //     {
  //       path: "profile",
  //       element: <Profile />,
  //     },
  //     {
  //       path: "updateProfile",
  //       element: <UpdateProfile />,
  //     },
  //     {
  //       path: "myDonationRequestsPage",
  //       element: <MyDonationRequests />,
  //     },
  //     {
  //       path: "updateDonationRequest/:id",
  //       element: <UpdateDonationRequest />,
  //     },
  //     {
  //       path: "createDonation",
  //       element: <CreateDonation />,
  //     },

  //     // admin related routes
  //     {
  //       path: "adminHome",
  //       element: <AdminHome />,
  //     },
  //     {
  //       path: "allUsers",
  //       element: <AllUsers />,
  //     },
  //     {
  //       path: "allDonationRequests",
  //       element: <AllDonationRequests />,
  //     },
  //     {
  //       path: "contentManagement",
  //       element: <ContentManagement />,
  //     },
  //     {
  //       path: "addBlog",
  //       element: <AddBlog />,
  //     },
  //   ],
  // },
]);

export default router;
