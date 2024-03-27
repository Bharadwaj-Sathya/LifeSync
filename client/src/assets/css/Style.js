import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../constants/Colors";

const { width } = Dimensions.get('screen');

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
  },

  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23,
  },

  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },

  categoryContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  iconContainer: {
    height: 80,
    width: 80,
    margin: 5,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  iconCategoryText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primary,
  },

  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
});

export default style;