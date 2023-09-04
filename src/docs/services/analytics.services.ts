import { initOrbiter } from "@junobuild/analytics";

export const initAnalytics = async () => {
  const DEV = import.meta.env.DEV;

  if (DEV) {
    return;
  }

  const SATELLITE_ID = import.meta.env.VITE_JUNO_SATELLITE_ID;
  const ORBITER_ID = import.meta.env.VITE_JUNO_ORBITER_ID;

  await initOrbiter({
    satelliteId: SATELLITE_ID,
    orbiterId: ORBITER_ID,
  });
};
