// import React, { useState, useContext, useEffect } from 'react'
// import { GlobalContext } from '../Context/GlobalState'
// import { Link, useNavigate, useParams } from 'react-router-dom';

// const EditUser = () => {
//     const { updateUser, users,selectedUserData } = useContext(GlobalContext);
//     const params = useParams()
//     let navigate = useNavigate();
//     console.log(selectedUserData,"88888")
//     const [selecteduser, setSelectedUser] = useState({
//         id: null,
//         name: users.name,
//         email: '',
//         password: '',
//         phone: '',
//     })
//     // console.log(selecteduser, "9090909090jkjkjk")



//     const CurrentUserId = params.id;

//     useEffect(() => {
//         const userId = CurrentUserId;

//         const selecteduser = users.find(user =>
//             user.id === userId
//         )
//         console.log("line no 29",selecteduser)
//         setSelectedUser({
//             id: selecteduser.id,
//             name: selecteduser.contactInfo.name,
//             email: selecteduser.contactInfo.email,
//             password: selecteduser.contactInfo.password,
//             phone: selecteduser.contactInfo.phone,
//         })
//     }, [users, CurrentUserId])



//     function onSubmit(e) {
//         e.preventDefault();
//         updateUser(selecteduser)
//         navigate("/userdata-list", { replace: true });
//     }

//     const onChange = (e) => {
//         e.preventDefault()
//         const arr = selecteduser.contactInfo
//         console.log(arr,"jijij")
//         const value = e.target.value
//         const AllData = {
//             ...selecteduser,
//             [e.target.name]: value
//         }
//         setSelectedUser(AllData)
//         console.log(AllData, "89898kkkkkk")
//     }

//     if (!selecteduser || !selecteduser.id) {
//         return <div>Invalid Employee ID.</div>;
//     }
//     // console.log(setSelectedUser,"9898bhbhh")

//     return (
//         <>
//             <form onSubmit={onSubmit} className="mt-5">
//                 <div className="flex flex-row flex-wrap">
//                     <div className="basis-full md:basis-2/4 mb-3">
//                         <label className="px-3 w-full">
//                             <span className="after:content-['*'] after:ml-0.5 after:text-pink-500 block text-sm font-medium text-slate-700 dark:text-slate-50">
//                                 Name
//                             </span>
//                             <input type="text" name="name" className="mt-2 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Please Enter Your Name" value={selecteduser.name}
//                                 onChange={onChange} />
//                         </label>
//                     </div>
//                     <div className="basis-full md:basis-2/4 mb-3">
//                         <label className="px-3 w-full">
//                             <span className="after:content-['*'] after:ml-0.5 after:text-pink-500 block text-sm font-medium text-slate-700 dark:text-slate-50">
//                                 Email
//                             </span>
//                             <input type="email" name="email" className="mt-2 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Please Enter Your Name" value={selecteduser.email}
//                                 onChange={onChange} />
//                         </label>
//                     </div>
//                     <div className="basis-full md:basis-2/4 mb-3">
//                         <label className="px-3 w-full">
//                             <span className="after:content-['*'] after:ml-0.5 after:text-pink-500 block text-sm font-medium text-slate-700 dark:text-slate-50">
//                                 Password
//                             </span>
//                             <input type="password" name="password" className="mt-2 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Please Enter Your Name" value={selecteduser.password}
//                                 onChange={onChange} />
//                         </label>
//                     </div>
//                     <div className="basis-full md:basis-2/4 mb-3">
//                         <label className="px-3 w-full">
//                             <span className="after:content-['*'] after:ml-0.5 after:text-pink-500 block text-sm font-medium text-slate-700 dark:text-slate-50">
//                                 Phone
//                             </span>
//                             <input type="number" name="phone" className="mt-2 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Please Enter Your Name" value={selecteduser.phone}
//                                 onChange={onChange} />
//                         </label>
//                     </div>
//                 </div>
//                 <div className="px-3 w-full mt-3">
//                     <button type="submit" className="px-4 py-2 bg-pink-600 mr-4 text-white rounded font-semibold">Add User</button>
//                     <Link to="/userdata-list">
//                         <button className="px-4 py-2 bg-cyan-600 text-md text-white rounded font-semibold">Cancle</button>
//                     </Link>
//                 </div>
//                 {/* <label className="block mb-3">
//                     <span className="after:content-['*'] after:ml-0.5 after:text-pink-500 block text-sm font-medium text-slate-700 dark:text-slate-50">
//                         Email
//                     </span>
//                     <input type="text" name="name" className="mt-2 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Please Enter Your Name" value={selecteduser.name}
//                         onChange={onChange} />
//                 </label>
//                 <button className="px-4 py-2 bg-pink-600 mr-4 text-white rounded font-semibold">Edit User</button>
//                 <Link to="/userdata-list">
//                     <button className="px-4 py-2 bg-cyan-600 text-md text-white rounded font-semibold">Cancle</button>
//                 </Link> */}
//             </form>
//         </>
//     )
// }

// export default EditUser