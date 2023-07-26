
function LetterInfo({symbol, isVowel})
//parameters are "destructured" symbol and isVowel is the keys from the letter object specified in the Letter function where LetterInfo is called from, or the props which the function knows it will be using
{
    console.assert(typeof(isVowel) === 'boolean', "isVowel prop in LetterInfo is wrong type")
    console.assert(symbol.lowerCase != null, 'symbol prop in LetterInfo has no property lowerCase')
    return (
        <div>
            <h3>Upper Case: {symbol.upperCase}</h3>
            <h3>Lower Case: {symbol.lowerCase}</h3>
            <h3>{isVowel ? "Vowel" : "Consonant" }</h3>
        </div>
    )
}
export default LetterInfo
