import React from 'react'
import { Game } from '../hooks/useGames'
import APIClient, { FetchResponse } from './api-client'

export default new APIClient<FetchResponse<Game>>('/games')