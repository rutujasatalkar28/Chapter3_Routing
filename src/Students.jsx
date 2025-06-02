import React from 'react';
import { Link } from 'react-router-dom';

function Students(props) {
    let students = [
        {id:1,name:'Sakshi'},
        {id:2,name:'Pallavi'},
        {id:3,name:'Rutuja'}
    ]
    return (
        <div>
            {
                students.map((s)=>{
                    return (
                        <>
                        <Link to ={`/Stud_Details/${s.id}`} keys={s.id}>{s.name}</Link><br/>
                        </>
                    )
                })
            }
        </div>
    );
}

export default Students;