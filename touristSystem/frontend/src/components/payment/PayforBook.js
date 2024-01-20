import {useLocation} from 'react-router-dom'
const PayforBook=(e)=>{
 const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const destination = searchParams.get('destination');
const date = searchParams.get('date');
const transportation = searchParams.get('transportation');
const duration = searchParams.get('duration');
const number=searchParams.get('number')
const email=searchParams.get('email')
console.log("\n\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
console.log(destination)
console.log(email)
return(
<div>
Payment For Book
</div>
)
}
export default PayforBook;
