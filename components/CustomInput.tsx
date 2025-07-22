import { Text, TextInput, View } from "react-native";
import { CustomInputProps } from "@/type";
import { useState } from "react";
import cn from "clsx";

const CustomInput = ({
  placeholder = "Enter text",
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = "default",
}: CustomInputProps) => {
  const [isFocused, setIsFcused] = useState(false);
  return (
    <View className={"w-full"}>
      <Text className={"label"}>{label}</Text>
      <TextInput
        className={cn(
          "input",
          isFocused ? "border-primary" : "border-gray-300",
        )}
        autoCapitalize={"none"}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={() => setIsFcused(true)}
        onBlur={() => setIsFcused(false)}
        placeholder={placeholder}
        placeholderTextColor={"#888"}
      />
    </View>
  );
};
export default CustomInput;
