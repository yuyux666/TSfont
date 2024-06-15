// 创建路由实例
// 创建history模式路由
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'

import TouristAttractions from '@/views/TouristAttractions/index.vue'
import Travel from '@/views/Travel/index.vue'
import DiningEntertainment from '@/views/DiningEntertainment/index.vue'
import Hotel from '@/views/Hotel/index.vue'
import Emergency from '@/views/Emergency/index.vue'
import Complaints from '@/views/TouristComplaints/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/main',
      component: Layout,
      children: [
        {
          path: 'touristAttractions',
          component: TouristAttractions,
          redirect: '/main/touristAttractions/tourOverview',
          children: [
            {
              path: 'tourOverview',
              component: () =>
                import('@/views/TouristAttractions/components/TourOverview.vue')
            },
            {
              path: 'tourShuangqiao',
              component: () =>
                import(
                  '@/views/TouristAttractions/components/TourShuangqiao.vue'
                )
            },
            {
              path: 'tourHaizi',
              component: () =>
                import('@/views/TouristAttractions/components/TourHaizi.vue')
            },
            {
              path: 'tourChangping',
              component: () =>
                import(
                  '@/views/TouristAttractions/components/TourChangping.vue'
                )
            }
          ]
        },
        {
          path: 'travel',
          component: Travel,
          redirect: '/main/travel/travelRoute',
          children: [
            {
              path: 'travelRoute',
              component: () =>
                import('@/views/Travel/components/TravelRoute.vue')
            },
            {
              path: 'travelWeather',
              component: () =>
                import('@/views/Travel/components/TravelWeather.vue')
            },
            {
              path: 'travelCondition',
              component: () =>
                import('@/views/Travel/components/TravelCondition.vue')
            }
          ]
        },
        {
          path: 'diningEntertainment',
          component: DiningEntertainment,
          redirect: '/main/diningEntertainment/dining',
          children: [
            {
              path: 'dining',
              component: () =>
                import(
                  '@/views/DiningEntertainment/components/DiningRestaurant.vue'
                )
            },
            {
              path: 'entertainment',
              component: () =>
                import(
                  '@/views/DiningEntertainment/components/EntertainmentPerformance.vue'
                )
            }
          ]
        },
        {
          path: 'hotel',
          component: Hotel,
          redirect: '/main/hotel/hotelStar',
          children: [
            {
              path: 'hotelStar',
              component: () => import('@/views/Hotel/components/HotelStar.vue')
            },
            {
              path: 'hotelNonStar',
              component: () =>
                import('@/views/Hotel/components/HotelNonStar.vue')
            },
            {
              path: 'hotelReserve',
              component: () =>
                import('@/views/Hotel/components/HotelReserve.vue')
            }
          ]
        },
        {
          path: 'emergency',
          component: Emergency,
          redirect: '/main/emergency/emergencyInfo',
          children: [
            {
              path: 'emergencyInfo',
              component: () =>
                import('@/views/Emergency/components/EmergencyInfo.vue')
            },
            {
              path: 'emergencyAttention',
              component: () =>
                import('@/views/Emergency/components/EmergencyAttention.vue')
            }
          ]
        },
        {
          path: 'complaint',
          component: Complaints,
          redirect: '/main/complaint/complaintApply',
          children: [
            {
              path: 'complaintApply',
              component: () =>
                import(
                  '@/views/TouristComplaints/components/ComplaintApply.vue'
                )
            },
            {
              path: 'complaintCheck',
              component: () =>
                import(
                  '@/views/TouristComplaints/components/ComplaintCheck.vue'
                )
            },
            {
              path: 'complaintEvaluate',
              component: () =>
                import(
                  '@/views/TouristComplaints/components/ComplaintEvaluate.vue'
                )
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
  // 路由行为定制
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
