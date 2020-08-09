import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(240, 240, 240)',
    borderRadius: 20,
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 4,
  },
  inputContainer: {
    padding: 4,
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: 14,
    lineHeight: 16,
    color: 'grey',
    padding: 0,
    margin: 0,
    height: undefined,
  },
});
