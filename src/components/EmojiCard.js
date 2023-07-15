import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function EmojiCard({ name, htmlCode, category, group }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography
          fontSize={"50px"}
          dangerouslySetInnerHTML={{ __html: htmlCode[0] ? htmlCode[0] : "" }}
        ></Typography>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Category : " {category} "
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Group : " {group} "
        </Typography>
      </CardContent>
    </Card>
  );
}
