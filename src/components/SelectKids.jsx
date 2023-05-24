import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import {updateData} from '../feature/chartSlice'
import { useDispatch } from "react-redux";

const SelectKids = ({setSelectedStudent, page}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [students, setStudents] = useState([])
    const dispatch = useDispatch()

    const fetchKids = async () => {
        const res = await axios('http://localhost:8000/students')
        if(res.status === 200) {
          setStudents(res.data)
        //   console.log(res.data)
        }
      }
    
      
      const selectStudent = (id) => {
        if(page === 'progress') {
          let data = []
          const courses = (students.find(ele => ele.id === id)).courses
          courses.forEach(element => {
            // console.log(element)
            const newObj = {
              name: element.name,
              exams: element.exam_marks,
              test: element.test_marks,
              total: element.exam_marks + element.test_marks
            }
            data.push(newObj)
          });
          dispatch(updateData(data))
          return
        }
        setSelectedStudent(students.find(ele => ele.id === id))
        setIsOpen(!open)
      }
    
      useEffect(() => {
        fetchKids()
      }, [])

  return (
    <div className="relative">
      <div
        className="px-7 py-2 border w-max flex items-center gap-3 text-gray-500 font-semibold rounded-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        Select Kid
        {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
      </div>
      {isOpen && (
        <div className="bg-white absolute left-0 top-12 flex flex-col rounded-lg text-gray-500">
          {students?.map((student) => (
            <div
              className='border-b-2 p-3 cursor-pointer'
              key={student.id}
              onClick={() => selectStudent(student.id)}
            >
              {student.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectKids;
