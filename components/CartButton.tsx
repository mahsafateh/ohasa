import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { images } from "@/constants";

const CartButton = () => {
  const totalItem = 11;
  return (
    <TouchableOpacity className={"cart-btn"}>
      <Image source={images.bag} className={"size-5"} resizeMode={"contain"} />
      {
        totalItem > 0 && (
          <View className={'cart-badge'}>
            <Text className={'small-bold text-white'}>{totalItem}</Text>
          </View>
        )
      }
    </TouchableOpacity>
  );
};
export default CartButton;
