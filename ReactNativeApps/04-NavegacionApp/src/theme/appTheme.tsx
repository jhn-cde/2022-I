import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  globalMargin:{
    marginHorizontal: 20
  },
  title:{
    fontSize: 30,
    marginBottom: 10
  },
  botonGrande:{
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  botonGrandeText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  avatarContainer:{
    alignItems: 'center',
    marginTop: 20
  },
  avatar:{
    width: 150,
    height: 150,
  },
  menuContainer:{
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuBoton:{
    marginVertical: 10
  },
  menuTexto:{
    fontSize: 20
  },
  copyrightContainer:{
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    top: 10
  },
  copyrightText:{
    fontSize: 15
  }
})