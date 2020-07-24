import React from 'react';
import {
  IconAllBooks,
  IconWishlist,
  IconAllBooksActive,
  IconWishlistActive,
} from '../assets';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const TabItem = ({title, isFocused, options, onPress, onLongPress}) => {
  const label = title === 'Home' ? 'All Books' : title;
  const Icon = () => {
    if (label === 'All Books') {
      return isFocused ? (
        <IconAllBooksActive width={24} height={32} />
      ) : (
        <IconAllBooks width={24} height={32} />
      );
    }

    if (label === 'Wishlist') {
      return isFocused ? (
        <IconWishlistActive width={24} height={32} />
      ) : (
        <IconWishlist width={24} height={32} />
      );
    }

    return isFocused ? (
      <IconAllBooksActive width={24} height={32} />
    ) : (
      <IconAllBooks width={24} height={32} />
    );
  };

  return (
    <TouchableOpacity
      style={styles.container}
      accessibilityRole="button"
      accessibilityStates={isFocused ? ['selected'] : []}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.label(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  label: (isFocused) => ({
    color: isFocused ? '#3BB8E0' : '#757575',
    marginTop: 4,
  }),
});
