import React, { useEffect, useState } from "react";
import { StyleSheet, Alert  } from 'react-native';
import { VStack, HStack, Divider, Text, Link, Image, ScrollView, Spinner, Pressable, Icon, IconButton } from 'native-base';
import { AntDesign, MaterialIcons } from '@expo/vector-icons'; 


const Home = (props) => {

  return (
      <ScrollView flex={1} _contentContainerStyle={{ px: "22px", w: "100%", }} >
        <VStack flex={1} space={12} my={5} py={5}>
          <Pressable onPress={(event) => { props.navigation.navigate('PostALoad'); }} >
          <VStack flex={1} style={styles.icon} >
            <Icon color='teal.800' size={100} as={<AntDesign name="profile"/>}  />
            <Text fontSize="xl">Load request list</Text>
          </VStack>
          </Pressable>
          <Pressable onPress={(event) => { props.navigation.navigate('PostALoad'); }} >
          <VStack flex={1} style={styles.icon}>
            <Icon color='teal.800' size={100} as={<AntDesign name="addfile"/>}  />
            <Text fontSize="xl">Post a load</Text>
          </VStack>
          </Pressable>
        </VStack>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center'
  },
});

export default Home;