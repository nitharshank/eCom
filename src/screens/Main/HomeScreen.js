import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchProductList } from '../../api/api-service';

export default function HomeScreen({ navigation }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            await fetchProductList(dataSuccess, dataError);
        };

        const dataSuccess = (products) => {
            setProducts(products);
        }

        const dataError = (error) => {
            // TODO show error
        }
    
        fetchProducts();
      }, []);




    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
        </View>
    );
}
