import { createContext, useContext, useState } from 'react';

interface ColorContextType {
  laces: string;
  mesh: string;
  caps: string;
  inner: string;
  sole: string;
  stripes: string;
  band: string;
  patch: string;
  updateColors: (key: string, value: string) => void;
}

const defaultColors = {
  laces: 'white',
  mesh: 'white',
  caps: 'white',
  inner: 'white',
  sole: 'white',
  stripes: 'white',
  band: 'white',
  patch: 'white',
};

export const ColorContext = createContext<ColorContextType>({
  ...defaultColors,
  updateColors: () => {},
});

const ColorProvider= ({ children }) => {
  const [colors, setColors] = useState(defaultColors);

  const updateColors = (key: string, value: string) => {
    setColors({
      ...colors,
      [key]: value,
    });
  };

  return (
    <ColorContext.Provider value={{ ...colors, updateColors }}>
      {children}
    </ColorContext.Provider>
  );
};

const useColorContext = () => useContext(ColorContext);

export { ColorProvider, useColorContext };
