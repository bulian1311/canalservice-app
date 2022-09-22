import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 17,
    paddingVertical: 12,
    borderWidth: 4,
    borderColor: '#27569C',
    borderRadius: 4,
    backgroundColor: '#fff',

    // Тень Для Android
    elevation: 4,

    // Тень Для iOS
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});
