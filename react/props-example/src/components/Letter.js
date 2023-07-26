import Alphabet from './Alphabet.js'
import LetterInfo from './LetterInfo.js'
function Letter(props) {
    console.assert(props.letter != null, "letter prop in Letter.js is null")
    return (

        //▼passes letter object from App to to LetterInfo
        <div>
            <LetterInfo
                symbol={props.letter.symbol}
                isVowel={props.letter.isVowel}
            />
            <h3>Found in alphabets:</h3>
            <ul>
                {props.letter.alphabets.map(alphabet => <Alphabet 
                                                            key={alphabet} 
                                                            alphabet={alphabet} 
                                                            word={props.letter.usage[alphabet]}/>)}
            </ul>

        </div>
        //key is for the purposes of react, must be unique

    )
}
export default Letter