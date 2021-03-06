import { makeStyles, withStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({

  appBar: {
    backgroundColor: '#363636',
    marginTop: '85vh',
    marginRight: '35%',
    height: '15vh',
    width: '66%',
    position: 'fixed',
    zIndex: 9999
  },

  toolbar: {
    marginTop: '1%',
    display: 'flex',
    flexDirection: 'row',
    zIndex: 999,
  },

  title: {
    margin: 20,
    fontSize: '1.6em',
    fontWeight: 'lighter'
  },

  '@media (max-width: 1400px)': {
    title: {
      fontSize: 20,
      padding: 5,
    },
  },


  '@media (max-width: 1305px)': {
    title: {
      padding: 2,
      margin: 10,
    },
  },

  '@media (max-width: 1215)': {
    appBar: {
      padding: 10
    }
  },

  '@media (max-width: 1024px)': {
    appBar: {
      marginTop: '82vh',
      height: '20vh',
      padding: 9
    },

  },

  '@media (max-width: 414px)': {
    appBar: {
      marginTop: '83vh',
      marginRight: '0%',
      height: 'auto',
      width: '100%',
      position: 'fixed',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999
    },
    title: {
      display: 'none'
    },

    linkContainer: {
      display: 'none'
    }
  },

  '@media (max-width: 375px)': {
    root: {

    },

    appBar: {
      marginTop: '75vh',
      height: '25vh',
      padding: 0

    },
    title: {
      fontSize: 18,
      padding: 2,
      margin: 5,
    },
  },
});