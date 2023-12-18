import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
//   const [change, goChange] = useState("");
  const [ischar, setChars] = useState(false);
  const [isNum, setNums] = useState(false);
  const [length,setLength] = useState(6)
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const copy = useRef()
  const copyfunc = useCallback(()=>{
    copy.current?.select()
    copy.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password])
const passwordgenerator=useCallback(()=>{
    var str = "";
    if (ischar == true && isNum == true) {
      str = "";
      for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        if (i % 2 == 0) {
          str+=randomIndex
          continue;
          
        }
        str = str + characters.charAt(randomIndex);
      }
    } else if (ischar == true) {
      str = "";
      for (i = 0; i < length; i++) {
        randomIndex = Math.floor(Math.random() * (characters.length - 11));
        str = str + characters.charAt(randomIndex);
      }
    } else if (isNum == true) {
      str = "";
      for (i = 0; i < length; i++) {
        randomIndex = Math.floor(Math.random() * 10);
        str = str + randomIndex
      }
    }
    else{
        str = "";
        for ( i = 0; i < length; i++) {
        randomIndex = Math.floor(Math.random() * characters.length);
          if (i % 2 == 0) {
            str+=randomIndex
            continue;
            
          }
          str = str + characters.charAt(randomIndex);
        }
      }

    console.log(ischar + " " + isNum);
    console.log(str);
    setPassword(str);
},[length, ischar, isNum])
  useEffect(() => {
    passwordgenerator()
    // var str = "";
    // if (ischar == true && isNum == true) {
    //   str = "";
    //   for (var i = 0; i < length; i++) {
    //     var randomIndex = Math.floor(Math.random() * characters.length);
    //     if (i % 2 == 0) {
    //       str+=randomIndex
    //       continue;
          
    //     }
    //     str = str + characters.charAt(randomIndex);
    //   }
    // } else if (ischar == true) {
    //   str = "";
    //   for (i = 0; i < length; i++) {
    //     randomIndex = Math.floor(Math.random() * (characters.length - 11));
    //     str = str + characters.charAt(randomIndex);
    //   }
    // } else if (isNum == true) {
    //   str = "";
    //   for (i = 0; i < length; i++) {
    //     randomIndex = Math.floor(Math.random() * 10);
    //     str = str + randomIndex
    //   }
    // }
    // else{
    //     str = "";
    //     for ( i = 0; i < length; i++) {
    //     randomIndex = Math.floor(Math.random() * characters.length);
    //       if (i % 2 == 0) {
    //         str+=randomIndex
    //         continue;
            
    //       }
    //       str = str + characters.charAt(randomIndex);
    //     }
    //   }

    // console.log(ischar + " " + isNum);
    // console.log(str);
    // setPassword(str);
  }, [passwordgenerator]);
  const change = (e)=>{
    setLength(e.target.value)
  }

  return (
    <div>
      <h1>RANDOM PASSWORD GENERATOR</h1>
      <input type="text" value={password} onChange={setPassword} ref={copy} />
      <button onClick={copyfunc}>
        click me
      </button>
      <input type="range" name="" id="" value={length} onChange={change}/>
      Number:
      <input
        type="checkbox"
        value={isNum}
        onChange={() => {
          setNums(!isNum);
        }}
        name="number"
      />
      Character:
      <input
        type="checkbox"
        value={ischar}
        onChange={() => {
          setChars(!ischar);
        }}
        name="character"
      />
    </div>
  );
}
export default PasswordGenerator;
