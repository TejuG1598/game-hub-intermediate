import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9a2f91c9a8ff4271b00d5068bdbc47b0",
  },
});
