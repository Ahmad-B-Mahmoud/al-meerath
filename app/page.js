// Home Page
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import Icon from "@/public/images/icon.png";
import Image from "next/image";
import NewIssueButton from "@/components/home/NewIssueButton";

export const metadata = {
  title: "الميراث | حلّ مسائل مواريث",
  description:
    "حلّ مسائل المواريث حسب أحكام الشريعة الإسلامية على المذهبين الحنفي و الشافعي.",
};

function Home() {
  return (
    <>
      <Container maxWidth="md" className="glass-background">
        <Grid container alignItems="center">
          <Grid item sm={6}>
            <Image
              src={Icon}
              style={{
                position: "relative",
                maxWidth: "100%",
                height: "auto",
                borderRadius: "1rem",
              }}
              alt="Web app Icon"
              blurDataURL="data:..."
              placeholder="blur"
            />
          </Grid>
          <Grid item sm={6}>
            <Card className="no-background">
              <CardContent>
                <Typography
                  variant="h1"
                  color="primary"
                  sx={{ textShadow: "2px 2px #000", pt: 4 }}
                >
                  الميراث
                </Typography>
                <Typography variant="h5" sx={{ textShadow: "2px 2px #000" }}>
                  حلّ مسائل المواريث حسب أحكام الشريعة الإسلامية على المذهبين
                  الحنفي و الشافعي.
                </Typography>
                <CardActions sx={{ mt: 2 }}>
                  <NewIssueButton />
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
