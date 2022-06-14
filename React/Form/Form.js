import React, {useState, useEffect} from 'react'

const Form = () => {

    const [formData, setFormData] = useState({
        name: '', emailid: '', gender: '', favsport: ''
    });

    const clickAction = () => {
        console.table(formData)
    }

    return (
        <div className="App">
            <h1>Form</h1>
        
        <form className="Form">

            <div>
                <label>Name</label>
                <input type="text" onChange={(e) => setFormData({ ...formData, name: e.target.value })} ></input>
            </div>
            <div>
                <label>Email ID</label>
                <input type="text" onChange={(e) => setFormData({ ...formData, emailid: e.target.value })}></input>
            </div>

            <div>
                <h3>Gender</h3>
                <input type="radio" name="gender" value="Male" onChange={(e)=>setFormData({ ...formData, gender: e.target.value })} />Male
                <input type="radio" name="gender" value="Female" onChange={(e)=>setFormData({ ...formData, gender: e.target.value })} />Female
            </div>

            <h4>What sport(s) do you play?</h4>
            <div>
                <input type="checkbox" name="Cricket" value="Football" onChange={(e)=>setFormData({ ...formData, favsport: e.target.value })} />Football
                <input type="checkbox" name="Football" value="Cricket" onChange={(e)=>setFormData({ ...formData, favsport: e.target.value })} />Cricket
                <input type="checkbox" name="Batminton" value="Batminton" onChange={(e)=>setFormData({ ...formData, favsport: e.target.value })} />Batmiton
                <input type="checkbox" name="TableTennis" value="Table Tennis" onChange={(e)=>setFormData({ ...formData, favsport: e.target.value })} />Table Tennis
            </div>

            <button onClick={clickAction} >submit</button>
        </form>
        </div>
    );
}

export default Form;
