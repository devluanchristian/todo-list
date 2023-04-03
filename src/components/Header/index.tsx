import { useContext } from "react";
import { ContainerHeader } from "./styled";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

interface IProps {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: IProps) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <ContainerHeader>
      To do List
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </ContainerHeader>
  );
};

export default Header;
