import React from 'react'
const tabledata = [
    {
        id: 1,
        src: "https://img.daisyui.com/images/profile/demo/2@94.webp",
        name: "Hart Hagerty",
        members: [
            {
                id: 1,
                image_member: "https://img.daisyui.com/images/profile/demo/2@94.webp"
            }, {
                id: 1,
                image_member: "https://img.daisyui.com/images/profile/demo/2@94.webp"
            }
        ],
        buget: "14000",
        completion: "60"
    },
    {
        id: 2,
        src: "https://img.daisyui.com/images/profile/demo/2@94.webp",
        name: "agvbhnjm",
        members: [
            {
                id: 1,
                image_member: "https://img.daisyui.com/images/profile/demo/2@94.webp"
            }, {
                id: 1,
                image_member: "https://img.daisyui.com/images/profile/demo/2@94.webp"
            }
        ],
        buget: "no",
        completion: "10"
    },
]
const Table = () => {
  return (
      <div className="p-4 overflow-x-auto shadow-md">
          <table className="table">
              {/* head */}
              <thead>
                  <tr className="capitalize text-base-300" >

                      <th>companies</th>
                      <th>members</th>
                      <th>budget</th>
                      <th>completion</th>
                  </tr>
              </thead>
              <tbody  >


                  {tabledata.map((data, index) => (

                      <>
                          <tr key={index}>
                              <td>
                                  <div className="flex items-center flex-1 gap-4">
                                      <div className="avatar">
                                          <div className="w-12 h-12 mask mask-squircle">
                                              <img
                                                  src={data.src}
                                                  alt={data.name} />
                                          </div>
                                      </div>
                                      <div>
                                          <div className="font-bold text-base-300">{data.name}</div>

                                      </div>
                                  </div>
                              </td>
                              <td className="">
                                  <div className="flex flex-row items-start justify-center w-full h-full text-base-300">

                                      {data.members.map((meber) => (
                                          <div className="w-[20px] h-[20px] bg-gray-300 rounded-full ring-2 ring-white overflow-hidden" key={meber.id} >
                                              <img
                                                  src={meber.image_member}
                                                  alt={meber.img} />
                                          </div>
                                      ))}
                                  </div>

                              </td>
                              <td className="text-base-300" >${data.buget}</td>
                              <td>
                                  <p className="text-base-300" >{data.completion}%</p>
                                  <progress
                                      className="progress bg-base-200 progress-primary"
                                      value={data.completion}
                                      max="100"
                                  ></progress>
                              </td>

                          </tr>
                      </>
                  ))}

              </tbody>

          </table>
      </div>
  )
}

export default Table