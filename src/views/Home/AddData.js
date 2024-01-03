import React from 'react'
import {Typography,TextField, Box,Button,Paper} from '@material-ui/core';
import './style.css';


const AddData = ({handleCloseAdd,handleAddFormChange,addFormData,handleAddFormSubmit,onImageChange}) => {
  return (
    <div style={{marginTop:'0px'}} id='NewStudents'>
    <div>
    
        <h1 > Add New Students</h1> <br></br>
     <div className='root'>
        <div className='main'>
             <div className='texte'>Students Details</div>
       </div>
    </div>
  <Paper>  
         <div className='container'>
           <div className='bloc1'>
               <Typography style={{fontWeight:'bold',}}> Photo *</Typography>
                 <div style={{padding:'60px 50px 0px 0px'}}>
                   <Box component="span" sx={{ p: 7,width:'10px', border: '1px dashed grey'}}>
                   <img style={{width:'50px'}} src={addFormData.profile}  />
                   </Box>
                   <input className='profil1'  type="file"  id='image'  name="myImage"  onChange={onImageChange} />
                  </div>
             </div>
    
              <div className='bloc'>
                <Typography style={{fontWeight:'bold',}}> First Name *</Typography>
                <TextField
                    onChange={handleAddFormChange}  
                   id="firstnames"  variant="outlined"
                   style={{  width: '98%'}}  
                  type="text"   placeholder='First Name...'
                />
                  <div className='deux'>
                     <div>
                     <Typography style={{fontWeight:'bold',}}>Date / Place of Birth * </Typography>
                        <TextField
                            onChange={handleAddFormChange}
                           id="date"  variant="outlined"
                           style={{  width: '98%'}}  
                           type="text"   placeholder='date...'
                           />
                        </div>
                     <div>
                      <Typography style={{color:'transparent',}}>  place </Typography>
                         <TextField
                           onChange={handleAddFormChange}
                          id="place"  variant="outlined"
                          style={{  width: '100%'}}  
                          type="text"   placeholder='place...'
                       />
                     </div>
                  </div>
               <Typography style={{fontWeight:'bold',}}>  Email </Typography>
               <TextField
                   onChange={handleAddFormChange}
                  id="email"  variant="outlined"
                  style={{ width: '100%'}}   
                  type="text"    placeholder='email...'
                />

              <Typography style={{fontWeight:'bold',}}>  Adress * </Typography>
               <textarea  onChange={handleAddFormChange}  id='address' style={{width:'100%'}}>
               </textarea>
               <Typography style={{float:"right",marginTop:'-30px'}}> /20000 </Typography>


             </div>  

          <div className='bloc'>
             <Typography style={{fontWeight:'bold',}}>Last Name * </Typography>
             <TextField
                onChange={handleAddFormChange}
               id="lastname"  variant="outlined"
               style={{  width: '100%'}}  
               type="text"   placeholder='Last Name...'
              />

             <Typography style={{fontWeight:'bold',}}>Parent Name * </Typography>
             <TextField
                onChange={handleAddFormChange}
               id="parentname"  variant="outlined"
               style={{  width: '100%'}}  
               type="text"   placeholder='parent Name...'
              />

             <Typography style={{fontWeight:'bold',}}>Phone * </Typography>
             <TextField
                onChange={handleAddFormChange}
               id="phone"  variant="outlined"
               style={{  width: '100%'}}  
               type="text"   placeholder='+1234567890'
              /> 
          </div>  
    </div>   
        <br></br><br></br>
</Paper>
</div>
<br></br><br></br>



<div>
     <div className='root'>
        <div className='main'>
             <div className='texte'>Parent details</div>
       </div>
    </div>
  <Paper>     
         <div className='container'>
            <div className='bloc'>
                <Typography style={{fontWeight:'bold',}}>Father Name *</Typography>
                <TextField
                    onChange={handleAddFormChange}   
                   id="fathername"  variant="outlined"
                   style={{  width: '100%'}}  
                  type="text"   placeholder='father name...'
                />

               <Typography style={{fontWeight:'bold',}}>  phone * </Typography>
               <TextField
                onChange={handleAddFormChange}
               id="phonefather"  variant="outlined"
               style={{  width: '100%'}}  
               type="text"   placeholder='phone...'
              />

  <Typography style={{fontWeight:'bold',}}> Students Password * </Typography>

</div>  

          <div className='bloc'>
             <Typography style={{fontWeight:'bold',}}> Mother Name * </Typography>
             <TextField
                onChange={handleAddFormChange}
               id="mothername"  variant="outlined"
               style={{  width: '100%'}}  
               type="text"   placeholder='mother...'
              />

             <Typography style={{fontWeight:'bold',}}> Phone * </Typography>
             <TextField
                onChange={handleAddFormChange}
               id="phonemother"  variant="outlined"
               style={{  width: '100%'}}  
               type="text"   placeholder='phone...'
              />
              
              <Button
              style={{ backgroundColor:'#003366',width:'100px',color:'white'}}
              type='submit' 
               onClick={() =>handleAddFormSubmit(event) }
              > 
                  SAVE
              </Button>
                

                &nbsp; &nbsp;
               <Button
              style={{ backgroundColor:'#003366',width:'100px',color:'white'}}
              type='submit' 
               onClick={() =>handleCloseAdd(event) }
              > 
                  CANCEL
              </Button> 
          
          </div> 

         < div style={{width:'100px',textAlign:"center"}}>
         </div>
    </div>   

        <br></br><br></br>
</Paper>
</div>


</div>

  )
}

export default AddData
