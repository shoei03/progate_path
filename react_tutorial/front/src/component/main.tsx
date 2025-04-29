import ReactDOM from "react-dom/client";
import {Body} from "./body";
import {Footer} from "./footer";
import {Title} from "./title";

const rootElement = document.getElementById("root")!;
const reactRoot = ReactDOM.createRoot(rootElement);

const reactElement = (
  <>
    <Title text="World" />
    <Body name="taro" age={18} />
    <Footer>
      <div>
        <a href="https://blog.example.com">Blog</a>
      </div>
      <div>
        <a href="https://sns.example.com">SNS</a>
      </div>
    </Footer>
  </>
);
reactRoot.render(reactElement);
