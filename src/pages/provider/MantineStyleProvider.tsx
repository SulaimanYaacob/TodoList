import {
  ColorSchemeProvider,
  ColorScheme,
  MantineProvider,
} from "@mantine/core";
import { useState, ReactNode } from "react";

function MantineStyleProvider({ children }: { children: ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme: colorScheme,
            colors: {
              dark: [
                "#5f3dc4",
                "#5637b0",
                "#4c319d",
                "#432b89",
                "#392576",
                "#301f62",
                "#26184e",
                "#1c123b",
                "#130c27",
                "#090614",
              ],
              light: [
                "#efecf9",
                "#dfd8f3",
                "#cfc5ed",
                "#bfb1e7",
                "#af9ee2",
                "#9f8bdc",
                "#8f77d6",
                "#7f64d0",
                "#6f50ca",
                "#5f3dc4",
              ],
            },
            primaryColor: "light",
            primaryShade: 7,
            components: {
              Button: {
                defaultProps: {},
              },
            },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default MantineStyleProvider;
