import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function InsetList(props) {
  const {classes} = props;
  return (
    <Typography align="right">
      <div className={classes.root}>
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText inset
primary="Chelsea Otakan" />
          </ListItem>
          <ListItem button>
            <ListItemText inset
primary="Eric Hoffman" />
          </ListItem>
        </List>
      </div>
    </Typography>
  );
}

InsetList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetList);