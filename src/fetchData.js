export const fetchData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data fetched successfully");
    }, 1000);
  });
};
