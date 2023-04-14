import { useState, ChangeEvent, useEffect } from "react";
import { NextPage, GetServerSideProps } from "next";
import { Layout } from "../components/layouts/Layout";
import Cookies from "js-cookie";
import {
  Card,
  CardContent,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import axios from "axios";

interface Props {
  theme: string;
}

const ThemeChanger: NextPage<Props> = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(event.target.value);
    Cookies.set("theme", event.target.value);
  };

  const handleClick = async () => {
    const { data } = await axios.get("/api/hello");
    console.log(data);
  };

  return (
    <Layout title="Theme Changer">
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema:</FormLabel>
            <RadioGroup row value={currentTheme} onChange={handleChange}>
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
              />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Custom"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          mt: 2,
        }}
      >
        Solicitud de Cookies al Backend
      </Button>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { theme } = ctx.req.cookies;
  const validThemes = ["light", "dark", "custom"];
  return {
    props: {
      theme: theme && validThemes.includes(theme) ? theme : "light",
    },
  };
};

export default ThemeChanger;
