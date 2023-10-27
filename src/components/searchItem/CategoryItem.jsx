import "./searchItem.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; 
import { Link } from "react-router-dom";


const BASE_URL = "https://travel-journal-api-bootcamp.do.dibimbing.id";
const API_KEY = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
const JWT_TOKEN_DELETE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k";
export const CATEGORY = { GET_ALL_CATEGORY: `${BASE_URL}/api/v1/categories` };
export const CONFIG = {
  headers: {
    apiKey: API_KEY,
  },
};

export const DELETE_CONFIG = {
  headers: {
    apiKey: API_KEY,
    Authorization:`Bearer ${JWT_TOKEN_DELETE}`
  },
};

const CategoryItem = () => {
  const [CategoryData, setCategoryData] = useState([]);
  
  const fetchCategory = async () => {
    try {
      const response = await axios.get(CATEGORY.GET_ALL_CATEGORY, CONFIG);
      setCategoryData(response.data.data);
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);


  const handleDeleteCategory = async (categoryId) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/v1/delete-category/${categoryId}`,
        DELETE_CONFIG
      );
      if (response.status === 200) {
        window.location.reload()
      } else {
        console.error("Category deletion failed:", response.data);
      }
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };


  return (
    <div className="activityItemList">
      {CategoryData.map((category, index) => (
        <div className="searchItem" key={index}>
          <img src={category.imageUrl} alt="" className="siImg" />
          <div className="siDesc">
            <h1 className="siTitle">{category.name}</h1>
            <span className="siTaxiOp">Available</span>
            <span className="siSubtitle">This is a category on this website</span>
            <span className="siFeatures">{category.features}</span>
            <span className="siCancelOp">{category.cancelOp}</span>
            {/* <span className="siCancelOpSubtitle">{category.cancelOpSubtitle}</span> */}
          </div>
          <div className="siDetails">
            <div className="siRating">
              {/* <span>Rating: {category.rating}</span> */}
            </div>
            <div className="siDetailTexts">
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link to={`/updatecategory/${category.id}`}>
            <FaEdit style={{ marginRight: "10px", cursor: "pointer" }} />
            </Link>
            <FaTrash
            style={{ cursor: "pointer" }}
            onClick={() => handleDeleteCategory(category.id)} />
          </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItem;
