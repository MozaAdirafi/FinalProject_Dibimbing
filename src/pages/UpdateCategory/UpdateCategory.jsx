import { useState, useEffect } from "react";
import "../CreatePromo/CreatePromo.css";
import InputBox from "../../components/InputBox/InputBox";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://travel-journal-api-bootcamp.do.dibimbing.id";
const API_KEY = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
const JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k";
const UPDATE_CATEGORY_URL = `${BASE_URL}/api/v1/update-category`;

const UPDATE_CATEGORY_CONFIG = {
  headers: {
    apiKey: API_KEY,
    Authorization: `Bearer ${JWT_TOKEN}`,
  },
};

const UpdateCategory = () => {
  const navigate = useNavigate();
  const [promoData, setPromoData] = useState({});

  const pathname = window.location.pathname;
  const pathParts = pathname.split("/");
  const categoryId = pathParts[2];

  useEffect(() => {
    // Fetch the existing category data based on categoryId and update the promoData state
    axios.get(`${BASE_URL}/api/v1/category/${categoryId}`, UPDATE_CATEGORY_CONFIG)
      .then((response) => {
        const categoryData = response.data.data;
        setPromoData({
          name: categoryData.name,
          imageUrl: categoryData.imageUrl,
        });
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });
  }, [categoryId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPromoData({
      ...promoData,
      [name]: value,
    });
  };

  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${UPDATE_CATEGORY_URL}/${categoryId}`,
        promoData,
        UPDATE_CATEGORY_CONFIG
      );
      console.log(promoData)
      if (response.status === 200) {
        navigate("/category")
        console.log("Category updated successfully");
        console.log(response.data);
      } else {
        alert("Category update failed: " + response.data.message);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Category update error: ", error);
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="container">
        <form onSubmit={handleUpdateCategory} className="custom-form">
          <h1 className="create-promo-heading">Update Category</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Title</label>
              <InputBox
                type="text"
                name="name"
                placeholder="Category Title"
                value={promoData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>Image URL</label>
              <InputBox
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                value={promoData.imageUrl}
                onChange={handleInputChange}
              />
            </div>
            <button className="formBtn">Update Category</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategory;
