import React from "react";


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

.innerlayer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px; 
  margin-bottom: 30px;/* Increase top margin for spacing */
  width: 500px;
  height: 50px;
  max-width: 1000px; /* Limit maximum width for inner content */
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); /* Enhance box shadow for depth */
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
    margin-left: 5px;
    margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  width: 380px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  box-sizing: border-box;
}

.input-container input[type="email"]::placeholder {
  color: black;
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
    background-color: rgba(220, 226, 255, 0.2);
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
    margin-left: 5px;
    margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  width: 270px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  box-sizing: border-box;
}

.input-container input[type="email"]::placeholder {
  color: black;
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
      <div className="innerlayer">
        <div className="mail">
          <div className="image-container">
            <img
              src="https://s3-alpha-sig.figma.com/img/c41b/12d7/8efe5471b8dedb4323406cca0a4d7134?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K3YjYiMLpTOuenM0k41zcb21UXOIB2zh-WqsVA~TgIMRNQFJGEFTWvvdB8Ezj0PJTeNa1BHFYr3Vl0szfy~ffiHgm1E5Ulq4ag6CCSrhnnX5vNHSwH0iggsrkoCZwwCS17pu-OysoYEvH3O6-gnmlsmr4Ba7kknuOpVfIYb9qZj~2DjJH6XLBs-Ns3-tGa-v7lNA5rTfH8DUJ87eHYhes90tP3JWpPcf8jpDFHiC4xHMdMfSG5qLRuv5w4G294GA30f~jKJ95fVd2FE3AaJSryjYYDtpnXLjBRb9OO9aeUkp-PUmrU9mFPTjC5XAFwSdPL2Et55Y0EGDvKTY31m2Yw__"
              alt="Stream Image" className="mailIcon"
              />
            <input type="email" placeholder="Enter your Email" />
          </div>
          <div className="form-container">
            <button
              type="submit"
              className="w-full ml-1 -mr-2 bg-blue-700 text-white border shadow-xl border-transparent rounded-md py-2 px-4 text-sm font-medium hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
              REGISTER
            </button>
          </div>
        </div>
      </div>
      <div className="circle c2"></div>
      <div className="circle c3"></div>
      <div className="circle c4"></div>
    </div>
    </div>
  );
};


export default Mail;
