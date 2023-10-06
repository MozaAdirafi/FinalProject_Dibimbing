import { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommend() {
  const data = [
    {
      id: 1,
      image: Destination1,
      title: "Barcelona",
      subTitle: "Explore the vibrant streets of Barcelona, Spain.",
      cost: "$42,500",
      duration: "Approx 3-night trip",
    },
    {
      id: 2,
      image: Destination2,
      title: "Tokyo",
      subTitle: "Experience the bustling metropolis of Tokyo, Japan.",
      cost: "$65,800",
      duration: "Approx 4-night trip",
    },
    {
      id: 3,
      image: Destination3,
      title: "Sydney",
      subTitle: "Discover the beauty of Sydney, Australia's iconic city.",
      cost: "$55,200",
      duration: "Approx 3-night trip",
    },
    {
      id: 4,
      image: Destination4,
      title: "Rome",
      subTitle: "Step back in time and explore the history of Rome, Italy.",
      cost: "$48,900",
      duration: "Approx 2-night trip",
    },
    {
      id: 5,
      image: Destination5,
      title: "Santorini",
      subTitle: "Relax on the stunning beaches of Santorini, Greece.",
      cost: "$72,600",
      duration: "Approx 3-night trip",
    },
    {
      id: 6,
      image: Destination6,
      title: "New York City",
      subTitle: "Experience the energy of New York City, USA.",
      cost: "$62,000",
      duration: "Approx 4-night trip",
    },
  ];

  const packages = [
    "Weekend Getaway",
    "All-Inclusive Package",
    "Group Adventure",
    "Long-Term Exploration",
  ];

  const [active, setActive] = useState(1);
  
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Explore Our Top Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
                key={index}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination" key={destination.id}>
              <img className="destination-image" src={destination.image} alt={destination.title} />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="Service" />
                  <img src={info2} alt="Service" />
                  <img src={info3} alt="Service" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>Distance: 1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
    margin-bottom: 1rem;
  }
  .destination-image {
    width: 100%;
    height: 300px; 
    object-fit: cover; 
    border-radius: 1rem;
  }
  .packages {
    display: flex;
    justify-content: center;
    ul {
      display: flex;
      list-style-type: none;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
        background-color: rgba(131, 56, 236, 0.2);
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
        border-radius: 1rem;
      }
      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: rgba(77, 45, 219, 0.5);
            width: 2rem;
            padding: 0.3rem 0.4rem;
          }
        }
        h4 {
          color: #8338ec;
          font-weight: bold;
        }
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
