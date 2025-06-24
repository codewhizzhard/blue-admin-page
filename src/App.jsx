import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import ProductManagement from "./pages/product/productManagement";
import OrderManagement from "./pages/order/orderManagement";
import UserManagement from "./pages/user/userManagement";
import Payments from "./pages/payments";
import AddProduct from "./pages/product/addProduct";
import CustomerOrder from "./pages/order/customerOrder";
import OrderLayout from "./pages/order/orderLayout";
import UserInfo from "./pages/user/userInfo";
import Settings from "./pages/setting/settings";
import Profile from "./pages/setting/profile";
import Password from "./pages/setting/password";

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout/>}>
        <Route index element={<Dashboard />} />
        <Route path="/prds" element={<ProductManagement />}/>
        <Route path="/prds/add" element={<AddProduct />} />
        
        <Route path="/ords" element={<OrderLayout />}>
        <Route index element={<OrderManagement />} />
        <Route path=":id" element={<CustomerOrder />} />
        </Route>

        <Route path="/usrs" element={<UserManagement />}>
        <Route path=":id" element={<UserInfo />} />
        </Route>

        <Route path="/payments" element={<Payments />} />

        <Route path="/settings" element={<Settings />}>
          <Route index element={<Profile />} />
          <Route path="password" element={<Password />} />
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
