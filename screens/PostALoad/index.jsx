import React, { Component, useState } from 'react';
import { Box, HStack, Icon, Text, VStack, StatusBar, Avatar, Image, Input, ScrollView, Pressable, Center, Divider, Button, IconButton, Stack, Link, Hidden, Menu, Heading, Select, FormControl} from "native-base";
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, Ionicons, } from "@expo/vector-icons";

export default function (props) {
  // const router = useRouter(); //use incase of Nextjs
  const [transportList, setTransportList] = useState([ { NAME: 'Farm', ID: 'FARM' }, {NAME: 'Mandi', ID: 'MANDI' } ]);
  let [transportFrom, setTransportFrom] = useState("");
  let [transportTo, setTransportTo] = useState("");
  let [transportationDisplay, setTransportationDisplay] = useState(true);
  let [loadDetailsDisplay, setLoadDetailsDisplay] = useState(false);
  let [loadDetailsDestinationDisplay, setLoadDetailsDestinationDisplay] = useState(false);

  return (
    <ScrollView flex={1} _contentContainerStyle={{ px: "20px", w: "100%", }} >
      {transportationDisplay ? (
        <VStack flex={1} my={5}>
          <VStack flex={1} alignItems="center" space={5}>
            <Heading fontSize="xl" color="primary.900">Transportation</Heading>
            <FormControl isRequired >
              <FormControl.Label color="#2DD4BF">Transport from:</FormControl.Label>
              <Select placeholder="Transport from" onValueChange={itemValue => setTransportFrom(itemValue)} selectedValue={transportFrom} >
                {transportList.map((item) => <Select.Item label={item.NAME} value={item.ID} key={item.ID} />)}
              </Select>
            </FormControl>
            <FormControl isRequired >
              <FormControl.Label color="#2DD4BF">Transport to:</FormControl.Label>
              <Select placeholder="Transport from" onValueChange={itemValue => setTransportTo(itemValue)} selectedValue={transportTo} >
                {transportList.map((item) => <Select.Item label={item.NAME} value={item.ID} key={item.ID} />)}
              </Select>
            </FormControl>
          </VStack>
          <VStack my={5} space={2}>
            <Button mt="5" size="md" borderRadius="4" _text={{ fontWeight: "medium", }} _light={{ bg: "primary.900", }} _dark={{ bg: "primary.700", }} 
              onPress={() => { setTransportationDisplay(false); setLoadDetailsDisplay(true); }}
            >
              Next
            </Button>
          </VStack>
        </VStack>
      ) : loadDetailsDisplay ? (
        <VStack flex={1} my={5}>
          <VStack flex={1} alignItems="center" space={5}>
            <Heading fontSize="xl" color="primary.900">Load details - Source</Heading>
            <FormControl isRequired >
              <FormControl.Label color="#2DD4BF">Source Pincode:</FormControl.Label>
              <Input variant="underlined" placeholder="Enter Source pincode" />
            </FormControl>
            <FormControl isRequired >
              <FormControl.Label color="#2DD4BF">Source State:</FormControl.Label>
              <Input variant="underlined" placeholder="Enter Source State" />
            </FormControl>
            <FormControl isRequired >
              <FormControl.Label color="#2DD4BF">Source District:</FormControl.Label>
              <Input variant="underlined" placeholder="Enter Source District" />
            </FormControl>
            <FormControl isRequired >
              <FormControl.Label color="#2DD4BF">Source Block/Tehsil:</FormControl.Label>
              <Input variant="underlined" placeholder="Enter Source District" />
            </FormControl>
            <FormControl isRequired >
              <FormControl.Label color="#2DD4BF">Source Village:</FormControl.Label>
              <Input variant="underlined" placeholder="Enter Source Village" />
            </FormControl>
            <FormControl isRequired >
              <FormControl.Label color="#2DD4BF">Source Address:</FormControl.Label>
              <Input variant="underlined" placeholder="Enter Source Address" />
            </FormControl>
          </VStack>
          <VStack my={5} space={2}>
            <Button mt="5" size="md" borderRadius="4" _text={{ fontWeight: "medium", }} _light={{ bg: "primary.900", }} _dark={{ bg: "primary.700", }}
            onPress={() => { setLoadDetailsDisplay(false); setLoadDetailsDestinationDisplay(true); }} 
            >
              Next
            </Button>
          </VStack>
        </VStack> 
      ) : loadDetailsDestinationDisplay ? (
        <VStack flex={1} my={5}>
          <VStack flex={1} alignItems="center" space={5}>
            <Heading fontSize="xl" color="primary.900">Load details - Destination</Heading>
            <FormControl isRequired >
              <FormControl.Label color="#2DD4BF">Destination Pincode:</FormControl.Label>
              <Input variant="underlined" placeholder="Enter Destination pincode" />
            </FormControl>
            <FormControl isRequired >
              <FormControl.Label color="#2DD4BF">Destination State:</FormControl.Label>
              <Input variant="underlined" placeholder="Enter Destination State" />
            </FormControl>
            <FormControl isRequired >
              <FormControl.Label color="#2DD4BF">Destination District:</FormControl.Label>
              <Input variant="underlined" placeholder="Enter Destination District" />
            </FormControl>
            <FormControl isRequired >
              <FormControl.Label color="#2DD4BF">Destination Block/Tehsil:</FormControl.Label>
              <Input variant="underlined" placeholder="Enter Destination District" />
            </FormControl>
            <FormControl isRequired >
              <FormControl.Label color="#2DD4BF">Destination Village:</FormControl.Label>
              <Input variant="underlined" placeholder="Enter Destination Village" />
            </FormControl>
            <FormControl isRequired >
              <FormControl.Label color="#2DD4BF">Destination Address:</FormControl.Label>
              <Input variant="underlined" placeholder="Enter Destination Address" />
            </FormControl>
          </VStack>
          <VStack my={5} space={2}>
            <Button mt="5" size="md" borderRadius="4" _text={{ fontWeight: "medium", }} _light={{ bg: "primary.900", }} _dark={{ bg: "primary.700", }} 
            >
              Next
            </Button>
          </VStack>
        </VStack> 
      ) : (<></>)}
    </ScrollView>
  );
}

