import axios from 'axios'
import { toast } from 'sonner'
import { API_URL } from '../constants'

axios.defaults.baseURL = API_URL

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      toast.error('Session expired. Please login again')
      setTimeout(() => {
        window.location.href = '/login'
      }, 3000)
    }
    return Promise.reject(error)
  },
)

const MILLISECONDS_IN_SECOND = 1000
const SECONDS_BEFORE_EXPIRY = 10

/**
 * Logs in the user
 * @param {string} username
 * @param {string} password
 */

async function login(username, password) {
  const params = new URLSearchParams()
  params.append('grant_type', 'password')
  params.append('username', username)
  params.append('password', password)

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }

  const response = await axios.post('/token', params, config)

  if (response.status === 400) throw new Error('Invalid username or password')
  if (response.status !== 200) throw new Error('Unknown error')

  /**
   * @type {import('../types/api').TokenResponse}
   */

  const data = response.data

  setTimeout(() => {
    login(username, password)
  }, (data.expires_in - SECONDS_BEFORE_EXPIRY) * MILLISECONDS_IN_SECOND)

  sessionStorage.setItem('token', data.access_token)
}

/**
 * Gets the option analysis
 * @param {string} script
 * @returns {Promise<import('../types/EOT_Analysis').OptionAnalysis[]>}
 */

async function getOptionAnalysis(script) {
  const response = await axios.get('/api/EODDataController/OptionAnalysis', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + (sessionStorage.getItem('token') || ''),
    },
    params: { script },
  })

  return response.data
}

async function getFutureAnalysis() {
  const url = 'http://localhost:5173/api/future-analysis.json'
  const response = await axios.get(url /* '/api/EODDataController/FutureAnalysis' */, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + (sessionStorage.getItem('token') || ''),
    },
  })

  return response.data.map((item, i) => ({ ...item, id: i }))
}

/**
 * Gets the future analysis
 * @returns {Promise<import('../types/EOT_Analysis').Recommendations[]>}
 */

async function getRecommendation() {
  const response = await axios.get('/api/StockSuggestionController/GetRecommanded', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + (sessionStorage.getItem('token') || ''),
    },
  })

  return response.data
}

export { login, getOptionAnalysis, getFutureAnalysis, getRecommendation }
