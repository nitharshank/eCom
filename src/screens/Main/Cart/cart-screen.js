import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { Constant } from '../../../common/constant';
import { useIsFocused } from '@react-navigation/native';
import styles from './styles';

export default function CartScreen({ navigation }) {

    const isFocused = useIsFocused();
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {

        const getCartItems = async () => {
            const cartItems = await AsyncStorage.getItem(Constant.CART_ITEMS);
            const itemArray = JSON.parse(cartItems);
            setCartItems(itemArray)
        };

        if (isFocused) {
            getCartItems();
        }
    }, [isFocused]);

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.imageContainer} >
                    <Image style={styles.itemImage} source={cartItems[0]?.image ? { uri: cartItems[0]?.image } : require('../../../assets/images/image_not_found.png')} />
                </View>
                <View style={styles.detailContainer} >
                    <Text style={styles.productTitle} numberOfLines={1}>{`${cartItems[0]?.title}`}</Text>
                    <Text style={styles.quantityText} numberOfLines={1}>{`Quantity: ${cartItems[0]?.quantity}`}</Text>
                    <Text style={styles.deleteText} numberOfLines={1}>Delete</Text>
                </View>
                <View style={styles.priceContainer} >
                    <Text style={styles.productTitle} numberOfLines={1}>{`${cartItems[0]?.price} $`}</Text>
                </View>
            </View>
        </View>
    );
}