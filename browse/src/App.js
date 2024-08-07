import logo from './logo.svg';
import './App.css';
import Main from './Main.js';
import NavBar from './NavBar.js';
import ProductList from './ProductList.js';
import ReadMore from './ReadMore.js';
import Addjob from './Addjob.js';
import { useState,useEffect } from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const savedList = localStorage.getItem('list');
    if (savedList) {
      setList(JSON.parse(savedList));
    } else {
      // If no saved data, initialize with the default list
      setList([
        {
          "id": 1,
          "title": "Senior React Developer",
          "type": "Full-Time",
          "description": "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.",
          "location": "Boston, MA",
          "salary": "$70K - $80K",
          "company": {
            "name": "NewTek Solutions",
            "description": "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
            "contactEmail": "contact@teksolutions.com",
            "contactPhone": "555-555-5555"
          }
        },
        {
          "id": "2",
          "title": "Front-End Engineer (React & Redux)",
          "type": "Full-Time",
          "location": "Miami, FL",
          "description": "Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion for crafting beautiful and responsive web applications. Experience with UI/UX design principles and a strong attention to detail are highly desirable.",
          "salary": "$70K - $80K",
          "company": {
            "name": "Veneer Solutions",
            "description": "Veneer Solutions is a creative agency specializing in digital design and development. Our team is dedicated to pushing the boundaries of creativity and innovation to deliver exceptional results for our clients.",
            "contactEmail": "contact@loremipsum.com",
            "contactPhone": "555-555-5555"
          }
        },
        {
          "id": "3",
          "title": "React.js Dev",
          "type": "Full-Time",
          "location": "Brooklyn, NY",
          "description": "Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference. We offer competitive compensation and a collaborative work environment where your ideas are valued.",
          "salary": "$70K - $80K",
          "company": {
            "name": "Dolor Cloud",
            "description": "Dolor Cloud is a leading technology company specializing in digital solutions for businesses of all sizes. With a focus on innovation and customer satisfaction, we are committed to delivering cutting-edge products and services.",
            "contactEmail": "contact@dolorsitamet.com",
            "contactPhone": "555-555-5555"
          }
        },
        {
          "id": "4",
          "title": "React Front-End Developer",
          "type": "Part-Time",
          "description": "Join our team as a Part-Time Front-End Developer in beautiful Pheonix, AZ. We are looking for a self-motivated individual with a passion for creating engaging user experiences. This position offers flexible hours and the opportunity to work remotely.",
          "location": "Pheonix, AZ",
          "salary": "$60K - $70K",
          "company": {
            "name": "Alpha Elite",
            "description": "Alpha Elite is a dynamic startup specializing in digital marketing and web development. We are committed to fostering a diverse and inclusive workplace where creativity and innovation thrive.",
            "contactEmail": "contact@adipisicingelit.com",
            "contactPhone": "555-555-5555"
          }
        },
        {
          "id": "5",
          "title": "Full Stack React Developer",
          "type": "Full-Time",
          "description": "Exciting opportunity for a Full-Time Front-End Developer in bustling Atlanta, GA. We are seeking a talented individual with a passion for building elegant and scalable web applications. Join our team and make an impact!",
          "location": "Atlanta, GA",
          "salary": "$90K - $100K",
          "company": {
            "name": "Browning Technologies",
            "description": "Browning Technologies is a rapidly growing technology company specializing in e-commerce solutions. We offer a dynamic and collaborative work environment where employees are encouraged to think creatively and innovate.",
            "contactEmail": "contact@consecteturadipisicing.com",
            "contactPhone": "555-555-5555"
          }
        },
        {
          "id": "6",
          "title": "React Native Developer",
          "type": "Full-Time",
          "description": "Join our team as a Front-End Developer in beautiful Portland, OR. We are looking for a skilled and enthusiastic individual to help us create innovative web solutions. Competitive salary and great benefits package available.",
          "location": "Portland, OR",
          "salary": "$100K - $110K",
          "company": {
            "name": "Port Solutions INC",
            "description": "Port Solutions is a leading technology company specializing in software development and digital marketing. We are committed to providing our clients with cutting-edge solutions and our employees with a supportive and rewarding work environment.",
            "contactEmail": "contact@ipsumlorem.com",
            "contactPhone": "555-555-5555"
          }
        }
      ]);
    }
  }, []);
  const [editIndex, setEditIndex] = useState(null);
  const [bool,setBool]=useState(false);
  const deleteJob=(JobId)=>{
    const confirm =window.confirm('Are You Sure You Want To Delete Job In List')
    if(!confirm ) return;
    
      const del=list.filter((item)=>item.id!==JobId)
      setBool(true);
      setList(del);
      toast.success('Job Post Deleted Successfully !')
  }
  useEffect(() => {
    setBool(false);
  }, list);
  const[addList,setAddList]=useState([]);
  const [type,setType]=useState('Full-Time');
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [salary,setSalary]=useState('under $50k');
  const [location,setLocation]=useState('');
  const [companyName,setCompanyName]=useState('');
  const [companyDescription,setCompanyDesription]=useState('');
  const [contactEmail,setContactEmail]=useState('');
  const [contactPhone,setContactPhone]=useState('');
  
  // 
  const edit=(product)=>{
    setEditIndex(product.id);
    setTitle(product.title);
    setType(product.type);
    setLocation(product.location);
    setDescription(product.description);
    setSalary(product.salary);
    setCompanyName(product.company.name);
    setCompanyDesription(product.company.description);
    setContactEmail(product.company.contactEmail);
    setContactPhone(product.company.contactPhone);  
  }
  const handleSubmit=()=>{
    
    const newJob={
      id:editIndex? editIndex : list.length? list[list.length-1].id+1 : 1,
        title,
        type,
        location,
        description,
        salary,
        company:{
            name:companyName,
            description:companyDescription,
            contactEmail,
            contactPhone
        }
    }
    const newList = editIndex
      ? list.map((job) => (job.id === editIndex ? newJob : job))
      : [...list, newJob];
    setList(newList)
    setTitle('');
    setType('');
    setLocation('');
    setDescription('');
    setSalary('');
    setCompanyName('');
    setCompanyDesription('');
    setContactEmail('');
    setContactPhone('');

    toast.success(editIndex? "Job Updated Succesfully ! ": "Job Added Successfully !")
  
  
}




useEffect(() => {
  localStorage.setItem('list', JSON.stringify(list));
}, [list]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main list={list} />} />
        <Route path="/NavBar" element={<NavBar  />} />
        
        <Route path="/ProductsLists" element={<ProductList list={list}/>} />
        <Route path="/ReadMore/:id" element={<ReadMore list={list} deleteJob={deleteJob} bool={bool}  edit={edit}
         
        />} />
        
        <Route path="/Addjob" element={<Addjob type={type}
                setType={setType}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                salary={salary}
                setSalary={setSalary}
                location={location}
                setLocation={setLocation}
                companyName={companyName}
                setCompanyName={setCompanyName}
                companyDescription={companyDescription}
                setCompanyDescription={setCompanyDesription}
                contactEmail={contactEmail}
                setContactEmail={setContactEmail}
                contactPhone={contactPhone}
                setContactPhone={setContactPhone}
                handleSubmit={handleSubmit}
                // 
                
        />} />
      
      </Routes>
      <ToastContainer />
      </>
    
  );
}

export default App;
