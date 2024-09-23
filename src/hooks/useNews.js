import { getNewsBySearch } from "../services/apiSearch";

export default async function useNews(search) {
  const response = await getNewsBySearch(search);
  const data = await response.data;
  //   const data = response.data;
  console.log(data)
  return data;
}
