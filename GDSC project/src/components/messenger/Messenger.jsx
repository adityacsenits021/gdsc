import React,{useRef,useEffect,useState} from 'react'
import Message from './Message'
import { db, auth} from "../../database";
import SendIcon from '@mui/icons-material/Send';
import { collection, onSnapshot, serverTimestamp, addDoc,
    
    query, where,
    orderBy,doc, getDoc } from "firebase/firestore";

import './Messenger.css'

const Messenger = (props) => {
    const [patients, setpatients] = useState([])
    const [messages, setmessages] = useState([]);
    const [receiverId, setreceiverId] = useState("");
    const [sendmessage, setsendmessage] = useState("")
    const [toggleclass, settoggleclass] = useState("")
    const user=props.user
    const scrollRef=useRef();
    // const senderId=user.uid
    // const senderId="IZMxF6pScRR11WtDIBCkYA80dIJ3"
    // const senderId="JkVxSJXhnlcdaYc8rVBeTLdWycj2"
    const senderId=auth.currentUser.uid


    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);
      
    useEffect(() => {
        console.log(user)
        // console.log(auth.currentUser.uid)
        // console.log(user.uid)
        const colRef = collection(db, 'patients')
        // const q = query(colRef,
        //      where("name", "==", user.displayName),
        //       orderBy('createdAt'))
            //   console.log("")
        const unsubCol = onSnapshot(colRef, (snapshot) => {
            let persons = []
            snapshot.docs.forEach(doc => {
              persons.push({ ...doc.data(), id: doc.id })
            })
            console.log(persons)
            setpatients(persons)
          })
    
      
    }, [])
    useEffect(() => {
        // setreceiverId("")
        let msgs = []
        const colRef = collection(db, 'messages')
        const q = query(colRef,
             where("receiverId","==",(receiverId )),
             where("senderId","==",(auth.currentUser.uid )),
              orderBy('createdAt'))
              
        const unsubCol = onSnapshot(q, (snapshot) => {
            snapshot.docs.forEach(doc => {
              msgs.push({ ...doc.data(), id: doc.id })
            })
        
            // setmessages(msgs)
            // console.log("for first call",msgs)
          })
          
          const colRef1 = collection(db, 'messages')
              const q1 = query(colRef1,
                   where("receiverId","==",(auth.currentUser.uid )),
                   where("senderId","==",receiverId),
                    orderBy('createdAt'))
                    // console.log(q)
              const unsubCol1 = onSnapshot(q1, (snapshot) => {
                //   msgs = messages
                  snapshot.docs.forEach(doc => {
                    msgs.push({ ...doc.data(), id: doc.id })
                  })
                //   console.log("for second call",msgs)
                msgs.sort((a,b)=>{
                    // console.log(a.createdAt-b.createdAt)
                    return a.createdAt-b.createdAt;
                })
                  
                setmessages(msgs)
                })
        //   console.log("this is final upcoming messages",messages)
      return () => {
        unsubCol();
        unsubCol1();
      }
    },[messages])



  return (
    <div>
        <div class="container-anuj">



<div class="leftSide">
    {/* <!-- header --> */}
    <div class="header">
        <div class="userimg">
            <img src="user.jpg" class="cover"/>
        </div>
        <ul class="nav_icons">
            <li><ion-icon name="scan-circle-outline"></ion-icon></li>
            <li><ion-icon name="chatbox"></ion-icon></li>
            <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
        </ul>
    </div>
    {/* <!-- Search box --> */}
    <div class="search_chat">
        <div>
            <input type="text"  placeholder="Search or Start new chat" />
            <ion-icon name="search-outline"></ion-icon>
        </div>
    </div>
    {/* <!-- chatlist --> */}
    <div class="chatlist">
        {
            patients.map((patient)=>{
                return <div class="block "
                onClick={()=>{
                    setreceiverId(patient.uid)
                    
                }}
                >
                <div class="imgbx">
                    <img src="img1.jpg" class="cover"/>
                </div>
                <div class="details">
                    <div class="listHead">
                        <h4>{patient.name}</h4>
                        <p class="time">16:39</p>
                    </div>
                    <div class="message_p">
                        <p>Here is the first message and it extends beyond the size of the div</p> 
                    </div>
                </div>
            </div>
            })
        }
        
        
    </div>
</div>





<div class="rightSide">


    <div class="header">
        <div class="imgText">
            <div class="userimg">
                <img src="img1.jpg" class="cover"/>
            </div>
            <h4>Name One<br/><span>online</span></h4>
        </div>
        <ul class="nav_icons">
            <li><ion-icon name="search-outline"></ion-icon></li>
            <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
        </ul>
    </div>



    {/* <!-- chat Box --> */}

    <div class="chatBox" >
        {
            messages.map((message)=>{
                
                return <div className="ms" ref={scrollRef}>
                    <Message message={message} own={message.senderId===senderId} />
                </div>
            })
        }
        
        
    </div>
    
    {/* <!-- CHAT INPUT BOX --> */}
    <div class="chatbox_input">
    <ion-icon name="happy-outline"></ion-icon>
    <ion-icon name="attach-outline"></ion-icon>
    <input type="text" value={sendmessage} placeholder="Type a message to the patient"
    onChange={(e)=>{
        setsendmessage(e.target.value);
    }}
    />
    <div className="send"
    onClick={()=>{
        const colRef1 = collection(db, "messages");
        addDoc(colRef1, {
            senderId:auth.currentUser.uid,
            receiverId:receiverId,
            text:sendmessage,
            conversationId:`${auth.currentUser.uid}${receiverId}`,
       
          createdAt: serverTimestamp(),
        })
        setsendmessage("");


        
        
        
    }}
    >

    <SendIcon/>
    </div>
    <ion-icon name="mic"></ion-icon>
    </div>
</div>
</div>
    </div>
  )
}

export default Messenger