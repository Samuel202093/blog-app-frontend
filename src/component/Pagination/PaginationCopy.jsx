import React from 'react'

const PaginationC = ({postperpage,totalpost, paginate}) => {
     const pageNumbers = [];

     for (let i = 1; i <= 6; i++) {
         pageNumbers.push(i);   
     }

     console.log(pageNumbers);

  return (
    <nav>
       <ul className="pagination flex justify-end px-4 gap-1">
           {pageNumbers.map(number => (
               <li key={number} className="page-item border-blue-800 border nth">
                 <span onClick={()=> paginate(number)} className='page-link p-2 text-blue-700 cursor-pointer'>{number}</span>
               </li>
           ))}
       </ul>
    </nav>
  )
}

export default PaginationC