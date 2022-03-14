import React, {useState, ChangeEvent, FC} from 'react'
import { IState as Props } from '../interfaces';
interface IProps {
     people: Props['people']
     setPeople: React.Dispatch<React.SetStateAction <Props['people']>>
}
const AddToList: FC<IProps>= ({people, setPeople}) => {
     const [input, setInput] = useState({
          name: '',
          age: '',
          note: '',
          img : ''
     })
     const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
          setInput({
               ...input,
               [event.target.name]: event.target.value
          })
     }
     const handleSubmit = (): void => {
          if(!input.name || !input.age|| !input.img){

          }else{
               setPeople([
                  ...people,
                  {
                       name: input.name,
                       age: +input.age,
                       url: input.img,
                       note: input.note
                  }  
               ])
               setInput({
                    name: '',
                    age: '',
                    note: '',
                    img : ''
               })
          }
     }
  return (
    <div className='AddToList'>
         <input type='text'  placeholder='Name' className='AddToList-input' value={input.name} name = 'name' onChange={handleChange} />

         <input type='number'  placeholder='Age' className='AddToList-input' value={input.age} name = 'age' onChange={handleChange} />

         <input type='url'  placeholder='Image Url' className='AddToList-input' value={input.img} name = 'img' onChange={handleChange} />

         <textarea placeholder='Note' className='AddToList-input' value={input.note} name = 'note' onChange={handleChange} />
         <button className='AddToList-btn' onClick={handleSubmit}> Add to list</button>
    </div>
  )
}

export default AddToList