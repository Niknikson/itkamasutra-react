import React from 'react';
import s from './Post.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            
    },
  },
}));


const Post = (props) => {
    const classes = useStyles();
    return (

        <div className={s.item} >
            <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
            <div>{props.message}</div>
            <div>
                <button>Like</button>
                <span> {props.lickesCount}</span>
            </div>
        </div>


    );
}

export default Post;