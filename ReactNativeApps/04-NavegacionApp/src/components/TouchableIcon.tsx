import { TouchableOpacity } from "react-native"
import Icon from '@expo/vector-icons/Ionicons';
import { colores } from "../theme/appTheme";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

interface Props {
  iconName: string
}

export const TouchableIcon = ({ iconName }: Props) => {

  const { changeFavIcon } = useContext(AuthContext)

  return(
    <TouchableOpacity
      onPress={() => changeFavIcon(iconName)}
    >
      <Icon name={iconName} size={50} color={colores.primary} />
    </TouchableOpacity>
  )
}