/** @format */

export const wrapper =
  (fun) =>
  async (...args) => {
    try {
      return await fun(...args);
    } catch (err) {
      console.error(`🔴 ${err} `);
      throw err;
    }
  };
