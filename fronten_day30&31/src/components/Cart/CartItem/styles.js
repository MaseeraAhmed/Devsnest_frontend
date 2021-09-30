import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 140,
    width: 140,
    marginRight: 10,
    marginTop: 10,
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '1px solid',
  },
}));
