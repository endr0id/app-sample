import reactLogo from "../../../assets/react.svg";
import Card from "../card/Card";

import {
  authWrapper,
  contentWrapper,
  greetingRecipe,
  headingRecipe,
  logoContainer,
} from "./AuthLayout.styles";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const greeting = "Welcome";
const headingText = "Enter your user information to get started.";

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className={authWrapper}>
      <div className={contentWrapper}>
        <Card>
          <div className={logoContainer}>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img src={reactLogo} alt="React logo" />
            </a>
          </div>

          <div className={greetingRecipe}>{greeting}</div>
          <div className={headingRecipe}>{headingText}</div>
          {children}
        </Card>
      </div>
    </div>
  );
};

export default AuthLayout;
