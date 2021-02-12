import React from 'react';
import axios from 'axios';

const Home = ({ restaurants, error }) => {
    if (error) {
        return (
            <p>An error occurred: {error.message}</p>
        )
    }
  return (
    <div>
      <h1>This is a new NextJS App created by hand.</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get('http://localhost:1337/restaurants');
    const restaurants = res.data;
    return { restaurants };
  } catch (error) {
    return { error };
  }
};

export default Home;
