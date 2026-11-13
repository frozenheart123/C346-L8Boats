import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Boat from './Boat';

const boats = [
  {
    name: 'Sea Ray 500 Sundancer',
    description:
      'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
    picture: require('./img/sea_ray.jpg'),
  },
  {
    name: 'Four Winns Horizon 180',
    description:
      'A sporty look and refined details truly set the Horizon 180 above all others.',
    picture: require('./img/four_winns.jpg'),
  },
  {
    name: 'Flipper 640 ST',
    description:
      'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
    picture: require('./img/flipper.jpg'),
  },
  {
    name: 'Princess V48',
    description:
      'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.',
    picture: require('./img/princess.jpg'),
  },
  {
    name: 'Bayliner 175 Bowrider',
    description:
      'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
    picture: require('./img/bayliner.jpg'),
  },
  {
    name: 'Fairline Targa 47',
    description:
      'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
    picture: require('./img/fairline.jpg'),
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.brand}>
            <View style={styles.logo}>
              <FontAwesome6 name="anchor" size={20} color="#0B1F3A" />
            </View>
            <View>
              <Text style={styles.brandName}>GetABoat</Text>
              <Text style={styles.brandTag}>Authorized power boat dealer</Text>
            </View>
          </View>
          <View style={styles.salePill}>
            <Text style={styles.salePillText}>FOR SALE</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Featured Listings</Text>
          <View style={styles.countChip}>
            <FontAwesome6 name="ship" size={12} color="#0B1F3A" />
            <Text style={styles.countText}>{boats.length} boats</Text>
          </View>
        </View>

        {boats.map((boat, index) => (
          <Boat
            key={boat.name}
            number={index + 1}
            name={boat.name}
            description={boat.description}
            picture={boat.picture}
          />
        ))}

        <View style={styles.footer}>
          <FontAwesome6 name="water" size={16} color="#C9A227" />
          <Text style={styles.footerText}>Developed by NELSON (24039810)</Text>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F6',
  },
  header: {
    backgroundColor: '#0B1F3A',
    paddingTop: 56,
    paddingBottom: 22,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flexShrink: 1,
  },
  logo: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#C9A227',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  brandTag: {
    color: '#9FB3C8',
    fontSize: 13,
    marginTop: 2,
  },
  salePill: {
    borderWidth: 1.5,
    borderColor: '#C9A227',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  salePillText: {
    color: '#C9A227',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  list: {
    padding: 16,
    paddingBottom: 32,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0B1F3A',
  },
  countChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#DCE6F0',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  countText: {
    color: '#0B1F3A',
    fontSize: 13,
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  footerText: {
    color: '#5B6B7F',
    fontSize: 13,
  },
});
