import { SceneListService } from '@/apis/scene'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSceneStore = defineStore(
  'scene',
  () => {
    const attractionsList = ref([])
    const getEmergency = async (id) => {
      attractionsList.value = await SceneListService(id)
    }

    return { attractionsList, getEmergency }
  },
  {
    persist: true
  }
)
