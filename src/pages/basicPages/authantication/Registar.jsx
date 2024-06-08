import { Link, useNavigate } from "react-router-dom";
import { imageUpload } from "../../../utlitis/photoUpload";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import useCommonAxios from "../../../hook/useCommonAxios";
import useGetUser from "../../../hook/useGetUser";



const Registar = () => {
    const [regiLoader, setRegLoader] = useState(false);
    const {registar, updatesProfile, loginWithGoogle} = useContext(AuthContext)
    const commonAxios = useCommonAxios()
    const navigate = useNavigate()
    const [userData, refetch, isLoading] = useGetUser()


const saveUserToDB = async (userInfo)=>{

const {data} =await commonAxios.post('/userAdd',userInfo);
console.log(data);

}

    const signUpGoogle =()=>{
        loginWithGoogle()
        .then(result => {
         
            const name = result.user.displayName;
            const email = result.user.email;
            const role = "worker";
            const coin = 10;
            const  image_url = result.user.photoURL
         
  const userInfo = {
    name,
    email,
    role,
    coin,
    image_url
  }
  saveUserToDB(userInfo)


  toast.success('Registar Successful')
  refetch()
  navigate('/')


        })
        .catch(err =>{
            console.log(err.message);
        })
    }
const regFormHandle = async e =>{
    setRegLoader(true)
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.files[0];
    const role = form.role.value;
    const coin = role === 'worker'? 10 : role === "taskCreator" && 50;







    if(password.length < 6){
        toast.error("Password should be at least 6 characters");
        setRegLoader(false)
        return
          }

          if(!/^(?=.*[A-Z])(?=.*[a-z]).+$/.test(password)){
            toast.error("Password Must have a Lowercase and a Uppercase letter")
            setRegLoader(false)
            return
            }


    try {
   
        // 1. Upload image and get image url
        const image_url = await imageUpload(photo)
        console.log(image_url)
        //2. User Registration
        const result = await registar(email, password)
        console.log(result)
  
        // 3. Save username and photo in firebase
        await updatesProfile(name, image_url)
   
     
        const userInfo = {
          name,
          email,
          role,
          coin,
          image_url
          
          }
   const {data} =  await commonAxios.post('/userAdd', userInfo);
   console.log(data);
   toast.success('Registar Successful')
   refetch()
   navigate('/')





        
        setRegLoader(false)
      } catch (err) {
        console.log(err)
    
        if( err?.message === "Firebase: Error (auth/email-already-in-use)."){

            toast.error("This email is already in use.")
                 
        setRegLoader(false)
            return
          }
          toast.error(err.message)
        setRegLoader(false)
      }

}


    return (
        <div  >
        {/* <Navbar></Navbar> */}
            
         <div  className="regBg mt-8 rounded pt-20 pb-20">
    
     <Toaster></Toaster>
    <div className="login mx-auto w-[85%]  max-w-[1620px]  md:ml-auto p-8 text-white backdrop-blur-3xl md:backdrop-blur-none md:w-[60%]  ">

    <form onSubmit={regFormHandle} >

      <h1 className="font-bold text-3xl text-white">Registar</h1>
      <p>Welcome to us!</p>



      <hr />


      <label className="form-control w-full  ">
<div className="label mt-4">
<span className="label-text text-white font-semibold">Name</span>

</div>
<input type="text"  name="name" placeholder="Enter Your Name" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>


      <label className="form-control w-full  ">
<div className="label mt-4">
<span className="label-text text-white font-semibold">Email</span>

</div>
<input required type="email" name="email" placeholder="Enter Your Email" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]"  />
<div className="label">

</div>
</label>



<label className="form-control w-full  ">
<div className="label mt-4">
<span className="label-text text-white font-semibold">Photo </span>

</div>
{/* <input type="text" name="photo" placeholder="Enter Your Photo URL" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" /> */}

              
             
       

              <input
                required
                type='file'
              
                name='photo'
                accept='image/*'



              />

          
     
<div className="label">

</div>
</label>

{/*rule  */}
<label className="form-control w-full  ">
<div className="label mt-4">
<span className="label-text text-white font-semibold">Role</span>

</div>
{/* <input required type="password" name="password" placeholder="Enter Your Password" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" /> */}

<select name="role" required className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" >

<option value="worker" className="text-black">  Worker
 </option>
<option value="taskCreator" className="text-black">  Task Creator

 </option>

</select>
<div className="label">

</div>
</label>

{/*  */}
      <label className="form-control w-full  ">
<div className="label mt-4">
<span className="label-text text-white font-semibold">Password</span>

</div>
<input required type="password" name="password" placeholder="Enter Your Password" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>



<input type="submit" className=" btn p-2  rounded-2xl mt-4  bg-[#4f847b] w-full" value={regiLoader? "loading...": "Registar"} />



    </form>

    <p className="mt-2 text-center font-bold ">Or Sign Up with</p> 
<div className=" text-center sm:flex items-center justify-center">
      

      
      <button onClick={signUpGoogle} className="btn justify-center flex gap-2 py-2 items-center bg-[#357488] sm:max-w-xs sm:w-auto  rounded-full w-full  hover:bg-[#4595ae] mt-2 text-white px-10 mr-3" > <FaGoogle></FaGoogle>  Goggle </button>
    
      </div>

    <p className="text-center mt-2">Already have an account? Please <Link to={'/login'} className="text-[#4f847b] font-bold underline text-lg"> Log In </Link></p>
    
    </div>
      </div>
      </div>
    );
};

export default Registar;