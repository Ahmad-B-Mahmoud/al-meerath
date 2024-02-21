"use client";
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
import PieChartIcon from "@mui/icons-material/PieChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import BookIcon from "@mui/icons-material/Book";
import useStore from "@/store";
import { useEffect } from "react";
import checkForIssueType from "@/utils/solve/checkForIssueType";
import Chart from "@/components/issue/issueResult/Chart";

function HeirsOfFard() {
  // Variables:
  const heirsOfFard = useStore((state) => state.heirsOfFard);
  const issueType = useStore((state) => state.issueType);
  const gender = useStore((state) => state.gender);

  // Check for Issue Type:
  useEffect(() => {
    checkForIssueType();
  }, []);

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
        الورثة من أصحاب الفروض
      </Typography>
      {heirsOfFard.length === 0 ? (
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          لا يوجد ورثة من أصحاب الفروض.
        </Typography>
      ) : null}

      <Grid container spacing={3} mb={3}>
        {heirsOfFard.map((heir) => {
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
                        issueType === "رديّة" &&
                        ((heir.title != "الزوجات" && gender == "male") ||
                          (heir.title != "الزوج" && gender == "female"))
                          ? Number.isInteger(heir.earn) &&
                            Number.isInteger(heir.rEarn)
                            ? heir.earn +
                              ` + ${heir.rEarn - heir.earn} ردّاً = ${
                                heir.rEarn
                              }`
                            : heir.earn.toFixed(2) +
                              ` + ${(heir.rEarn - heir.earn).toFixed(
                                2
                              )} ردّاً = ${heir.rEarn.toFixed(2)}`
                          : Number.isInteger(heir.earn)
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
                          issueType === "رديّة" &&
                          ((heir.title != "الزوجات" && gender == "male") ||
                            (heir.title != "الزوج" && gender == "female"))
                            ? Number.isInteger(heir.rEarn / heir.count)
                              ? heir.rEarn / heir.count
                              : (heir.rEarn / heir.count).toFixed(2)
                            : Number.isInteger(heir.earn / heir.count)
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
                        <PieChartIcon color="primary" />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="الفرض" secondary={heir.cut} />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#3D2D1C" }}>
                        <ShowChartIcon color="primary" />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="الأسهم" secondary={heir.stocks} />
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

export default HeirsOfFard;
