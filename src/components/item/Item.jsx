import { Link } from "react-router-dom"
import styles from "./Item.module.css"
import imagenZapatilla from "../../assets/img/descarga.jpg"

import {
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material"

const Item = ({ element }) => {
  return (
    // <Box className={styles.card}>
    //   <h2 style={ {color: "red"} } >{element.name}</h2>
    //   {/* <img src={element.img} alt="" className={styles.imgCard}/> */}
    //   <img src={imagenZapatilla} alt="" className={styles.imgCard} />
    //   <h3>${element.price}</h3>
    //   <Link to={`/itemDetail/${element.id}`}>Ver detalle</Link>

    //   <Typography variant="h5" align="center" color="primary">aca estoy en el typography</Typography>
    // </Box>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={element.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="primary"
          align="center"
        >
          {element.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
          {element.description}
        </Typography>
        <Typography variant="body1" color="secondary" align="center">
          ${element.price}.-
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link
          to={`/itemDetail/${element.id}`}
          style={{ textDecoration: "none" }}
        >
          <Button size="large" variant="contained">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default Item
