import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    button: {
        margin: theme.spacing(2),
        '&:hover': {
            color: '#fff'
        }
    }
}))