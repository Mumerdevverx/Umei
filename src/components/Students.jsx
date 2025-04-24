import React from 'react'

const Students = () => {
  const Student =[


    {
       name: "Umer",
       age: "20"
  
    },
    {
      name: "Ali",
      age: "26"
  
   },
   {
    name: "Zain",age: "29"
  
     }
  ]
  return (
    <div>
     {Student.map(std => <h1> I am {std.name} and I am {std.age} years old.</h1>) }

    </div>
  )
}

export default Students