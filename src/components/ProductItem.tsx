import React, {useState} from 'react';
import {Card, Image, Box, Heading, Text, Button, Collapse} from 'native-base';

// Type definition for TypeScript
type productProps = {
  item: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    price: number;
  };
};

function ProductItem({item}: productProps) {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <>
      <Card
        bg="#fff"
        overflow="hidden"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        my="4"
        mx="4">
        <Image
          source={{uri: item.image}}
          alt={item.title}
          width={48}
          height={48}
          resizeMode="contain"
          mx="3"
        />
        <Box flex={1} p="3">
          <Heading size="sm" mb="2" color="coolGray.800">
            {item.title}
          </Heading>
          <Text color="coolGray.600" fontSize="sm">
            {item.price} $
          </Text>
          <Button onPress={handleToggleDescription} mt="2" rounded="full">
            {showDescription ? <Text>Hide</Text> : <Text>Show info</Text>}
          </Button>
        </Box>
      </Card>
      <Collapse isOpen={showDescription} m="5" my="2">
        <Text fontSize="xl">Description:</Text>
        <Box
          flex="1"
          width="140"
          height="6"
          alignItems="center"
          rounded="lg"
          bgColor="yellow.600"
          my="3">
          {item.category}
        </Box>
        <Text color="coolGray.600">{item.description}</Text>
      </Collapse>
    </>
  );
}

export default ProductItem;
