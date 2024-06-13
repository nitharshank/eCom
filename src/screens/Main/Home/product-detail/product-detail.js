import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { fetchProductDetail } from '../../../../api/api-service';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../../../config/colors';
import { useLoader } from '../../../../provider/LoaderProvider';
import styles from './styles';

const DetailsScreen = ({ route, navigation }) => {

    const { productId } = route.params;
    const [product, setProduct] = useState({});
    const { setIsShowLoader } = useLoader();

    useEffect(() => {
        const fetchProductData = async () => {
            setIsShowLoader(true);
            await fetchProductDetail(productId, dataSuccess, dataError);
        };

        const dataSuccess = (productResp) => {
            console.log(JSON.stringify(productResp));
            setProduct(productResp);
            setIsShowLoader(false);
            // setArrayData(profileUserData(userResp))
        }

        const dataError = (error) => {
            setIsShowLoader(false);
            // TODO show error
        }

        fetchProductData();
    }, []);




    return (
        <View>
            <View style={styles.container}>
                <View style={styles.leftArrow}>
                    <Icon name='angle-left' size={50} color={COLORS.grey} />
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageInnerConatiner} source={product?.thumbnail ? { uri: product?.thumbnail } : require('../../../../assets/images/image_not_found.png')} />
                </View>
                <View style={styles.rightArrow}>
                    <Icon name='angle-right' size={50} color={COLORS.grey} />
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.productName}>{product?.title}</Text>
                <Text style={styles.productDescription}>{product?.description}</Text>
            </View>

            <View style={styles.priceContainer}>
                <View style={styles.priceLabel}>
                    <Text style={styles.productText}>Price</Text>
                </View>

                <View style={styles.priceLabel}>
                    <Text style={styles.priceValue}>{ `${product?.price} $` }</Text>
                </View>
            </View>

            <View style={styles.priceContainer}>
                <View style={styles.priceLabel}>
                    <Text style={styles.productText}>Feedback</Text>
                </View>

                <View style={styles.priceLabel}>
                    <Text style={styles.priceValue}>{ `${product?.price} $` }</Text>
                </View>
            </View>

        </View>
    );
}

export default DetailsScreen;