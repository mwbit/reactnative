import { StyleSheet } from 'react-native';
import { colors } from '../../style/';

const styles = StyleSheet.create({
  container: {
     backgroundColor: colors.primary,
     height: 60,
     flexDirection: 'row',
     justifyContent: 'center',
     padding:15  
     //alignItems: 'center',
  },

  icon: {
    //color: colors.primary,
  },

  title: {
    color: 'white',
    fontWeight: 'bold', 
    fontSize: 20,
  
  },
});

export default styles;