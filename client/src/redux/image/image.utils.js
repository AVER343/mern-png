// export function isPresent(item,tasks){
//     let i
//     for(i=0;i<tasks.length;i++)
//     {
//        try{ if(item._id==tasks[i]._id)
//         {
//             return true
//         }}
//         catch(e)
//         {
//             return false
//         }
//     }
//     return false 
//  }
 export const isPresent = (cartItemToAdd, cartItems) => {
    if(!cartItems)return false
    try
    { 
    let existing=cartItems.filter(elem=>elem._id==cartItemToAdd._id)
    if(existing.length>0)
        return true
    else return false
    }
     catch(e)
     {
         console.log(cartItemToAdd)
         console.log(cartItems)
         console.error(e)
        return false
     }
    
}
