import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    fontSize: 13,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    width: "90%",
    fontFamily: "Regular",
    color: 'black',
    paddingVertical: 5,
  },
  errorContainer: {
    flex: 1,
    marginVertical: 5,
  },
  errorMessage: {
    fontSize: 12,
    fontFamily: "Regular",
    paddingVertical: 5,
    color: 'red',
  },
});