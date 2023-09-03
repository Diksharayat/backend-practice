import React from 'react';
 function Form(){
    return(
        <>
      
<h1>Enter Your Details</h1>

       <form className="form-group" >
                                        <input type={"text"} placeholder="Mobile Name" className="form-control" autoComplete="off" name="mobile" /><br />
                                        {/* <input type={'radio'} name="gender" value={'male'} />male
                                        <input type={'radio'} name="gender" value={'female'} />female */}
                                        <input type={"text"} placeholder="Brand Name" className="form-control" autoComplete="off" name="brand" /><br />
                                        <input type={"number"} placeholder="Cost Price" className="form-control" autoComplete="off" name="cp" /><br />
                                        <input type={"number"} placeholder="Selling Price" className="form-control" autoComplete="off" name="sp" /><br />
                                        <input type={"number"} placeholder="MRP" className="form-control" autoComplete="off" name="mrp" /><br />

       </form>
        
        </>
    )
}
export default Form;