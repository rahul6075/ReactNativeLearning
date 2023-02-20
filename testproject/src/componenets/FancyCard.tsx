import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView,
} from 'react-native';
import React from 'react';

export default function FancyCard() {
  const cardData = [
    {
      id: 1,
      title: 'Cafe Coffee Day',
      img: require('../assets/img2.webp'),
      locaton: 'Delhi',
      description:
        'It is caffae with free internet and Amazing Coffee with different flavours.',
      time: '2 hours away',
    },
    {
      id: 2,
      title: 'Cafe Coffee Day',
      img: require('../assets/img3.jpg'),
      locaton: 'Delhi',
      description:
        'It is caffae with free internet and Amazing Coffee with different flavours.',
      time: '2 hours away',
    },
    {
      id: 3,
      title: 'Cafe Coffee Day',
      img: require('../assets/img3.jpg'),
      locaton: 'Delhi',
      description:
        'It is caffae with free internet and Amazing Coffee with different flavours.',
      time: '2 hours away',
    },
    {
      id: 4,
      title: 'Cafe Coffee Day',
      img: require('../assets/img3.jpg'),
      locaton: 'Delhi',
      description:
        'It is caffae with free internet and Amazing Coffee with different flavours.',
      time: '2 hours away',
    },
  ];
  const openwebsite = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <ScrollView horizontal={true} style={styles.scrollcontainer}>
        {cardData.map(item => {
          return (
            <View style={[styles.card, styles.cardElevated]} key={item.id}>
              <Image source={item.img} style={styles.cardimg} />
              <View style={styles.cardbody}>
                <View style={styles.cardheader}>
                  <Text style={styles.cardtitle}>{item.title}</Text>
                  <Text style={styles.cardlabel}>{item.locaton}</Text>
                </View>

                <Text style={styles.description} numberOfLines={4}>
                  {item.description}
                </Text>
                <View style={styles.cardfooter}>
                  <TouchableOpacity
                    style={styles.cardbutton}
                    onPress={() =>
                      openwebsite(
                        'https://blog.logrocket.com/create-style-custom-buttons-react-native/',
                      )
                    }>
                    <Text>Read More..</Text>
                  </TouchableOpacity>
                  <Text>{item.time}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'teal',
    fontSize: 28,
    fontWeight: '700',
    paddingHorizontal: 8,
  },
  scrollcontainer: {},
  card: {
    flex: 1,
    shadowOpacity: 2,
    borderRadius: 20,
    width: 350,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardimg: {
    height: 180,
    width: 350,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardbody: {
    padding: 5,
    marginBottom: 5,
  },
  cardheader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardtitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardlabel: {
    backgroundColor: 'silver',
    fontSize: 10,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 15,
    color: 'black',
  },
  description: {
    marginVertical: 5,
    letterSpacing: 0.5,
  },
  cardfooter: {
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginRight: 8,
    alignItems: 'center',
  },
  cardbutton: {
    padding: 8,
  },
});
