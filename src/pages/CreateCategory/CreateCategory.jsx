import { useState } from "react";
import "../CreatePromo/CreatePromo.css"
import InputBox from "../../components/InputBox/InputBox";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const BASE_URL = "https://travel-journal-api-bootcamp.do.dibimbing.id";
const API_KEY = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
const JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k";

const PROMO_URL = `${BASE_URL}/api/v1/create-category`;
const PROMO_CONFIG = {
  headers: {
    apiKey: API_KEY,
    Authorization: `Bearer ${JWT_TOKEN}`,
  },
};

const CreateCategory = () => {
  const navigate = useNavigate()
  const [promoData, setPromoData] = useState({
    name: "",
    imageUrl: "",
  });
  console.log(promoData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPromoData({
      ...promoData,
      [name]: value,
    });
  };

  const handleCreatePromo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(PROMO_URL, promoData, PROMO_CONFIG);

      if (response.status === 200) {
        navigate("/category")
        console.log("category created successfully");
        console.log(response.data);
      } else {
        alert("Promo creation failed: " + response.data.message);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Promo creation error: ", error);
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="container">
        <form onSubmit={handleCreatePromo} className="custom-form">
          <h1 className="create-promo-heading">Create Category</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Title</label>
              <InputBox
                type="text"
                name="name"
                placeholder="Promo Title"
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
            <button className="formBtn">Create Category</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCategory;
