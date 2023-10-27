import { useState, useEffect } from 'react';
import axios from 'axios';
import './orders.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

const BASE_URL = "https://travel-journal-api-bootcamp.do.dibimbing.id";
const API_KEY = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
const JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k";

export const USERS = { GET_ALL_USERS: `${BASE_URL}/api/v1/all-user` };
export const USER_CONFIG = {
  headers: {
    apiKey: API_KEY,
    Authorization: `Bearer ${JWT_TOKEN}`,
  },
};

function Orders() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const pageSize = 5;

  const fetchUserData = async () => {
    try {
      const response = await axios.get(USERS.GET_ALL_USERS, USER_CONFIG);
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);


  const totalPages = Math.ceil(users.length / pageSize);

  const visibleUsers = users.slice((page - 1) * pageSize, page * pageSize);

  const __handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const __handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className='dashboard-content'>
      <Navbar />
      <Header type="list" />

      <div className='dashboard-content-container'>
        <div className='dashboard-content-header'>
          <h2>Users List</h2>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Profile Picture</th>
              <th>Phone Number</th>
            </tr>
          </thead>

          {visibleUsers.length !== 0 ? (
            <tbody>
              {visibleUsers.map((user, index) => (
                <tr key={index}>
                  <td><span>{user.id}</span></td>
                  <td><span>{user.name}</span></td>
                  <td><span>{user.email}</span></td>
                  <td><span>{user.role}</span></td>
                  <td>
                    <div>
                      {user.profilePictureUrl !== '-' ? (
                        <img
                          src={user.profilePictureUrl}
                          className='dashboard-content-avatar'
                          alt={user.name}
                        />
                      ) : null}
                    </div>
                  </td>
                  <td><span>{user.phoneNumber}</span></td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>

        {visibleUsers.length !== 0 ? (
          <div className='dashboard-content-footer'>
            <button onClick={__handlePreviousPage} disabled={page === 1}>
              Previous
            </button>
            <button onClick={__handleNextPage} disabled={page === totalPages}>
              Next
            </button>
          </div>
        ) : (
          <div className='dashboard-content-footer'>
            <span className='empty-table'>No data</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
