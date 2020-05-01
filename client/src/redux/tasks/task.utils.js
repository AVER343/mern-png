import { store } from "../store";

export function getJWT() {
    const state = store.getState();

    const authToken = state.user.token
    return authToken
}
export function isPresent(item){
    let isPresent=false
    const state=store.getState()
    const list =state.image.list
    isPresent =list.filter(elem=>elem._id==item.id)
}