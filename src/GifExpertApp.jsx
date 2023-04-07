import { useState } from "react"
import { AddCategory,GifGrid } from "./components/";

export const GifExpertApp = () => {

  
  const [categories, setCategories] = useState([ 'Dragon ball']);
  
  const onAddCatergory = (newCategory) => {

    if( categories.find(category =>
       category.toLowerCase() === newCategory.toLowerCase())) 
       return;
    
    setCategories([newCategory, ...categories]);
    //setCategories(cat => [...cat, 'Super Campones']);
  }


  return (
    <>


      <h1>GifExpertApp</h1>


      <AddCategory 
          onNewCategory={ value => onAddCatergory(value)}
      />
   
        {
          categories.map( (category) =>  (
              <GifGrid key={category}  
                category={ category}/>
            ))
        }

    </>
  )
}
