
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function EssayProject() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <h1>Essay Project</h1>
        <p>An essay on a chosen topic.</p>
      </main>
    </div>
  );
}