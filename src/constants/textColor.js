import { makeStyles } from '@material-ui/styles/'

export const textStyles = makeStyles({

    linkText: {
        color: 'cyan',
        textDecoration: 'none',
        width: 90,
        textTransform: 'none',
        zIndex: 999
    },

    redtext: {
        color: '#F8333C',
    },

    yellowText: {
        color: 'yellow',
    },

    orangeText: {
        color: 'orange',
    },

    greenText: {
        color: '#44AF69',
    },

    blueText: {
        color: '#00b4d8'
    },

    totalsText: {
        fontWeight: 'lighter',
        marginLeft: '4.5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        zIndex: 999,
        flexWrap: 'wrap'
    },

    '@media (max-width: 1400px)': {
        title: {
            fontSize: '3.2em',
            padding: 5
        },

        toolbar: {
            padding: 5,
        },
    },

    '@media (max-width: 1024px)': {
        totalsText: {
            fontWeight: 'lighter',
            marginLeft: '4.5%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },
    },

    '@media (max-width: 414px)': {
        totalsText: {
            fontWeight: 'lighter',
            marginLeft: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '5%',
            zIndex: 999
        },
        linkText: {
            color: 'cyan',
            textDecoration: 'none',
            textTransform: 'none',
            width: 90,
            zIndex: 9999,
        },
    },

})
