import * as React from 'react';
import {Card, Text} from 'react-native-paper';

const Cards = ({title, desc, img}) => (
  <Card>
    <Card.Content>
      <Card.Cover source={{uri: img}} />
      <Text variant="titleLarge">{title}</Text>
      <Text variant="bodyMedium">{desc}</Text>
    </Card.Content>
  </Card>
);

export default Cards;
