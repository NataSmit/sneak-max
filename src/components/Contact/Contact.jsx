import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Contact.module.scss";
import Map from "../Map/Map";
import VK from "../../images/VK.svg";
import Inst from "../../images/Instagram.svg";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <Box
        sx={{
          py: 5,
          px: 3,
          maxWidth: 1152,
          my: 0,
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          "@media (max-width: 650px)": { display: "block" },
          "@media (max-width: 1080px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <Box
          sx={{
            marginRight: 10,
            "@media (max-width: 650px)": { textAlign: "center" },
          }}
        >
          <Typography
            sx={{
              color: "rgba(68, 75, 88, 1)",
              fontWeight: 700,
              marginBottom: 6,
            }}
            variant="h5"
          >
            Контакты
          </Typography>
          <Typography
            sx={{
              color: "rgba(178, 181, 187, 1)",
              textTransform: "uppercase",
              marginBottom: 3,
            }}
            variant="subtitle2"
          >
            Главный офис
          </Typography>
          <Typography
            sx={{
              color: "rgba(68, 75, 88, 1)",
              fontWeight: 400,
              marginBottom: 2,
            }}
            variant="h4"
          >
            +7 800 800 00 00
          </Typography>
          <Typography
            sx={{
              color: "rgba(68, 75, 88, 1)",
              fontWeight: 400,
              marginBottom: 4,
            }}
          >
            г. Санкт-Петербург, Комсомольская, 43 к1
          </Typography>
          <Typography
            sx={{
              color: "rgba(178, 181, 187, 1)",
              textTransform: "uppercase",
              marginBottom: 3,
            }}
            variant="subtitle2"
          >
            отдел продаж
          </Typography>
          <Typography
            sx={{
              color: "rgba(68, 75, 88, 1)",
              fontWeight: 400,
              marginBottom: 2,
            }}
            variant="h4"
          >
            +7 800 800 00 00
          </Typography>
          <Typography
            sx={{
              color: "rgba(68, 75, 88, 1)",
              fontWeight: 400,
              marginBottom: 6,
            }}
          >
            г. Санкт-Петербург, Комсомольская, 43 к1
          </Typography>
          <ul className={styles.list}>
            <li className={styles.social}>
              <a href="#">
                <img src={VK} alt="VK" />
              </a>
            </li>
            <li className={styles.social}>
              <a href="#">
                <img src={Inst} alt="Inst" />
              </a>
            </li>
          </ul>
        </Box>
        <Box>
          <Map />
        </Box>
      </Box>
    </section>
  );
}
