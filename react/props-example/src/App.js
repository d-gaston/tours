import Letter from './components/Letter.js'
function App() {

  const letter = {
    symbol:{
      upperCase:'A',
      lowerCase:'a'
    },
    isVowel:true,
    alphabets: ['latin', 'cyrillic','greek'],
    usage: {
      latin: 'Athens',
      cyrillic:'Афины',
      greek:'Αθήνα'
    }
  }

  // ▼ passes the letter object to the Letter component

  return (
    <div>
      <Letter letter={letter} />
    </div>
  )
}

export default App;

/*let argumentObject = {}
argumentObject.letter = letter
Letter(argumentObject)
HTML tags tell us we are starting 
*/