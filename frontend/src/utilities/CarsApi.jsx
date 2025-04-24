// Fetch data from API to show cars
export async function getCarsFromApi(url) {
  let data = await fetch(url);
  const response = await data.json();
  return response;
}

// export const getCarsFromApi = (url) => {
//   return fetch(url).then((res) => res.json());
// };

// export const getCarsFromApi = async (url) => {
//     const res = await fetch(url);
//       return await res.json();
//   };
