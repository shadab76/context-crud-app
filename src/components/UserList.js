// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'

const UserList = () => {
  const { users, RemoveUser } = useContext(GlobalContext)

  console.log(users,'9999999')
  return (
    <>
      <div className="mt-4 px-6 mb-10">
        <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 bg-white dark:bg-slate-50">
            <thead className="bg-gray-300 dark:bg-slate-900 dark:text-zinc-200 transition-all duration-500">
              <tr>
                <th scope="col" className="group px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-50 uppercase tracking-wider"
                >
                  Name
                </th>
                <th scope="col" className="group px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-50 uppercase tracking-wider"
                >
                  Email
                </th>
                <th scope="col" className="group px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-50 uppercase tracking-wider"
                >
                  Password
                </th>
                <th scope="col" className="group px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-50 uppercase tracking-wider"
                >
                  Phone
                </th>
                {/* <th scope="col" className="group px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-50 uppercase tracking-wider"
                >
                  Edit
                </th> */}
                <th scope="col" className="group px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-50 uppercase tracking-wider"
                >
                  Delete
                </th>
              </tr>
            </thead>
            <tbody
              className="bg-white divide-y divide-gray-200"
            >
              {
                users.length > 0 ? (
                    users.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td
                            className="px-6 py-4 whitespace-nowrap"
                            role="cell"
                          >
                            <div className="text-sm text-gray-500">{item.contactInfo.name}</div>
                          </td>
                          <td
                            className="px-6 py-4 whitespace-nowrap"
                            role="cell"
                          >
                            <div className="text-sm text-gray-500">{item.contactInfo.email}</div>
                          </td>
                          <td
                            className="px-6 py-4 whitespace-nowrap"
                            role="cell"
                          >
                            <div className="text-sm text-gray-500">{item.contactInfo.password}</div>
                          </td>
                          <td
                            className="px-6 py-4 whitespace-nowrap"
                            role="cell"
                          >
                            <div className="text-sm text-gray-500">{item.contactInfo.phone}</div>
                          </td>
                          {/* <td
                            className="px-6 py-4 whitespace-nowrap"
                            role="cell"
                          >
                            <Link to={`/edit-user/${item.id}`} className='text-semi-bold text-sm text-rose-600'>
                              Edit
                            </Link>
                          </td> */}
                          <td
                            className="px-6 py-4 whitespace-nowrap"
                            role="cell"
                          >
                            <button className='px-4 py-2 bg-pink-600 text-white rounded font-semibold text-sm' onClick={() => RemoveUser(item.id)}>
                              Delete
                            </button>
                            {/* <FontAwesomeIcon icon={}/> */}
                          </td>
                        </tr>
                      )
                    })
                ) : (
                  <>
                    <tr>
                    <td className='text-center w-full' colSpan="6">
                        <h5 className="px-6 py-4 whitespace-nowrap">No Users</h5>
                    </td>
                    </tr>
                  </>
                )
              }

            </tbody>
          </table>
        </div>
      </div>

      {/* {users.map((item) => (
            <tr key={item.id}>
              <td>{users.name}</td>
              <td>
                <Link to={`/edit-user/${item.id}`} className='text-semi-bold text-rose-600'>
                  Edit
                </Link>
                <Link className='text-semi-bold text-rose-600' onClick={() => RemoveUser(item.id)}>
                  Delete
                </Link>
              </td>
            </tr>
          ))}
          <div className='p-5 bg-gray-300 rounded'>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{users.name}</td>
              <td>
                <Link to={`/edit-user/${item.id}`} className='text-semi-bold text-rose-600'>
                  Edit
                </Link>
                <Link className='text-semi-bold text-rose-600' onClick={() => RemoveUser(item.id)}>
                  Delete
                </Link>
              </td>
            </tr>
          ))}
          </div> */}
    </>
  )
}

export default UserList