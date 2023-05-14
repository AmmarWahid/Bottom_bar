import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import Home from '../Tabscreens/Home';
import Search from '../Tabscreens/Search';
import Wish from '../Tabscreens/Wishlist';
import Profile from '../Tabscreens/Profile';
const Bottom = () => {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      {selected === 0 ? (
        <Home />
      ) : selected === 1 ? (
        <Search />
      ) : selected === 2 ? (
        <Wish />
      ) : selected === 3 ? (
        <Profile />
      ) : (
        <Home />
      )}
      <View style={styles.contain}>
        <TouchableOpacity onPress={() => setSelected(0)}>
          <FontAwesome
            name="home"
            size={35}
            color={selected === 0 ? 'lightgray' : 'gray'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected(1)}>
          <FontAwesome
            name="search"
            size={30}
            color={selected === 1 ? 'lightgray' : 'gray'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected(2)}>
          <FontAwesome
            name="opencart"
            size={30}
            color={selected === 2 ? 'lightgray' : 'gray'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected(3)}>
          <FontAwesome
            name="user-o"
            size={30}
            color={selected === 3 ? 'lightgray' : 'gray'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contain: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    elevation: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    borderTopWidth: 1,
    borderColor: 'green',
  },
});
export default Bottom;
