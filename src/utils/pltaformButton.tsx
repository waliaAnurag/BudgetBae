import { isWeb} from '../utils/platform';
import {TouchableOpacity} from "react-native";

export const PlatformButton = () => {
  if (isWeb) {
    return <button>Web Button</button>;
  }
  return <TouchableOpacity>Native Button</TouchableOpacity>;
};