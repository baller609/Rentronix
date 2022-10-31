import React from "react";
import { useEffect, useState } from "react";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
  Grid,
} from "@mui/material";
import { Chip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Products.css";
import ProductItems from "./Details";

function Products() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/products";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setproducts(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    //using useEffect to get all the products form our json data
  }, []);

  return (
    <div>
      <div className="addMargin">
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product) => (
            // Exporting all the products using map
            <>
              <Grid container xs={12} sm={6} md={2.4}>
                <Card sx={{ width: 300 }} style={{ margin: "5%" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    width="auto"
                    image={product.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h8" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ₹{product.amount}
                    </Typography>
                    <Typography>
                      <Chip
                        label={product.rating}
                        size="small"
                        style={{ backgroundColor: "#0EAF0D", color: "white" }}
                      />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid container spacing={8}>
                      <Grid item xs={7}>
                        <Button size="small">
                          <FavoriteIcon style={{ color: "grey" }} />
                        </Button>
                      </Grid>
                      <Grid item xs={5}>
                        <Button size="small">
                          <AddShoppingCartIcon style={{ color: "grey" }} />
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Products;
