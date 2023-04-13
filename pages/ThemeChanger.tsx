import { useState, ChangeEvent } from "react";
import { NextPage } from "next";
import { Layout } from "../components/layouts/Layout";
import {
  Card,
  CardContent,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const ThemeChanger: NextPage = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(event.target.value);
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
    </Layout>
  );
};

export default ThemeChanger;
