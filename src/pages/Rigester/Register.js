import './css/style.css'
import './js/main'
import $ from 'jquery'
import image2 from './images/image-2.png'

function Register(){
    return(
        <div class="wrapper">
			<div class="inner">          
				<form action="">
					<h3>New Account?</h3>
					<div class="form-holder">
						<span class="lnr lnr-user"></span>
						<input type="text" class="form-control" placeholder="Full Name" required />
					</div>
					<div class="form-holder">
						<span class="lnr lnr-envelope"></span>
						<input type="text" class="form-control" placeholder="Mail" required />
					</div>
					<div class="form-holder">
						<span class="lnr lnr-calendar-full"></span>
						<input type="text" class="form-control" placeholder="Your Birth Date As 1990/09/01" required />
					</div>
					<div class="form-holder">
						<span class="lnr lnr-lock"></span>
						<input type="password" class="form-control" placeholder="Password" required />
					</div>
					<div class="form-holder">
						<span class="lnr lnr-lock"></span>
						<input type="password" class="form-control" placeholder="Confirm Password" required />
					</div>
					<button className='btnRegister'>
						<span>Register</span>
					</button>
				</form>
				<img src={image2} alt="IMG" class="image-2"/>
			</div>
			
		</div>
    )
}

export default Register