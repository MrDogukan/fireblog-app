import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, typography } from "@mui/system";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BlogCard = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Card
      sx={{ curser: "pointer", maxWidth: 345 }}
      onClick={() => (currentUser ? navigate("/details") : navigate("/"))}
    >
      <CardMedia
        component="img"
        height="140"
        width="350"
        image={null}
        alt={null}
      />
      <CardContent sx={{ padding: 0, width: "350px", whiteSpace: "nowrap" }}>
        <CardContent
          sx={{
            backgroundColor: "silver",
          }}
        >
          <Typography variant="h5" component="div">
            HEADER
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Date
          </Typography>
          <Box sx={{ textOverflow: "ellipsis", overflow: "hidden" }}>
            well meaning and kindly. bla bla bla bla bla uyyy aha
          </Box>
        </CardContent>
        <CardContent>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <AccountCircleIcon sx={{ marginRight: "0.5rem" }} /> ali@email.com
          </Typography>
        </CardContent>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          <Typography sx={{ marginLeft: "0.4rem" }}>61</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <ChatBubbleOutlineIcon />
          <Typography sx={{ marginLeft: "0.4rem" }}>61</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
