import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login"
import Orders from "./pages/Users";
import Activity from "./pages/activity/activity";
import ActivityItem from "./components/searchItem/ActivityItem";
import CreatePromo from "./pages/CreatePromo/CreatePromo";
import CreateCategory from "./pages/CreateCategory/CreateCategory";
import Category from "./pages/Category/category";
import CategoryItem from "./components/searchItem/CategoryItem";
import PromoItem from "./components/searchItem/PromoItem";
import Promo from "./pages/Promo/promo";
import UpdateCategory from "./pages/UpdateCategory/UpdateCategory";
import UpdatePromo from "./pages/UpdatePromo/UpdatePromo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<Orders/>}/>
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/tesactivity" element={<ActivityItem/>}/>
        <Route path="/createpromo" element={<CreatePromo/>}/>
        <Route path="/createcategory" element={<CreateCategory/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/tescategory" element={<CategoryItem/>}/>
        <Route path="/tespromo" element={<PromoItem/>}/>
        <Route path="/promo" element={<Promo/>}/>
        <Route path="/updatecategory/:id" element={<UpdateCategory/>}/>
        <Route path="/updatepromo/:id" element={<UpdatePromo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
