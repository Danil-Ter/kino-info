import { Badge, createTheme, ThemeProvider } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";


const theme = createTheme({
  palette: {
    primary: {
      main: "#00FF00", 
    },
    secondary: {
      main: "#ff4700", 
    },
  },
});

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <ContentModal media_type={media_type} id={id}>
        <Badge
          badgeContent={vote_average}
          color={vote_average > 6 ? "primary" : "secondary"}
        />

        <img
          className="poster"
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "Телесеріал" : "Фільм"}
          <span className="subTitle">{date}</span>
        </span>
      </ContentModal>
    </ThemeProvider>
  );
};

export default SingleContent;

