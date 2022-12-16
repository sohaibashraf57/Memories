import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  CardMedia,
  Typography,
} from "@mui/material";
import ThumbUpAlt from "@mui/icons-material/ThumbUpAlt";
import Delete from "@mui/icons-material/Delete";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../features/postSlice";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />

      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => {
            setCurrentId(post._id);
          }}
        >
          <MoreHoriz fontSize="default" />
        </Button>
      </div>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>

      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >
          <ThumbUpAlt fontSize="small" /> &nbsp; Like &nbsp; {post.likeCount}{" "}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(deletePost(post._id));
          }}
        >
          <Delete fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
