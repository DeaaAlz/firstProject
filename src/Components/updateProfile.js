import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './updateProfile.css'
import Header from '../pages/Home/header'
import Footer from '../pages/Home/footer'

function updateProfile(){
    return(
        <>
        <Header></Header>
        <form method='post'>
            <div className='container'>
            
                <div class="mb-4 row">
                    <label for="staticEmail" class="col-sm-4 col-form-label">Email</label>
                    <div class="col-sm-8">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                    </div>
                </div>
                <div class="mb-4 row">
                    <label for="inputPhone" class="col-sm-4 col-form-label">Phone</label>
                    <div class="col-sm-8">
                    <input type="number" class="form-control" id="inputPhone" name='phone' required/>
                    </div>
                </div>
                <div class="mb-4 row">
                    <label for="oldpass" class="col-sm-4 col-form-label">Old Passwrd</label>
                    <div class="col-sm-8">
                    <input type="password" class="form-control" id="oldpass" name='oldPass' required/>
                    </div>
                </div>
                <div class="mb-4 row">
                    <label for="newpass" class="col-sm-4 col-form-label">New Password</label>
                    <div class="col-sm-8">
                    <input type="password" class="form-control" id="newpass" name='newPass' required/>
                    </div>
                </div>
                <div class="mb-4 row">
                    <label for="confirmPass" class="col-sm-4 col-form-label">Confirm Password</label>
                    <div class="col-sm-8">
                    <input type="password" class="form-control" id="confirmPass" required/>
                    <button type='submit' className='btn btn-primary btnUpdate'>Update</button>
                
                    </div>
                </div>
                
        </div>
        </form>
        <Footer></Footer>
        </>
    )
}

export default updateProfile
