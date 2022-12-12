import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ element }) => {
  return (
    <Card sx={{ maxWidth: 345}}>
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
        <Link to={`/itemDetail/${element.id}`} style={{textDecoration: "none"}}>
          <Button size="large" variant="contained">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default Item
