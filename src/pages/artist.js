import { useSelector } from 'react-redux';






function Artist() {



  const artists = useSelector((state) => state.artists);

console.log(artists);


  const images = [
    { url: "https://randomuser.me/api/portraits/men/75.jpg"},
  ];

  const names = [
    {name : "greece"}
  ];


    return (
      <div className="login">
        <header className="login-header">
        </header>
  
        <div className="content-wrap">

                 {/* <img src="https://randomuser.me/api/portraits/men/75.jpg"/> */}

                 {images.map((image) => (
                    <div
                        key={image.url}>
                        <img src={image.url} alt="artistPhoto"/>
                    </div>
                  ))}


             <div className="title">
             {names.map((name) => (
                    <div
                        key={name.name}>
                        {name.name}
                    </div>
                  ))}

             </div>
         
       
         
        
        </div>
      </div>
    );
  }
  
  export default Artist;
  