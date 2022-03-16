import React from 'react'
import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div>
        


<footer>
<div class="footer_content">
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt commodi
    rerum impedit optio iste a fugiat cupiditate natus excepturi recusandae
    nesciunt dolorem, sunt ut quam quo eligendi nobis illo possimus. Aut, eos
    voluptatibus. Alias, iusto!
  </p>
  
  <div class="social_icon">

    <a id="icon-s" href="https://www.facebook.com/srijan.nits/" >
		<InstagramIcon/>
		</a>
    <a href="">
		<FacebookIcon/>
	</a>
      <a  id="icon-s" href="https://www.linkedin.com/company/srijan-nit-silchar"><i id="Linkedin" class="fa-brands fa-linkedin-in fa-linkedin-in-1"></i></a>
    </div>

</div>
</footer>

    </div>
  )
}

export default Footer