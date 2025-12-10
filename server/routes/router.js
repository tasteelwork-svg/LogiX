import userRouter from "./user.router.js";
import roleRouter from "./role.router.js";
import vehicleRouter from "./vehicle.router.js";
import tripRouter from "./trip.router.js";
import tireRouter from "./tire.router.js";
import maintenanceRouter from "./maintenance.router.js";
import maintenanceRuleRouter from "./maintenance-rule.router.js";
import notificationRouter from "./notification.router.js";

const path = "/api";

export const routers = [
  { path: `${path}`, route: userRouter },
  { path: `${path}`, route: roleRouter },
  { path: `${path}`, route: vehicleRouter },
  { path: `${path}`, route: tripRouter },
  { path: `${path}`, route: tireRouter },
  { path: `${path}`, route: maintenanceRouter },
  { path: `${path}`, route: maintenanceRuleRouter },
  { path: `${path}`, route: notificationRouter },
];

export default routers;
