function validate()
{
      
    let firstName=document.getElementById("fname").value;
    let lastName=document.getElementById("lname").value;
    let emailId=document.getElementById("email").value;
    let contactNo=parseInt(document.getElementById("contact").value);
    let age=parseInt(document.getElementById("age").value);
    let form=document.getElementById("form")
    let errorName=document.getElementById("errorfname");


    // if(lastName=="" || !isNaN(lastName))
    if(!isNaN(firstName))
    {
      alert("Invalid Input for first Name");
      return false;
    }
    if(!isNaN(firstName))
    {
      alert("Invalid Input for last Name");
      return false;
    }
    if(emailId)
    {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(! emailId.match(mailformat))
      {
        alert("Invalid Email ID");
        return false;
      }
    }
    if(isNaN(contactNo))
    {
      alert("Invalid Mobile Number");
      return false;
    }
    if(isNaN(age))
    {
      alert("Invalid Age");
      return false;
    }
}


// form.addEventListener("submit",(e)=>{
//   // let errmessage=[]
//   if(!isNaN(firstName))
//   {
//     e.preventDefault();
//     errorName.innerHTML="Invalid Name";
//   }
//   // if(errmessage.length>0)
//   // {
//   //   e.preventDefault();
//   //   errorName.innerHTML="Invalid first Name";
//   // }
// })