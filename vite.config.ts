import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { execSync } from "child_process";

// const commitHash = execSync("git rev-parse --short HEAD").toString();

// https://vitejs.dev/config/
export default defineConfig({
//   define: {
//     __COMMIT_HASH__: JSON.stringify(commitHash),
//   },
  // optimizeDeps: {
  //   exclude: ["@ffmpeg/ffmpeg", "@ffmpeg/util"],
  // },
  plugins: [react()],
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
});
