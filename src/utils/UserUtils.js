import AsyncStorage from '@react-native-community/async-storage';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const isLoggedIn = async () => {
  try {
    await delay(200);
    let isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
  } catch (err) {
    return false;
  }
};

export const setLoggedIn = async () => {
  await delay(200);
  await AsyncStorage.setItem('isLoggedIn', 'true');
};

export const logout = async () => {
  await delay(500);
  await AsyncStorage.removeItem('isLoggedIn');
};
