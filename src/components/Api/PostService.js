import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _limit: limit,
            _page: page,
          },
        }
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  static async getPostById(id) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    return response;
  }
  static async getCommentsById(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return response;
  }
}