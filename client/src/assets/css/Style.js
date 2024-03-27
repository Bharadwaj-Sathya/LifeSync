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

  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
  },

  card: {
    flex: 1,
    width: 80,
    height: 80,
    margin: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E0E0E0',
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center'
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