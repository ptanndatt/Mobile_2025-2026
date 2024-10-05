import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";

export default function Screen04({ navigation }) {

    

    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 2.99,
            rating: 4.5,
            mainImage: require('../assets/DATA/Container 7 (3).png'), // Hình ảnh chính
            thumbnailImages: [
                require('../assets/DATA/Container 7 (1).png'),
                require('../assets/DATA/Container 7 (2).png'),
                require('../assets/DATA/Container 7 (4).png'),
                require('../assets/DATA/Container 7.png'),

            ]
        },
        {
            id: 2,
            name: 'Product 2',
            price: 3.99,
            rating: 4.2,
            mainImage: require('../assets/DATA/Container 7 (2).png'),
            thumbnailImages: [
                require('../assets/DATA/Container 7 (3).png'),
                require('../assets/DATA/Container 7 (1).png'),
                require('../assets/DATA/Container 7 (4).png'),
                require('../assets/DATA/Container 7.png'),

            ]
        },
        {
            id: 3,
            name: 'Product 3',
            price: 5.99,
            rating: 4.8,
            mainImage: require('../assets/DATA/Container 7 (1).png'),
            thumbnailImages: [
                require('../assets/DATA/Container 7 (2).png'),
                require('../assets/DATA/Container 7 (4).png'),
                require('../assets/DATA/Container 7 (3).png'),
                require('../assets/DATA/Container 7.png'),

            ]
        },

        {
          id: 4,
          name: 'Product 4',
          price: 6.99,
          rating: 4.8,
          mainImage: require('../assets/DATA/Container 7 (1).png'),
          thumbnailImages: [
              require('../assets/DATA/Container 7 (2).png'),
              require('../assets/DATA/Container 7 (4).png'),
              require('../assets/DATA/Container 7 (3).png'),
              require('../assets/DATA/Container 7.png'),

          ]
      },
    ];

    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleThumbnailClick = (image) => {
        setSelectedProduct({ ...selectedProduct, mainImage: image });
    };

    const handleQuantityIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleQuantityDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <View style={{ padding: 5 ,height:'100%',overflow:'scroll',width:'100%'}}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="arrow-left" size={20} onPress={() => navigation.goBack()} />
                <Text style={{ fontWeight: '700', marginLeft: 20 }}>{selectedProduct.name}</Text>
            </View>

            <View style={{ alignItems:'center', marginVertical: 5 }}>
                <Image source={selectedProduct.mainImage} style={{ width: 300, height: 200 }} />
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                {selectedProduct.thumbnailImages.map((image, index) => (
                    <TouchableOpacity key={index} onPress={() => handleThumbnailClick(image)}>
                        <Image source={image} style={styles.thumbnail} />
                       
                    </TouchableOpacity>
                ))}
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <Text style={{ color: '#28bfcd', fontSize: 25, fontWeight: '800' }}>${selectedProduct.price}</Text>
                <View style={styles.promoContainer}>
                    <Text style={styles.promoText}>Buy 1 get 1</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{ fontWeight: '600', fontSize: 20 }}>{selectedProduct.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                    <Image source={require('../assets/DATA/Rating 3.png')} style={{ width: 20, height: 20 }} />
                    <Text>{selectedProduct.rating}</Text>
                </View>
            </View>

            <Text style={{ marginBottom: 10 }}>Size</Text>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                {['S', 'M', 'L', 'XL'].map((size) => (
                    <TouchableOpacity
                        key={size}
                        style={[
                            styles.sizeButton,
                            { backgroundColor: selectedSize === size ? '#28c5da' : 'transparent' }
                        ]}
                        onPress={() => setSelectedSize(size)}>
                        <Text>{size}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text>Quantity</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <TouchableOpacity onPress={handleQuantityDecrease} style={styles.quantityButton}>
                    <Text>-</Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 10 }}>{quantity}</Text>
                <TouchableOpacity onPress={handleQuantityIncrease} style={styles.quantityButton}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                <Text>Total</Text>
                <Text style={{ fontWeight: '700' }}>${(selectedProduct.price * quantity).toFixed(2)}</Text>
            </View>

            <TouchableOpacity style={styles.addToCartButton} onPress={()=>{alert("Thêm sản phẩm thành công")}}>
                <Text style={{ color: 'white' }}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    thumbnail: {
        // width: 150,
        // height: 50,
        marginHorizontal: 5,
        borderRadius: 10,
        borderWidth:'1px',
        borderColor:'black'
    },
    promoContainer: {
        // width: 100,
        // height: 30,
        backgroundColor: '#e3b2b9',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    promoText: {
        color: 'red',
        fontSize: 13,
    },
    sizeButton: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    quantityButton: {
        width: 40,
        height: 40,
        backgroundColor: '#dddd',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addToCartButton: {
       
        backgroundColor: '#24c3d9',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    }
})
