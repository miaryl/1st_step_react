import './Names.css';

function Names(){
    const names = ["Ana", "Maria", "Julia"];


    return (
       /* <div>{names}</div>-> simply print names in array all togather
          better way, use map()
       */
       <div>
        {
            names.map((name, index)=> (
                <p key={index} className="name">{name}</p>
            ))
        }
       </div>

    )

}

export default Names