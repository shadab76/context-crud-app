// import React, { useState, useContext } from 'react'
// import { GlobalContext } from '../Context/GlobalState'
// import { Link, useNavigate } from 'react-router-dom';
// import { v4 as uuid } from 'uuid'
// const AddUser = () => {
//     let navigate = useNavigate();
//     const { AddUser } = useContext(GlobalContext);

//     const [contactInfo, setContactInfo] = useState({
//         name:"",
//         email:"",
//         password:"",
//         phone:"",
//     })


//     function onSubmit(e) {
//         e.preventDefault();
//         const newUser = {
//             id: uuid(),
//             contactInfo
//         }
//         AddUser(newUser)
//         navigate("/userdata-list", { replace: true });
//         console.log(newUser)
//     }


//     const onChange = (e) => {
//         e.preventDefault();
//         setContactInfo({ ...contactInfo, [e.target.name]: e.target.value })
//         console.log(contactInfo)
//     }
//     return (
//         <>
//             <form onSubmit={onSubmit} className="mt-5">
//                 <div className="flex flex-row flex-wrap">
//                     <div className="basis-full md:basis-2/4 mb-3">
//                         <label className="px-3 w-full">
//                             <span className="after:content-['*'] after:ml-0.5 after:text-pink-500 block text-sm font-medium text-slate-700 dark:text-slate-50">
//                                 Name
//                             </span>
//                             <input type="text" name="name" className="mt-2 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Please Enter Your Name" value={contactInfo.name}
//                                 onChange={onChange} />
//                         </label>
//                     </div>
//                     <div className="basis-full md:basis-2/4 mb-3">
//                     <label className="px-3 w-full">
//                         <span className="after:content-['*'] after:ml-0.5 after:text-pink-500 block text-sm font-medium text-slate-700 dark:text-slate-50">
//                             Email
//                         </span>
//                         <input type="email" name="email" className="mt-2 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Please Enter Your Name" value={contactInfo.email}
//                             onChange={onChange} />
//                     </label>
//                     </div>
//                     <div className="basis-full md:basis-2/4 mb-3">
//                     <label className="px-3 w-full">
//                         <span className="after:content-['*'] after:ml-0.5 after:text-pink-500 block text-sm font-medium text-slate-700 dark:text-slate-50">
//                             Password
//                         </span>
//                         <input type="password" name="password" className="mt-2 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Please Enter Your Name" value={contactInfo.password}
//                             onChange={onChange} />
//                     </label>
//                     </div>
//                     <div className="basis-full md:basis-2/4 mb-3">
//                     <label className="px-3 w-full">
//                         <span className="after:content-['*'] after:ml-0.5 after:text-pink-500 block text-sm font-medium text-slate-700 dark:text-slate-50">
//                             Phone
//                         </span>
//                         <input type="number" name="phone" className="mt-2 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Please Enter Your Name" value={contactInfo.phone}
//                             onChange={onChange} />
//                     </label>
//                     </div>
//                 </div>
//                 <div className="px-3 w-full mt-3">
//                 <button className="px-4 py-2 bg-pink-600 mr-4 text-white rounded font-semibold">Add User</button>
//                 <Link to="/userdata-list">
//                     <button className="px-4 py-2 bg-cyan-600 text-md text-white rounded font-semibold">Cancle</button>
//                 </Link>
//                 </div>
                
//             </form>
//         </>
//     )
// }

// export default AddUser