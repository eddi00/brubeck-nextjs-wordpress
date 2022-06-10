import React from "react";
import { useSelector } from "react-redux";
import FavoriteItemWrapper from "./FavoriteItem/FavoritesItem.wrapper";
import { Layout } from "./Favorites.styles";

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.favoriteItems);

  return (
    <Layout>
      <h2>Понравившийся товары</h2>
      {Object.keys(favorites).length > 0 ? (
        <>
          {Object.keys(favorites).map((item, index) => (
            <FavoriteItemWrapper id={item} key={index} index={index} />
          ))}
        </>
      ) : (
        <h4>У вас нет понравившийся товары.</h4>
      )}
    </Layout>
  );
};

export default Favorites;
