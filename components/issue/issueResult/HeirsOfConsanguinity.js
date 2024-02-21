"use client";
import useStore from "@/store";
import {
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import PaidIcon from "@mui/icons-material/Paid";
import GroupsIcon from "@mui/icons-material/Groups";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import BookIcon from "@mui/icons-material/Book";
import Chart from "./Chart";

function HeirsOfConsanguinity() {
  // Store State Variables:
  const allHeirsOfConsanguinity = useStore(
    (state) => state.heirsOfConsanguinity
  );
  return (
    <>
      <Typography
        variant="h4"
        color="primary"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
        sx={{ textShadow: "2px 2px #000" }}
      >
        الورثة من أصحاب العصبات
      </Typography>
      {allHeirsOfConsanguinity.length === 0 ? (
        <Typography
          variant="h6"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          لا يوجد ورثة من أصحاب العصبات.
        </Typography>
      ) : null}
      <Grid container spacing={3} mb={3}>
        {allHeirsOfConsanguinity.map((heir) => {
          return (
            <Grid sm={6} md={6} lg={4} key={heir.title}>
              <Card variant="outlined" className="glass-background">
                <CardHeader title={heir.title} />
                <Box sx={{ width: "100%", height: 200 }}>
                  <Chart heirTitle={heir.title} />
                </Box>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#3D2D1C" }}>
                        <PaidIcon color="primary" />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="قيمة الإرث"
                      secondary={
                        Number.isInteger(heir.earn)
                          ? heir.earn
                          : heir.earn.toFixed(2)
                      }
                    />
                  </ListItem>
                  {heir.count > 1 ? (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#3D2D1C" }}>
                          <PaidIcon color="primary" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="نصيب الفرد"
                        secondary={
                          Number.isInteger(heir.earn / heir.count)
                            ? heir.earn / heir.count
                            : (heir.earn / heir.count).toFixed(2)
                        }
                      />
                    </ListItem>
                  ) : null}
                  {heir.count > 1 ? (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#3D2D1C" }}>
                          <GroupsIcon color="primary" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="العدد" secondary={heir.count} />
                    </ListItem>
                  ) : null}
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#3D2D1C" }}>
                        <ShowChartIcon color="primary" />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="الأسهم"
                      secondary={
                        Number.isInteger(heir.stocks)
                          ? heir.stocks
                          : heir.stocks.toFixed(2)
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#3D2D1C" }}>
                        <BookIcon color="primary" />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      className="quran-font"
                      primary="الدليل"
                      secondary={heir.proof}
                    />
                  </ListItem>
                </List>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default HeirsOfConsanguinity;
