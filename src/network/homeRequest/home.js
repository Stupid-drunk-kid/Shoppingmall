import {arequest} from "../request";

export function homeMultidata() {
  return arequest({
    url:'home/multidata'
  })
}

export function homeData(type,page) {
  return arequest({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
