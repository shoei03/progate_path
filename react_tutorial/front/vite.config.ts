import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const root = path.resolve(__dirname, "src");
const port = Number(process.env.PORT) || 3000;

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  server: {
    port,
  },
});
