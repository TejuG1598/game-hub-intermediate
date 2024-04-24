import React from "react";
import { Game } from "../entities/Game";
import APIClient, { FetchResponse } from "./api-client";

export default new APIClient<FetchResponse<Game>>("/games");
