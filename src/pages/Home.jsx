import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import single from "../assets/tezkor.jpg";
import team from "../assets/jamoaviy.jpg";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 0,
      image: single,
      title: "Yakkalik",
      description: "Lizards are a widespread group of squamate reptiles",
      path: "single",
    },
    {
      id: 1,
      image: team,
      title: "Jamoaviy",
      description: "Lizards are a widespread group of squamate reptiles",
      path: "team",
    },
    {
      id: 2,
      image: single,
      title: "Yakkalik Tezkor",
      description: "Lizards are a widespread group of squamate reptiles",
      path: "fast",
    },
    {
      id: 3,
      image: single,
      title: "Flashcard",
      description: "Lizards are a widespread group of squamate reptiles",
      path: "flashcard",
    },
  ];

  return (
    <div className="CardsWrap">
      {cards.map((card) => (
        <Card sx={{ maxWidth: 230 }} key={card.id}>
          <CardActionArea
            onClick={() => {
              navigate(card.path);
            }}
          >
            <CardMedia
              component="img"
              height="150"
              image={card.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Home;
