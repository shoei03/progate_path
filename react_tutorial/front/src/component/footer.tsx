import {JSX} from "react";

export function Footer({children}: {children: React.ReactNode}): JSX.Element {
  return (
    <footer>
      {children}
      <div>© 2020 TARO TANAKA</div>
    </footer>
  );
}
