import router from "page";
import routes from "./routes";
import { page, layout, route } from "../stores/router";

routes.forEach((r) => {
  router(
    r.path,
    (ctx, next) => {
      next();
    },
    () => {
      route.set(r.name);
      layout.set(r.layout);
      page.set(r.component);
    }
  );
});
router.start();
