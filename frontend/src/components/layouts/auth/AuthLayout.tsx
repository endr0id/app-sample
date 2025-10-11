import reactLogo from "../../../assets/react.svg";

import {
  authHeader,
  authWrapper,
  contentBox,
  contentWrapper,
  logoContainer,
  titleStyle,
} from "./AuthLayout.styles";

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const AuthLayout = ({ children, title = "title" }: AuthLayoutProps) => {
  return (
    <div className={authWrapper}>
      <div className={authHeader}>
        <div className={logoContainer}>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} alt="React logo" />
          </a>
        </div>
        <h2 className={titleStyle}>{title}</h2>
      </div>
      <div className={contentWrapper}>
        <div className={contentBox}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
