import {React,useState} from 'react'
import '../Styles/Card.css'

const Card = () => {
    const [name,setName] = useState('');
    const [birthDate,SetBirthDate] = useState('');
    const [Email,SetEmail] = useState('');
    const [About,SetAbout] = useState('');
    const [CompanyName,SetCompanyName] = useState('');
    const [jobPost,SetJobPost] = useState('');
    const [jobLocation,SetJobLocation] = useState('')
    const [companyDescription,SetCompanyDescription] = useState('')
    const [fromDate,SetFromDate] = useState('')
    const [toDate,setToDate] = useState('')
    const [final,setFinal] = useState(false);
    const [collegeName,SetcollegeName] = useState('')
    const [collegeLocation,SetcollegeLocation] = useState('')
    const [aboutCollege,SetaboutCollege] = useState('') 
    const[collegeStartDate,SetcollegeStartDate] = useState('')
    const [collegeEndDate,SetcollegeEndDate] = useState('')
    const [skills,Setskills] = useState('')
    const[language,setLanguage] = useState('')
    const[projectName,SetProjectName] = useState('')
    const [projectAbout,SetProjectAbout] = useState('')
    const[projectRole,SetProjectRole] = useState('')

    
    const handleSave = () =>{
        setFinal(!final);
    }
  return (
      <>
      {
          !final && (<div className="Card">
          <form >
              <div className="name"><label>Name : <input type="text" name="name" onChange={event => setName(event.target.value)}/></label></div>
              <div><label> Birth Date : <input type="date" name="birthDate" onSelect={event => SetBirthDate(event.target.value)}/></label></div>
              <div><label> Email : <input type="text" name="email" onChange={event => SetEmail(event.target.value)}/></label></div>
              <div><label> About : <textarea  onChange={event => SetAbout(event.target.value)}/></label></div>
              <div> 
                  <h3>Experiences</h3>
                  <div>
                      <div><label> Company Name : <input type="text" name="company_name" onChange={event => SetCompanyName(event.target.value)}/></label></div>
                      <div><label> Job Post : <input type="text" name="job_post" onChange={event => SetJobPost(event.target.value)}/></label></div>
                      <div><label> Location : <input type="text" name="location" onChange={event => SetJobLocation(event.target.value)}/></label></div>
                      <div><label> Description : <input type="text" name="description" onChange={event=>SetCompanyDescription(event.target.value)} /></label></div>
                      <div><label> isCurrent : <input type='radio' name="isCurrent"/></label></div>
                      <div>
                          <label> From : <input type='date' name="from_date" onChange={event=>SetFromDate(event.target.value)} /></label>
                          <label> To : <input type='date' name="to_date" onChange={event=>setToDate(event.target.value)} /></label>
                      </div>
                  </div>
              </div>
              <div>
                  <h3>Education</h3>
                  <div><label> College Name : <input type="text" name="name" onChange={event=>SetcollegeName(event.target.value)} /></label></div>
                  <div><label> Location : <input type="text" name="location" onChange={event=>SetcollegeLocation(event.target.value)} /></label></div>
                  <div><label> About : <textarea onChange={event=>SetaboutCollege(event.target.value)} /></label></div>
                  <div>
                          <label> From : <input type='date' name="from_date" onChange={event=>SetcollegeStartDate(event.target.value)} /></label>
                          <label> To : <input type='date' name="to_date" onChange={event=>SetcollegeEndDate(event.target.value)}/></label>
                  </div>
              </div>
              <div>
                  <label><h3>Skills</h3></label>
                  <select onSelect={event => Setskills(event.target.value)}>
                      <option value="react">React</option>
                      <option value="html">HTML</option>
                      <option selected value="css">CSS</option>
                      <option value="javascript">JavaScript</option></select>
              </div>
              <div>
                  <h3>Languages</h3>
                  <select onSelect={event=>setLanguage(event.target.value)}>
                      <option value="java">Java</option>
                      <option value="python">Python</option>
                      <option selected value="goLang">Go Lang</option>
                  </select>
              </div>
              <div>
                  <h3>Projects</h3>
                  <div><label> Name : <input type="text" name="project_name" onChange={event=>SetProjectName(event.target.value)} /></label></div>
                  <div><label> About : <textarea onChange={event=>SetProjectAbout(event.target.value)} /></label></div>
                  <div><label> Project Role : <input type="text" name="project_role" onChange={event=>SetProjectRole(event.target.value)} /></label></div>
              </div>
              <div className='submit-btn'>
              <button type="button" name='submit' onClick={handleSave}>Save</button>
              </div>
          </form>
      </div>)
      }
      {
          final && (
              <>
              <div>
                <h1>Personal Details</h1>
                <h3>{name}</h3>
                <p>{birthDate}</p>
                <p>{Email}</p>
                <p>{About}</p>
              </div>
              <div>
                  <h1>Experiences</h1>
                  <h3>{CompanyName}</h3>
                  <p>{jobPost}</p>
                  <p>{jobLocation}</p>
                  <p>{companyDescription}</p>
                  <p>{fromDate}</p>  <p>{toDate}</p>
              </div>
              <div>
                  <h1>Education</h1>
                  <h3>{collegeName}</h3>
                  <p>{collegeLocation}</p>
                  <p>{aboutCollege}</p>
                  <p>{collegeStartDate}</p>
                  <p>{collegeEndDate}</p>
              </div>
              <div>
                  <h1>Skills</h1>
                  <h3>{skills}</h3>
              </div>
              <div>
                  <h1>Languages</h1>
                  <h3>{language}</h3>
              </div>
              <div>
                  <h1>Projects</h1>
                  <h3>{projectName}</h3>
                  <p>{projectAbout}</p>
                  <p>{projectRole}</p>
              </div>
              <button type="button" onClick={() => setFinal(false)}>Edit</button>
              </>


          )
      }
    
    </>)
}

export default Card