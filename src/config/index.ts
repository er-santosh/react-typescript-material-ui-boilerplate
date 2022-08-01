export const aliases = (prefix = `src`) => ({
  "@api": `${prefix}/api`,
  "@assets": `${prefix}/assets`,
  "@components": `${prefix}/components`,
  "@config": `${prefix}/config`,
  "@data": `${prefix}/data`,
  "@features": `${prefix}/features`,
  "@hooks": `${prefix}/hooks`,
  "@layouts": `${prefix}/layouts`,
  "@lib": `${prefix}/lib`,
  "@providers": `${prefix}/providers`,
  "@redux": `${prefix}/redux`,
  "@routes": `${prefix}/routes`,
  "@types": `${prefix}/types`,
  "@utils": `${prefix}/utils`,
});

export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
