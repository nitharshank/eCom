import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { fetchProductDetail } from '../../../../api/api-service';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../../../config/colors';
import { useLoader } from '../../../../provider/LoaderProvider';
import { Button } from 'react-native-elements';
import { Rating } from 'react-native-elements';
import Slider from '@react-native-community/slider';
import styles from './styles';

const DetailsScreen = ({ route, navigation }) => {

    const { productId } = route.params;
    const [product, setProduct] = useState({});
    const { setIsShowLoader } = useLoader();
    const [selectedQty, setSelectedQty] = useState(0);

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

    const getSliderValue = (value) => {
        let roundedVal = value.toFixed(0);
        setSelectedQty(roundedVal);
    };

    const addToCart = async () => {

    };


    return (
        <View>
            <View style={styles.baseContainer}>
                <View style={styles.box1}>

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
                            <Text style={styles.priceValue}>{`${product?.price} $`}</Text>
                        </View>
                    </View>
                    <View style={styles.priceContainer}>
                        <View style={styles.priceLabel}>
                            <Text style={styles.productText}>Feedback</Text>
                        </View>

                        <View style={styles.priceLabel}>
                            <Rating
                                type='custom'
                                ratingColor='orange'
                                ratingBackgroundColor='white'
                                readonly
                                imageSize={22}
                                ratingCount={5}
                                startingValue={product?.rating}
                            />
                        </View>
                    </View>

                    <View style={styles.sliderContainer}>
                        <View style={styles.sliderText}>
                            <Text style={styles.productText}>0</Text>
                        </View>
                        <View style={styles.slider}>
                            <Slider
                                style={{ width: '90%', height: 40 }}
                                onSlidingComplete={getSliderValue}
                                minimumValue={0}
                                maximumValue={10}
                                minimumTrackTintColor={COLORS.blue}
                                maximumTrackTintColor="#000000"
                                thumbTintColor={COLORS.blue}
                            />
                        </View>
                        <View style={styles.sliderText}>
                            <Text style={styles.productText}>10</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.box3} >
                    <Button
                        buttonStyle={styles.addToCartBtnText}
                        onPress={addToCart}
                        title={`Add to Cart ( ${selectedQty} )`}
                        titleStyle={styles.loginBtnText}
                    />
                </View>
            </View>






        </View>
    );
}

export default DetailsScreen;