import React,{useState} from 'react'

const Message  = ()=>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [subject,setSubject] = useState("")
    const PostData = ()=>{
        fetch("/send",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                subject,
                message
            })
        }).then(res=>res.json())
        .then(data=>{
            alert(data.message)
            setMessage('')
            setName('')
            setSubject('')
            setEmail('')
        }).catch(err=>{
            console.log(err)
        })
    }
   return (
      <div style={{maxWidth: '60%', display:'flex', flexDirection: 'column', alignItems:'center'}} className="mycard">
          <div className="card auth-card input-field">
            <h2>Send me a Message</h2>
            <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <input
            type="text"
            placeholder="subject"
            value={subject}
            onChange={(e)=>setSubject(e.target.value)}
            />
            <textarea
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>PostData()}
            >
                Send Message
            </button>
        </div>
      </div>
   )
}


export default Message