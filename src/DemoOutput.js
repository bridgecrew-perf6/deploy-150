import React from 'react'
const DemoOuteput = (props) => {
    console.log('demo runnng');
  return <p>  {props.show ?'thext':''} </p>
}

export default React.memo(DemoOuteput)