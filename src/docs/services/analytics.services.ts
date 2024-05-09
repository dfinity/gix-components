import { initOrbiter } from "@junobuild/analytics";

export const initAnalytics = async () => {
  const DEV = import.meta.env.DEV;
  const STAGING = import.meta.env.MODE === "staging";

  if (DEV || STAGING) {
    return;
  }

  const SATELLITE_ID = import.meta.env.VITE_SATELLITE_ID;
  const ORBITER_ID = import.meta.env.VITE_ORBITER_ID;

  await initOrbiter({
    satelliteId: SATELLITE_ID,
    orbiterId: ORBITER_ID,
  });
};
