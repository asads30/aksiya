import { apiClient } from "@/services/apiClient";

const getMeUserData = (params) => apiClient.get("getMe", { params });

const postMeUserData = (params) => apiClient.post("getMe", params);

export { getMeUserData, postMeUserData };
