import image from "../../assets/images/email.png"
const Mail = () => {

    const styles = `
    
.Outerlayer {
    margin-top: 60px;
    position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 450px;
  width: 100%;
  max-width: 1600px; 
  padding: 0 40px; 
  background-color: rgba(61, 90, 241, 1);
}

.head {
  margin-top: 10px;
  margin-bottom: 35px;
  text-align: center;
  color: white;
  font-size: 36px; /* Increase font size for large screens */
  font-weight: 500;
  max-width: 700px; /* Limit heading width for readability */
}



input[type="email"] {
  font-size: 16px;
  font-weight: 400;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 5px;
  box-sizing: border-box;
}


.mailIcon {
  width: 50px;
  
}


  .c1{
    margin-top: -60px;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background-color: rgba(220, 226, 255, 0.2);
}
  
  .c2 {
    left: 20px;
    position: absolute;
    bottom: -100px; /* Adjust this value to position the circles */
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: rgba(220, 226, 255, 0.2);
    transform: translateX(-40%);
  } 
  
  
  .c3 {
    position: absolute;
    bottom: 40px;
    width: 80px;
    height: 80px;
    border-radius: 100px;
    background-color: rgba(220, 226, 255, 0.2);
    left: 50%; /* Position circle 2 in the center (adjust with transform) */
    transform: translateX(-190%);
  }
  
  .c4 {
    right: 20px;
    position: absolute;
    bottom: -100px; /* Adjust this value to position the circles */
    width: 200px;
    height: 200px;
    border-radius: 100px;
    transform: translateX(10%);
  } /* Position circle 3 on the bottom right */
  


/* Media Query for Large Screens (greater than 1200px) */
@media screen and (min-width: 1200px) {
  .head {
    font-size: 40px;
    margin-top: 80px;
  }

  .innerlayer {
    padding: 40px;
  }
}

@media screen and (max-width: 768px) {
  .head {
    font-size: 30px;
    margin-top: 70px;
  }

  .innerlayer {
    padding: 40px;
    width: 400px;
  }

  .mail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  
  .image-container {
    display: flex;
   margin-top: -25px;
   /* margin-left: -180px; */
  }
  
  .form-container {
    margin-top: -25px;
   
  }


input[type="email"] {   
  font-size: 16px;
  font-weight: 400;
   border-radius: 5px;
  box-sizing: border-box;
}

.mailIcon {
  width: 50px;
  
}
}
 `


  return (

    <div>
            <style>{styles}</style>
      <div className="Outerlayer">
      <h1 className="head">
        <div className="circle c1"></div>
        DISCOVER THE PERFECT STREAM AND SUBJECT FOR YOUR CAREER
      </h1>
        <div className="bg-[#e6e4e478] rounded-xl p-2 px-5 ">
          <div className=" flex gap-2 justify-center items-center">
            <img src={image} alt="Stream Image" className=" flex  justify-center items-center w-10"/>
            <div className="flex  justify-center items-center">
               <input  type="email" className="p-5 h-10 placeholder:text-black" placeholder="Enter your Email" />
            </div>
            <div className="flex  justify-center items-center">
                <button
              type="submit"
              className="  bg-blue-700 text-white border shadow-xl border-transparent rounded-md py-2 px-4 text-sm font-medium hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
              REGISTER
            </button>
            </div>
          
          </div>
          
        </div>
      <div className="circle  c2"></div>
      <div className="circle max-md:hidden c3"></div>
      <div className="circle max-md:hidden c4"></div> 
    </div>
    </div>
  );
};


export default Mail;
