import React from 'react'
import PostAPI from './../API/PostAPI';
import Contextuse from '../Usecontext Hook/Contextuse';
import Getname from '../Usecontext Hook/Getname';
import Displayname from '../Usecontext Hook/Displayname';
import Counter from './Counter App/Counter';
import Usename from '../Usecontext Hook/usecontextPractice/Usename';
import UseSetname from '../Usecontext Hook/usecontextPractice/UseSetname';
import CreateContext from '../Usecontext Hook/usecontextPractice/CreateContext';

const Main = () => {
  return (
    <div>
      {/* <h1>hi</h1> */}
      {/* <Link to="/Navigate">Navi</Link> */}
      {/* {/* <PostAPI/> */}
      
      {/* <Contextuse>
        <Getname/>
        <Displayname/>
      </Contextuse>  */}
      {/* <Counter/> */}
         <CreateContext>
          <Usename/>
          <UseSetname/>
         </CreateContext>

    </div>
  )
}

export default Main