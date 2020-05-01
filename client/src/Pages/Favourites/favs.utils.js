export const TenToShow = (page,array)=>{
    let newArray=array
    newArray=newArray.filter((elem,index)=>index>0 && index<(page)*10)
    return newArray
}