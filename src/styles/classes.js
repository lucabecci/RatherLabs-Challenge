  
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    correct: {
        backgroundColor: theme.palette.primary.main
    },
    normal: {
        backgroundColor: theme.palette.primary
    },
    incorrect: {
        backgroundColor: theme.palette.secondary.main
    },
    clicked: {
        color: theme.palette.secondary.secondary
    },
    image: {
        [theme.breakpoints.down('xs')]:{
            height: '100%',
            width: '100%',
          },
        height: '20%',
        width: '20%',
        }
}));

export default useStyles;