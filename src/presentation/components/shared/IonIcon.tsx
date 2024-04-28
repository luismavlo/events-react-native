import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  size?: number;
  name: string;
  color?: string;
}

export const IonIcon = ({ name, size = 20, color = 'black' }: Props) => {
  return (
    <Icon name={name} size={size} color={color} />
  )
}