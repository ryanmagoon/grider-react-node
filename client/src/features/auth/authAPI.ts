import axios from 'axios'

export const fetchUser = () => axios.get('/api/current_user')
