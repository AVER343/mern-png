 export const ThreeArray= (array)=>{
   let page=0
    let  k=[]
    while(array.length>=3){
        k[page]=[]
        k[page]=array.splice(0,3)
        page++
    }
    return k
}