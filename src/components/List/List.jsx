import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [click, setClick] = React.useState(false);
  

  const handleClick = () => {
    setOpen(!open);
    };
  const handleClickSub = () => {
      setClick(!click);
    };
    

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
       <ListItem button onClick={handleClick}>
        <ListItemText primary="Всі категорії" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItem button className={classes.nested} onClick={handleClickSub}>
                <ListItemText primary="Нерухомість" />
                {click ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
                
        </List>
      </Collapse>
          {/* --- */}
          {click && <div style={{marginLeft:20}}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
            <ListItemText primary="Квартири" /></ListItem>
            <ListItem button className={classes.nested}>
            <ListItemText primary="Будинки" /></ListItem>
            <ListItem button className={classes.nested}>
            <ListItemText primary="Апартаменти" /></ListItem>
            <ListItem button className={classes.nested}>
            <ListItemText primary="Кімнати" /></ListItem>
        </List>
      </Collapse>
          </div>}
      
    </List>
  );
}