import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faDownload as freeFasFaDownload,
  faUser as freeFasFaUser,
  faMagnifyingGlass as freeFasFaMagnifyingGlass,
  faFaceSmile as freeFasFaFaceSmile,
  faSquare as freeFasFaSquare
} from '@fortawesome/free-solid-svg-icons'

import {
  faStar as freeFarFaStar
} from '@fortawesome/free-regular-svg-icons'

import {
  faTwitter as freeFabFaTwitter
} from '@fortawesome/free-brands-svg-icons'

library.add(
  freeFasFaDownload,
  freeFasFaUser,
  freeFasFaMagnifyingGlass,
  freeFasFaFaceSmile,
  freeFasFaSquare,
  freeFarFaStar,
  freeFabFaTwitter
)

config.autoAddCss = false

Vue.component('fontAwesomeIcon', FontAwesomeIcon)
Vue.component('fontAwesomeLayers', FontAwesomeLayers)
Vue.component('fontAwesomeLayersText', FontAwesomeLayersText)
