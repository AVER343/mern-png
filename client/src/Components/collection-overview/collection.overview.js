import React from 'react';
import './overview.css'
import CollectionItem from '../collection-item/collection-item.component';
const CollectionOverview=(props)=>{
    return(<div>
              <div className="row" >
                <div className="column" key ={`${props.item[0].id}${Math.random()}`}>
                    <CollectionItem item={props.item[0]} key ={props.item[0].id}/>
                </div>
               {props.item[1]?<div className="column" key ={`${props.item[1].id}${Math.random()}`}>
                    <CollectionItem item={props.item[1]}  key ={props.item[1].id}/>
                   </div>:null}
               {props.item[2]?<div className="column"key ={`${props.item[2].id}${Math.random()}`}>
                    <CollectionItem item={props.item[2]}  key ={props.item[2].id}/>
                </div>:null}
            </div>
        </div>)
}
export default CollectionOverview