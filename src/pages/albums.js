
import { useSelector } from 'react-redux';




function Albums() {


const albums = useSelector((state) => state.albums);

console.log(albums);


  const images = [


    { url: "https://source.unsplash.com/collection/888137/200x200"},
  
   
    
  
  ];
  
    return (
      <div className="login">
        <header className="login-header">
       </header>
  
         <div className="content-wrap">

             

                {images.map((image) => (
                    <div
                        key={image.url}>
                        <img src={image.url} alt="albumCover"/>
                    </div>
                  ))}

               <div className="title">
                    Albums Title
               </div>

         </div>
      </div>
    );
  }
  
  export default Albums;
  