

function Cards(props) {
  return (
 <>

 <div id="cards">
 <div className="card">
 <div className="imge">
<img src={props.imge}></img>
</div>
     <h2>{props.product}</h2>
     <p>{props.descraption}</p>


     <p className="price">{props.price}</p>

</div>

</div>

 </>
  )
}

export default Cards