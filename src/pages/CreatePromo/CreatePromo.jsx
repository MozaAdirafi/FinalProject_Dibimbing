import { useState } from "react";
import "./CreatePromo.css";
import InputBox from "../../components/InputBox/InputBox";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_URL = "https://travel-journal-api-bootcamp.do.dibimbing.id";
const API_KEY = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
const JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k";

const PROMO_URL = `${BASE_URL}/api/v1/create-promo`;
const PROMO_CONFIG = {
  headers: {
    apiKey: API_KEY,
    Authorization: `Bearer ${JWT_TOKEN}`,
  },
};

const CreatePromo = () => {
  const navigate = useNavigate()
  const [promoData, setPromoData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    terms_condition: "",
    promo_code: "",
    promo_discount_price: 0, // Initialize with 0
    minimum_claim_price: 0, // Initialize with 0
  });
  console.log(promoData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPromoData({
      ...promoData,
      [name]: name === "promo_discount_price" || name === "minimum_claim_price" ? parseFloat(value) : value,
    });
  };

  const handleCreatePromo = async (e) => {
    e.preventDefault();
    // You can add data validation here if needed
    try {
      const response = await axios.post(PROMO_URL, promoData, PROMO_CONFIG);

      if (response.status === 200) {
        navigate("/promo")
        console.log("Promo created successfully");
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
          <h1 className="create-promo-heading">Create Promo</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Title</label>
              <InputBox
                type="text"
                name="title"
                placeholder="Promo Title"
                value={promoData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>Description</label>
              <InputBox
                name="description"
                placeholder="Promo Description"
                value={promoData.description}
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
            <div className="field">
              <label>Terms & Conditions</label>
              <InputBox
                name="terms_condition"
                placeholder="Terms & Conditions"
                value={promoData.terms_condition}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>Promo Code</label>
              <InputBox
                type="text"
                name="promo_code"
                placeholder="Promo Code"
                value={promoData.promo_code}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>Promo Discount Price</label>
              <InputBox
                type="number"
                name="promo_discount_price"
                placeholder="Promo Discount Price"
                value={promoData.promo_discount_price}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>Minimum Claim Price</label>
              <InputBox
                type="number"
                name="minimum_claim_price"
                placeholder="Minimum Claim Price"
                value={promoData.minimum_claim_price}
                onChange={handleInputChange}
              />
            </div>
            <button className="formBtn">Create Promo</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePromo;
