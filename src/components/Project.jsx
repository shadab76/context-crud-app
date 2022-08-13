// import React,{useState} from 'react'
// import { Link } from 'react-router-dom'

// // const userobj={
// //     name:"",
// //     email:"",
// //     phone:"",
// //     password:""
// // }



// const Project = () => {
//     const [name, setname] = useState("")
//     const [email, setEmail] = useState("") 
//     const [password, setPassword] = useState("") 
//     const [phone, setPhone] = useState("")  

//     // const [user,setUser] = useState(userobj)
//     console.log(email,name,password,phone,"line99999")

//     const Submit=(e)=>{
//         e.preventDeafult()
//     //     if (name==='' || email==='' || password===''){
//     //         alert('Please fill in all fields')
//     //    }else{
//     //         alert(`Welcome ${setname}`)
//     //         setname('')
//     //         setEmail('')
//     //         setPassword('')
//     //     }
//     }
// //   const  HandlerChange=(e) =>{
// //     setUser({[e.terget.name]:e.terget.value
// //     })
    
// //     }

//   return (
//     <>
//          <form onSubmit={Submit} className="mt-5">
//                 <div className="flex flex-row flex-wrap">
//                     <div className="basis-full md:basis-2/4 mb-3">
//                         <label className="px-3 w-full">
//                             <span className="after:content-['*'] after:ml-0.5 after:text-pink-500 block text-sm font-medium text-slate-700 dark:text-slate-50">
//                                 Name
//                             </span>
//                             <input type="text" name="name" className="mt-2 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Please Enter Your Name" value={name}
//                                 onChange={(e) => setname(e.target.value)} />
//                         </label>
//                     </div>
//                     <div className="basis-full md:basis-2/4 mb-3">
//                     <label className="px-3 w-full">
//                         <span className="after:content-['*'] after:ml-0.5 after:text-pink-500 block text-sm font-medium text-slate-700 dark:text-slate-50">
//                             Email
//                         </span>
//                         <input type="email" name="email" className="mt-2 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Please Enter Your Name" value={email}
//                             onChange={(e) => setEmail(e.target.value)} />
//                     </label>
//                     </div>
//                     <div className="basis-full md:basis-2/4 mb-3">
//                     <label className="px-3 w-full">
//                         <span className="after:content-['*'] after:ml-0.5 after:text-pink-500 block text-sm font-medium text-slate-700 dark:text-slate-50">
//                             Password
//                         </span>
//                         <input type="password" name="password" className="mt-2 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Please Enter Your Name" value={password}
//                             onChange={(e) => setPassword(e.target.value)} />
//                     </label>
//                     </div>
//                     <div className="basis-full md:basis-2/4 mb-3">
//                     <label className="px-3 w-full">
//                         <span className="after:content-['*'] after:ml-0.5 after:text-pink-500 block text-sm font-medium text-slate-700 dark:text-slate-50">
//                             Phone
//                         </span>
//                         <input type="number" name="phone" className="mt-2 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Please Enter Your Name" value={phone}
//                             onChange={(e) => setPhone(e.target.value)} />
//                     </label>
//                     </div>
//                 </div>
//                 <div className="px-3 w-full mt-3">
//                 <button type="submit" className="px-4 py-2 bg-pink-600 mr-4 text-white rounded font-semibold">Submit</button>
//                 <Link to="/userdata-list">
//                     <button className="px-4 py-2 bg-cyan-600 text-md text-white rounded font-semibold">Cancle</button>
//                 </Link>
//                 </div>
                
//             </form>

//     </>
//   )
// }

// export default Project