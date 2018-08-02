import React,{Component} from 'react';
import ProfileTableList from './ProfileTableList';


export default class ProfilePage extends Component{
    constructor(){
        super()
        this.state={
         profiles:[],
          firstName:"",
          lastName:"",
          gender:"",
          over18:false
        }
      }
      onhandlChange(e){
        const name=e.target.name;
        const value=e.target.type==="checkbox"?
        e.target.checked:e.target.value
        this.setState({
          [name]:value
        })
        console.info(value)
      }

    deleteRecord(index){
        console.info(index)
    let newProfiles = this.state.profiles;

    newProfiles.splice(index, 1);

    this.setState({
      profiles: newProfiles
    });
   }

   updateRecord(index, firstName, lastName, gender, over18){
    this.state.profiles[index].firstName = firstName;
    this.state.profiles[index].lastName = lastName;
    this.state.profiles[index].gender = gender;
    this.state.profiles[index].over18 = over18;

    this.setState({
      profiles: this.state.profiles
    });
  };



   saveProfile(){
     let newId;
     if (this.state.profiles.length!=0)
     {
       newId =this.state.profiles[this.state.profiles.length-1].id+1
     }else{
       newId=1
     }
     var newObj={id:newId,
               firstName:this.state.firstName,
               lastName:this.state.lastName,
               gender:this.state.gender,
               over18:this.state.over18
          }
     let newProfiles=this.state.profiles;
     newProfiles.push(newObj)
     this.setState({id:"",firstName:"",lastName:"",gender:"",over18:"",profiles:newProfiles})
   }

    render(){
        return(<div className="container"> 
        <h2 className="text-info">ReactJs CRUD Demo </h2>
     <form  onChange={(e)=>this.onhandlChange(e)}>
       
       <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
           <input className="form-control" type="text" name="firstName" id="firstName" placeholder="First Name" value={this.state.firstName} />
        </div> 

        <div className="form-group">
           <label>Last Name: </label>
           <input className="form-control" type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} />
        </div> 
        <div className="form-group">
            <select className="form-control" value={this.state.gender} name="gender"> 
              <option value="please"> Please Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">Other</option>
            </select>
         </div> 
 
         <div className="checkbox">
          <label>
           Over 18 <input  type="checkbox" name="over18" value={this.state.over18} checked={this.state.over18}/>
          </label>  
           </div> 
           <hr/>
    </form>
    <div className="list-group">
      <p className="list-group-item">First Name:<span className="text-success"> {this.state.firstName} </span>  </p>
      <p className="list-group-item">Last Name: <span className="text-success">{this.state.lastName}</span> </p>
      <p className="list-group-item">Gender: <span className="text-success">{this.state.gender}</span> </p>
      <p className="list-group-item">Over18: <span className="text-success">{this.state.over18?"true":"false"}</span> </p>
    </div>
    <br/>
        <button className="btn btn-primary" onClick={()=>this.saveProfile()}>
          Submit
        </button>
        <ProfileTableList profiles={this.state.profiles}  deleteRecord={()=>this.deleteRecord()} updateRecord={(index, firstName, lastName, gender, over18)=>this.updateRecord(index, firstName, lastName, gender, over18)}/>
        <br />
        </div>)
    }
}



