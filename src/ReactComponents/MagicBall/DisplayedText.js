import { useEffect, useState } from "react"

export default function DisplayedText(props) {
    const [messageState,setMessageState] = useState('ShakeMe');
    const answers = ['It is certain','It is decidedly so','Without a doubt','Yes — definitely','You may rely on it','As I see it, yes','Most likely','Outlook good','Signs point to yes','Yes',
    'Reply hazy, try again','Ask again later','Better not tell you now','Cannot predict now','Concentrate and ask again','Don’t count on it','My reply is no','My sources say no','Outlook not so good','Very doubtful'
];
    useEffect(()=>{
        if(props.disp){
            setMessageState('');
            setTimeout(setMessageState,1000,answers[Math.floor(Math.random()*(answers.length-1))]);
        }
    })
    return(
        <p className="Response">{messageState}</p>
    )
  }