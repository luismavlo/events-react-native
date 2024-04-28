import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';


interface Props {
  title: string,
  image?: string,
  onPress: () => void,
}

export const CardCity = ({ title, image = 'https://picsum.photos/700', onPress }: Props) => (
  <Card style={{ marginBottom: 15 }} onPress={onPress}>
    <Card.Content >
      <Text variant="titleLarge" style={{ textAlign: 'center', marginBottom: 5 }}>{title}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: image }} />
  </Card>
);

