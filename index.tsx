import { Image, StyleSheet, Platform, SafeAreaView,ScrollView } from 'react-native';
import Pokemancard from '../pokemancard';

export default function HomeScreen() {
  const charmanderData ={
    name : "CHARMANDER",
    image : require("../../assets/images/charmander.png"),
    type: "Fire",
    hp:39,
    moves : ["Scratch","Ember","Growl","Leer"],
    weakness:["Water","Rock"],
  };

  const squirtleData = {
    name: "SQUIRTLE",
    image : require("../../assets/images/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weakness: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "BULBASAUR",
    image : require("../../assets/images/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weakness: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "PIKACHU",
    image : require("../../assets/images/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weakness: ["Ground"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Pokemancard {...pikachuData} />
      <Pokemancard {...charmanderData} />
      <Pokemancard {...squirtleData} />
      <Pokemancard {...bulbasaurData} />
      </ScrollView>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#f5f5f5",
    paddingTop: Platform.OS === 'android'?25:0,
  }
})

