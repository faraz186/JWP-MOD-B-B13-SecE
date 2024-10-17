import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Cards from '../components/Cards';

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://fakestoreapi.com/products');

    const response = await data.json();

    setProductsData(response);
  };

  return (
    <ScrollView>
      <View>
        <Text>Products</Text>

        {productsData.map((e, i) => {
          return <Cards title={e.title} desc={e.description} img={e.image} />;
        })}
      </View>
    </ScrollView>
  );
};

export default Products;
