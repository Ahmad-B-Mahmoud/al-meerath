"use client";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import Icon from "@/public/images/icon.png";
import Image from "next/image";
import CalculateIcon from "@mui/icons-material/Calculate";
import { useRouter } from "next/navigation";

function Home() {
  // Variables
  const router = useRouter();

  // Handlers
  const handleClick = () => {
    router.push("/issue");
  };
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
                <Typography variant="h4" sx={{ textShadow: "2px 2px #000" }}>
                  حلّ مسائل المواريث حسب أحكام الشريعة الإسلامية على المذهبين
                  الحنفي و الشافعي.
                </Typography>
                <CardActions sx={{ mt: 2 }}>
                  <Button
                    onClick={handleClick}
                    startIcon={<CalculateIcon />}
                    variant="contained"
                    size="large"
                  >
                    البدء بحلّ مسألة مواريث
                  </Button>
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
