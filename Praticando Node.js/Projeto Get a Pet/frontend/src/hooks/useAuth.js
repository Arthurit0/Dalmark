// Acesso a API
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from "../utils/api";

export default function useAuth() {
  async function register(user) {
    try {
      const data = await api.post("users/register", user).then((resp) => {
        return resp.data;
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return { register };
}
