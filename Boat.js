import React from 'react';
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const showEnquiry = (name) => {
  const message = 'Thanks for your interest in the ' + name + '!';
  if (Platform.OS === 'web') {
    window.alert(message);
  } else {
    Alert.alert('Enquiry', message);
  }
};

const Boat = ({ number, name, description, picture }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrap}>
        <Image source={picture} style={styles.picture} resizeMode="cover" />

        <View style={styles.badgeRow}>
          <Text style={styles.numberBadge}>
            {number < 10 ? '0' + number : number}
          </Text>
          <Text style={styles.saleBadge}>FOR SALE</Text>
        </View>

        <View style={styles.nameBand}>
          <FontAwesome6 name="sailboat" size={18} color="#C9A227" />
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.footerRow}>
          <View style={styles.dealer}>
            <FontAwesome6 name="circle-check" solid size={14} color="#1F8A70" />
            <Text style={styles.dealerText}>Dealer certified</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => showEnquiry(name)}
          >
            <Text style={styles.buttonText}>ENQUIRE</Text>
            <FontAwesome6 name="arrow-right" size={12} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Boat;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 18,
    overflow: 'hidden',
    boxShadow: '0 6px 16px rgba(11, 31, 58, 0.12)',
  },
  imageWrap: {
    height: 230,
  },
  picture: {
    width: '100%',
    height: '100%',
  },
  badgeRow: {
    position: 'absolute',
    top: 12,
    left: 12,
    right: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numberBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    color: '#0B1F3A',
    fontSize: 13,
    fontWeight: '800',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    overflow: 'hidden',
  },
  saleBadge: {
    backgroundColor: '#C9A227',
    color: '#0B1F3A',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    overflow: 'hidden',
  },
  nameBand: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'rgba(11, 31, 58, 0.78)',
  },
  name: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  body: {
    padding: 16,
  },
  description: {
    fontSize: 14,
    color: '#3E4C5E',
    lineHeight: 21,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#E6ECF2',
  },
  dealer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dealerText: {
    color: '#1F8A70',
    fontSize: 13,
    fontWeight: '600',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#0B1F3A',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 9,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
});
