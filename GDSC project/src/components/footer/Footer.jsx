import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
        <footer class="footer">
		<div class="upper_container">
			<div class="row">
				<div class="footer_column">
					<h4>Quick links</h4>
					<ul>
						<li><a href="#">Ekdam Upar</a></li>
						<li><a href="#">Thoda Upar</a></li>
						<li><a href="#">Thoda niche</a></li>
						<li><a href="#">Ekdam niche</a></li>
					</ul>
				</div>
				<div class="footer_column">
					<h4>col - 2</h4>
					<ul>
						<li><a href="#">2.1</a></li>
						<li><a href="#">2.2</a></li>
						<li><a href="#">2.3</a></li>
						<li><a href="#">2.4</a></li>
					</ul>
				</div>
				<div class="footer_column">
					<h4>col - 3</h4>
					<ul>
						<li><a href="#">link1</a></li>
						<li><a href="#">link2</a></li>
						<li><a href="#">link3</a></li>
						<li><a href="#">link4</a></li>
					</ul>
				</div>
				<div class="footer_column">	
					<h4>Follow us</h4>
					<div class="social_links">
						<a href="#"><i class="fab fa-facebook-f"></i></a>
						<a href="#"><i class="fab fa-instagram"></i></a>
						<a href="#"><i class="fab fa-twitter"></i></a>
						<a href="#"><i class="fab fa-linkedin-in"></i></a>
					</div>
				</div>
			</div>
		</div>
	</footer>
    </div>
  )
}

export default Footer