

function Header(){
    return (
        <div id="header-component">
          <h1>H{[1,2,3,4].map(n => n+1)} element rendered from a component </h1>  
        </div>
    )
}
export default Header

/*a component is just a javascript function
components MUST start with a capital
H{1+2} => H3
  -you put the javascript in {} so then anything within the brackets are evaluated
  -what is in the brackets MUST HAVE A RETURN VALUE (map, returns the values of the array, forEach doesnot)
*/