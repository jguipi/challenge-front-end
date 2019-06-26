import React from "react";
import {
  Button,
  Paper,
  Grid,
  Typography,
  Container
} from "@material-ui/core";
import { Divider, RadioGroupButton } from "./components/index";
import { clothDescriptiton, clothSize } from "./helpers/clothInfo";

class App extends React.Component {
  state = {
    activeImages: "https://cdn.shopify.com/s/files/1/2592/7300/products/otkwave_720x.jpg",
    images: [
      "https://cdn.shopify.com/s/files/1/2592/7300/products/otkwave_720x.jpg",
      "https://cdn.shopify.com/s/files/1/2592/7300/products/collantvagues_720x.jpg",
      "https://cdn.shopify.com/s/files/1/2592/7300/products/9_720x.jpg"
    ],
    radioValue: "Small"
  };

  render() {
    const { activeImages, radioValue } = this.state;
    return (
      <Container maxWidth="xl">
        <Grid container component="main" style={styles.root}>
          <Grid container style={styles.root}>
            <Grid item xs={12} sm={4} md={4} style={styles.root}>
              <img src={activeImages} alt="active_image" className="mainImage" />
            </Grid>
            <Grid container item xs={12} sm={4} md={3} style={styles.root} direction="column">
              {this._renderSmallImage()}
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={5}
              component={Paper}
              elevation={6}
              square
              style={{ height: "100%" }}
            >
              <Grid container justify="space-evenly" alignItems="center" style={{ height: "80vh" }}>
                {this._renderDescription()}
                <Divider text="Size & Confirmation" />
                <RadioGroupButton onChange={this._changeCurrentSize} radioValue={radioValue} valueArray={clothSize}>
                  <Button variant="contained" color="primary" fullWidth onClick={this._confirmTransaction}>
                    Add to Cart
                  </Button>
                </RadioGroupButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }

  _renderSmallImage = () => {
    return this.state.images.map((element, index) => {
      return (
        <img
          className="zoom"
          key={index}
          onClick={() => this._changeActiveImage(element)}
          src={element}
          alt="index"
          className="smallImage zoom"
        />
      );
    });
  };

  _renderDescription = () => {
    const { activeImages, images } = this.state;
    if (activeImages === images[0]) {
      const { description, name, price } = clothDescriptiton[0];
      return (
        <div className="productInfo">
          <Typography variant="h2" component="h3">
            {name}
          </Typography>
          <Divider text="Informations" />
          <Typography variant="subtitle1">{description}</Typography>
          <Typography variant="subtitle1">{price}$</Typography>
        </div>
      );
    } else if (activeImages === images[1]) {
      const { description, name, price } = clothDescriptiton[1];
      return (
        <div className="productInfo">
          <Typography variant="h2" component="h3">
            {name}
          </Typography>
          <Divider text="Informations" />
          <Typography variant="subtitle1">{description}</Typography>
          <Typography variant="subtitle1">{price}$</Typography>
        </div>
      );
    } else {
      const { description, name, price } = clothDescriptiton[2];
      return (
        <div className="productInfo">
          <Typography variant="h2" component="h3">
            {name}
          </Typography>
          <Divider text="Informations" />
          <Typography variant="subtitle1">{description}</Typography>
          <Typography variant="subtitle1">{price}$</Typography>
        </div>
      );
    }
  };

  _changeActiveImage = newImage => {
    this.setState({ activeImages: newImage });
  };

  _changeCurrentSize = event => {
    this.setState({ radioValue: event.target.value });
  };
  
  _confirmTransaction = () =>{
      const {radioValue} = this.state
      alert(`A ${radioValue} item as been add to your cart!`)
  }
}

const styles = {
  root: {
    height: "100vh"
  }
};

export default App;
