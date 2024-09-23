import axios from "axios";
// const apikey = "bfbaa55fdde093897c03d8485bbaffe0";
// const baseURL =
//   "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=";
export async function getNews() {
  const apikey = process.env.REACT_APP_API_KEY;
  const query = "india";
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${apikey}`
    );
    const data = response.data;
    if (!data) return null;
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function getNewsBySearch(search) {
  try {
    const apikey = process.env.REACT_APP_API_KEY;
    const response = await axios.get(
      search
        ? `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`
        : `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${apikey}`
    );
    const data = response.data;
    if (!data) return null;
    return data;
  } catch (e) {
    console.error(e);
  }
}
