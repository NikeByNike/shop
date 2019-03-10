import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

import './card.css';
import * as cartActions from "../../actions/cartActions";
import { connect } from "react-redux";

function MediaCard(props) {
  const { item } = props;
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className="media"
          image={item.img}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.text}
          </Typography>
          <Typography component="p">
            {item.mainText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => props.setCartItem({id: item.id, count: 1})}>
          Добавить в корзину
        </Button>
      </CardActions>
    </Card>
  );
}

const mapDispatchToProps = dispatch => ({
  setCartItem: item => dispatch(cartActions.setCartItem(item))
});

export default  connect(
  null,
  mapDispatchToProps
)(MediaCard);