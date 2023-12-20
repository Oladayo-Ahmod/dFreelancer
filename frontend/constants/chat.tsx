import { useContext, useEffect, useRef, useState } from 'react'
import { FREELANCER_CONTEXT} from '../context/MarketPlace'
import FreelancerProps from "@/app/interfaces/freelancerProps"

const {
  buyerId,sellerId
} = useContext(FREELANCER_CONTEXT) as FreelancerProps

// put your own APP_ID here
// get your app_id -> https://dashboard.sendbird.com/auth/signin
export const APP_ID = 'EA71A284-E91B-4D37-85B4-33EE8D9AE920'
// set your own USER_ID and NICKNAME
export const USER_ID = '11'
export const NICKNAME = `buyer@${buyerId?.slice(0,6)}&${sellerId?.slice(0,6)}`

export default {
  APP_ID,
  USER_ID,
  NICKNAME,
}